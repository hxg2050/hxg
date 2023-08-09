import { Application } from "../../Application";
import { ticker } from "../../ticker";
import { Component, Container, Sprite } from "../../component";
import { Text } from "../../component/Text";
import { Matrix } from "../../math/Matrix";
import { Transform, Constructor } from "../../transform";

import VSHADER_SOURCE from '../VSHADER_SOURCE.vert?raw';
import FSHADER_SOURCE from '../FSHADER_SOURCE.frag?raw';
import { BaseTexture, Texture } from "../../texture";

export const ProgramCache: { [key: string]: WebGLProgram } = {};

const dpi = window.devicePixelRatio;

let c: any;
let ec: any;
let t: any = {};
let tex: any;
let lastTexture: any = null;

let vfvar: any = {};

const x = 0;
const y = 0;

const p = [
    x, -y,
    x, 0,
    0, -y,
    0, 0,
    0.0, 1.0,
    0.0, 0.0,
    1.0, 1.0,
    1.0, 0.0
]

// 设置顶点信息 - 开始
const points = new Float32Array(p);

interface IShowTexture extends BaseTexture {
    source: TexImageSource;
}

interface IShowComponent extends Component {
    texture: IShowTexture
}

type RenderFunction<T extends Container> = (context: WebGLRenderingContext, matrix: Matrix, component: T) => void

type RenderAction<T extends Container = any> = [
    // Transform,
    Constructor<T>, // 要渲染的类型
    RenderFunction<T> // 渲染的逻辑
];

function timediff(cb: Function, name: string = '') {
    const startTime = Date.now();
    cb();
    console.log(name, '运行时间', Date.now() - startTime);
}

/**
 * 渲染器
 */
export class WebglRenderer {

    renderActions: RenderAction[] = [
        [Sprite, this.draw],
        [Text, this.draw],
    ];

    constructor(public gl: WebGLRenderingContext, public app: Application) {
        // 开启混合
        gl.enable(gl.BLEND);
        // 设定混合效
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        this.gl.clearColor(1, 1, 1, 1);
        this.init();
    }

    private maxSize = 0;

    init() {
        this.gl.canvas.width *= dpi;
        this.gl.canvas.height *= dpi;
        this.maxSize = Math.max(this.gl.canvas.width, this.gl.canvas.height);
        this.gl.viewport(0, 0, this.maxSize, this.maxSize);
    }

    initShader(gl: WebGLRenderingContext, vertex: string, fragment: string): WebGLProgram {
        const key = 1;//vertex + fragment;
        let cache = ProgramCache[key];
        if (!cache) {

            const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
            const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!;

            gl.shaderSource(vertexShader, vertex);
            gl.shaderSource(fragmentShader, fragment);

            gl.compileShader(vertexShader);
            gl.compileShader(fragmentShader);

            const program = gl.createProgram()!;
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);

            gl.linkProgram(program);
            gl.useProgram(program);
            ProgramCache[key] = cache = program;
        }
        return cache;
    }

    draw(program: WebGLProgram, matrix: Matrix, component: IShowComponent) {
        const gl = this.gl;
        const node = component.node;
        const drawTexture = component.texture;
        // matrix.setTransform(node);

        // const p = [
        //     x, -y,
        //     x, -drawTexture.height * 2 * dpi,
        //     x + drawTexture.width * 2 * dpi, -y,
        //     x + drawTexture.width * 2 * dpi, -drawTexture.height * 2 * dpi,
        //     0.0, 1.0,
        //     0.0, 0.0,
        //     1.0, 1.0,
        //     1.0, 0.0
        // ]
        points[3] = -drawTexture.height * 2 * dpi;
        points[4] = x + drawTexture.width * 2 * dpi;
        points[6] = x + drawTexture.width * 2 * dpi;
        points[7] = -drawTexture.height * 2 * dpi;

        // 设置顶点信息 - 开始
        // const points = new Float32Array(p);
        const SIZE = points.BYTES_PER_ELEMENT;
        let buffer = !!c ? c : gl.createBuffer();

        if (!c) {
            vfvar['a_Position'] = gl.getAttribLocation(program, 'a_Position');
            gl.enableVertexAttribArray(vfvar['a_Position']);

            vfvar['u_TexCoord'] = gl.getAttribLocation(program, 'a_TexCoord');
            gl.enableVertexAttribArray(vfvar['u_TexCoord']);

            vfvar['a_MaxSize'] = gl.getAttribLocation(program, 'a_MaxSize');

            vfvar['a_MaxSize'] = gl.getUniformLocation(program, 'u_Matrix3');
            vfvar['u_Alpha'] = gl.getUniformLocation(program, 'u_Alpha');
            ec = gl.createBuffer();
            let eleArray = new Uint16Array([
                0, 1, 2, 3
            ]);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ec);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, eleArray, gl.STATIC_DRAW);
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

        const a_Position = vfvar['a_Position'];
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

        const u_TexCoord = vfvar['u_TexCoord'];
        gl.vertexAttribPointer(u_TexCoord, 2, gl.FLOAT, false, SIZE * 2, SIZE * 8);

        const a_MaxSize = vfvar['a_MaxSize'];
        gl.vertexAttrib1f(a_MaxSize, this.maxSize);

        const nm = matrix.get();

        nm[6] = (nm[6] * 2 * dpi - this.maxSize) / this.maxSize;
        nm[7] = (-nm[7] * 2 * dpi + this.maxSize) / this.maxSize;
        const a_m = new Float32Array([
            ...nm
        ]);
        // console.log(gl.getParameter(gl.VIEWPORT));
        // console.log(`${a_m[0]} ${a_m[1]} ${a_m[2]} 
        // ${a_m[3]} ${a_m[4]} ${a_m[5]} 
        // ${a_m[6]} ${a_m[7]} ${a_m[8]} `);
        const u_Matrix3 = vfvar['a_MaxSize'];
        gl.uniformMatrix3fv(u_Matrix3, false, a_m);

        // 设置顶点信息 - 结束
        const u_Alpha = vfvar['u_Alpha'];
        gl.uniform1f(u_Alpha, node.alpha);

        if (!t[node.id]) {
            t[node.id] = node;
            c = buffer;
            if (!tex) {
                tex =  gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, tex);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            }
        }
        if (lastTexture != component.texture) {
            lastTexture = component.texture;
            // 处理纹理 - 开始
            const texture = tex;
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);//对纹理图像进行y轴反转
    
            gl.bindTexture(gl.TEXTURE_2D, texture);

            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, lastTexture.source);
        }
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        // gl.bindBuffer(gl.ARRAY_BUFFER, ec);
        // gl.drawElements(gl.TRIANGLE_STRIP, 4, gl.UNSIGNED_SHORT, 0);
        // 处理纹理 - 结束
    }

    render() {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        drawGroup.length = 0;
        _lastTexture = undefined;
        this._render(this.app.stage);
        // console.log(drawGroup);
        drawGroup.forEach(val => {
            drawAfter(this.gl, val, this.maxSize);
        });
    }

    private _render(transform: Transform, parentMatrix?: Matrix) {
        // 当前节点帧开始
        if (!transform.active) {
            return;
        }
        transform.emitter.emit(Transform.Event.TICKER_BEFORE);
        transform.update(ticker.deltaTime);
        const matrix = new Matrix();
        matrix.setTransform(transform);
        if (parentMatrix) {
            matrix.prepend(parentMatrix);
        }

        for (let j = 0; j < this.renderActions.length; j++) {
            if (this._renderElement(transform, this.renderActions[j][0], matrix, this.renderActions[j][1])) {
                break;
            }
        }

        // 当前节点帧结束
        transform.emitter.emit(Transform.Event.TICKER_AFTER);
        if (transform.children.length == 0) {
            return;
        }

        for (let i = 0; i < transform.children.length; i++) {
            const child = transform.children[i];
            this._render(child, matrix);
        }
    }

    /**
     * 判断是否需要渲染，并执行渲染返回结果
     * @param transform 
     * @param constructor 
     * @param callback 
     * @returns 
     */
    private _renderElement<T extends Container>(transform: Transform, constructor: Constructor<T>, matrix: Matrix, callback: Function) {
        const element = transform.getComponent(constructor);
        if (!element) {
            return false;
        }
        const program = this.initShader(this.gl, VSHADER_SOURCE, FSHADER_SOURCE);
        drawBefore(program, matrix, element);
        // callback.bind(this)(program, matrix, element);
        return true;
    }
}
interface IDraw {
    program: WebGLProgram,
    matrixs: Matrix[],
    component: IShowComponent
}

let drawGroup:IDraw[] = [
];

let _lastTexture: IShowTexture;
/**
 * 同类型的问题缓存一起绘制
 * @param matrix 
 * @param component 
 */
function drawBefore(program: WebGLProgram, matrix: Matrix, component: any) {
    if (!component.texture) {
        return;
    }
    const drawTexture = component.texture;

    if (_lastTexture != drawTexture) {
        _lastTexture = drawTexture;
        // const nm = matrix.get();

        // nm[6] = (nm[6] * 2 * dpi - this.maxSize) / this.maxSize;
        // nm[7] = (-nm[7] * 2 * dpi + this.maxSize) / this.maxSize;

        drawGroup.push({
            program,
            component,
            matrixs: [matrix]
        });
    } else {
        const matrixs = drawGroup[drawGroup.length - 1].matrixs;
        // for (let i = 0; i < p.length; i ++) {
            // points.push(p[i]);
        // }
        // p.forEach(val => points.push(val));
        matrixs.push(matrix);
    }
}

let mc: any;

function drawInit(gl: WebGLRenderingContext, program: WebGLProgram) {
    c = gl.createBuffer();

    const points = new Float32Array([
        0, -0,
        0, -1,
        1, -0,
        1, -1,
        0.0, 1.0,
        0.0, 0.0,
        1.0, 1.0,
        1.0, 0.0
    ]);
    vfvar['a_Position'] = gl.getAttribLocation(program, 'a_Position');
    gl.enableVertexAttribArray(vfvar['a_Position']);

    vfvar['u_TexCoord'] = gl.getAttribLocation(program, 'a_TexCoord');
    gl.enableVertexAttribArray(vfvar['u_TexCoord']);


    vfvar['a_MaxSize'] = gl.getAttribLocation(program, 'a_MaxSize');

    vfvar['a_MaxSize'] = gl.getUniformLocation(program, 'u_Matrix3');
    vfvar['u_Alpha'] = gl.getUniformLocation(program, 'u_Alpha');

    // 获取矩阵参数位置
    vfvar['a_Matrix'] = gl.getAttribLocation(program, 'a_Matrix');


    
    gl.bindBuffer(gl.ARRAY_BUFFER, c);
    gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

    const SIZE = points.BYTES_PER_ELEMENT;

    const a_Position = vfvar['a_Position'];
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

    const u_TexCoord = vfvar['u_TexCoord'];
    gl.vertexAttribPointer(u_TexCoord, 2, gl.FLOAT, false, 0, SIZE * 8);

    // 设置顶点信息 - 结束
    const u_Alpha = vfvar['u_Alpha'];
    gl.uniform1f(u_Alpha, 1);


    ec = gl.createBuffer();
    let eleArray = new Uint16Array([
        0, 1, 2, 3
    ]);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ec);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, eleArray, gl.STATIC_DRAW);


    // 创建矩阵信息buffer
    mc = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, mc);
    gl.bufferData(gl.ARRAY_BUFFER, 0, gl.DYNAMIC_DRAW);
// 处理纹理 - 结束
}

let isIni = false;

function drawAfter(gl: WebGLRenderingContext, data: IDraw, maxSize: number) {
    // const matrixs = data.matrixs;
    const program = data.program;
    const _tex = data.component.texture;
    if (!isIni) {
        isIni = true;
        drawInit(gl, program);

    }
    const a_MaxSize = vfvar['a_MaxSize'];
    gl.vertexAttrib1f(a_MaxSize, maxSize);

    tex =  gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    // 处理纹理 - 开始
    const texture = tex;
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);//对纹理图像进行y轴反转

    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _tex.source);

    const matrixs = [];
    data.matrixs.forEach(matrix => {
        // const matrix = matrixs[i];
        const nm = matrix.get();
        let x = matrix.size.x;
        let y = matrix.size.y;
        if (_tex instanceof Texture) {
            x = _tex.width;
            y = _tex.height;
        }

        x = x * dpi * 2 / maxSize;
        y = y * dpi * 2 / maxSize;

        nm[0] = x * nm[0];
        nm[1] = x * nm[1];
        nm[2] = x * nm[2];
        nm[3] = y * nm[3];
        nm[4] = y * nm[4];
        nm[5] = y * nm[5];
        nm[6] = (nm[6] * 2 * dpi - maxSize) / maxSize;
        nm[7] = (-nm[7] * 2 * dpi + maxSize) / maxSize;
        matrixs.push.apply(matrixs, nm)
    });
    const matrixData = new Float32Array(matrixs);
    // console.log(matrixData);
    // gl.bindBuffer(gl.ARRAY_BUFFER, vfvar['a_Matrix']);
    // gl.bufferSubData(gl.ARRAY_BUFFER, 0, matrixData);

    // 创建矩阵信息buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, mc);
    gl.bufferData(gl.ARRAY_BUFFER, matrixData.byteLength, gl.DYNAMIC_DRAW);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, matrixData);

    
    const ext = gl.getExtension('ANGLE_instanced_arrays')!;
    
    const bytesPerMatrix = 3 * 4;
    for (let i = 0; i < 3; i ++) {
      const loc = vfvar['a_Matrix'] + i;
      gl.enableVertexAttribArray(loc);
      // 注意stride和offset
      const offset = i * bytesPerMatrix;  // 一行有4个单精度浮点数，1个就占用4字节
      gl.vertexAttribPointer(
          loc,              // location
          3,                // size (num values to pull from buffer per iteration)
          gl.FLOAT,         // type of data in buffer
          false,            // normalize
          bytesPerMatrix * 3,   // stride, num bytes to advance to get to next set of values
          offset,           // offset in buffer
      );
      // 这行说的是attribute只对下一个实例才进行迭代
      ext.vertexAttribDivisorANGLE(loc, 1);
    }
    // console.log(matrixData);
    // ext.drawArraysInstancedANGLE(gl.TRIANGLE_STRIP, 0, 4, data.matrixs.length);
    // for (let i = 0; i < data.matrixs.length; i ++) {
    
    
    //     const matrix = matrixs[i];
    //     const nm = matrix.get();
    //     let x = matrix.size.x;
    //     let y = matrix.size.y;
    //     if (_tex instanceof TextTexture) {
    //         x = _tex.width;
    //         y = _tex.height;
    //     }

    //     x = x * dpi * 2 / maxSize;
    //     y = y * dpi * 2 / maxSize;

    //     nm[0] = x * nm[0];
    //     nm[1] = x * nm[1];
    //     nm[2] = x * nm[2];
    //     nm[3] = y * nm[3];
    //     nm[4] = y * nm[4];
    //     nm[5] = y * nm[5];
    //     nm[6] = (nm[6] * 2 * dpi - maxSize) / maxSize;
    //     nm[7] = (-nm[7] * 2 * dpi + maxSize) / maxSize;
    //     const a_m = new Float32Array([
    //         ...nm
    //     ]);
    //     // console.log(gl.getParameter(gl.VIEWPORT));
    //     // console.log(`${a_m[0]} ${a_m[1]} ${a_m[2]} 
    //     // ${a_m[3]} ${a_m[4]} ${a_m[5]} 
    //     // ${a_m[6]} ${a_m[7]} ${a_m[8]} `);
    //     const u_Matrix3 = vfvar['a_MaxSize'];
    //     gl.uniformMatrix3fv(u_Matrix3, false, a_m);
    
    //     // gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    //     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ec);
    //     // const ecBuffer = new Uint16Array([ ... data.points.keys() ]);
    //     // gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, ecBuffer, gl.STATIC_DRAW);
    //     // console.log(ecBuffer);
    //     // gl.drawElements(gl.TRIANGLE_STRIP, 4, gl.UNSIGNED_SHORT, 0);

    // }
}

class DrawIns {
    gl: WebGLRenderingContext;
    program: WebGLProgram;
    constructor(gl: WebGLRenderingContext) {
        this.gl = gl;
    }

    init(group: IDraw) {
        // 获取顶点参数位置
        const a_Position = this._getAttribLocation('a_Position');
        // 获取矩阵参数位置
        const a_Matrix = this._getAttribLocation('a_Matrix');
        // 获取纹理截取位置
        const a_TexCoord = this._getAttribLocation('a_TexCoord');

        // 创建矩阵信息buffer
        const matrixBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, matrixBuffer);

        const matrixs = [];
        group.matrixs.forEach(val => matrixs.push.apply(matrixs, val));
        const matrixData = new Float32Array(matrixs);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, matrixBuffer);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, matrixData);
    }

    _getAttribLocation(name: string) {
        return this.gl.getAttribLocation(this.program, name);
    }
}

function drawInitIns(gl: WebGLRenderingContext, program: WebGLProgram) {

}
function drawAfterIns(gl: WebGLRenderingContext, data: IDraw, maxSize: number) {
    // const ext = gl.getExtension('ANGLE_instanced_arrays');

}