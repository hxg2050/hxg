// import { Application } from "../Application";
// import { touchEventListener } from "../event";
// import { WebglRenderer } from "./render/WebglRenderer";
// import { ticker } from "../ticker";
// import { Matrix } from "../math";
// import { Transform } from "../transform";

// /**
//  * webgl 目前能力不足，性能很差
//  */
// export function webgl(canvas: HTMLCanvasElement) {
//     return function(app: Application) {
//         /**
//          * 设置canvas大小
//          */
//         canvas.width = app.config.width;
//         canvas.height = app.config.height;

//         /**
//          * 自定义渲染器
//          */
//         const gl = canvas.getContext('webgl', {
//             // premultipliedAlpha: false
//         })!;
//         // console.log(gl.webGLVersion);
//         const renderer = new WebglRenderer(gl, app);
//         // canvas.getContext('2d')!.scale(1/dpr, 1/dpr);
//         /**
//          * 创建一个刷新器
//          */
//         // const ticker = new Ticker();
//         ticker.start();
//         ticker.on('update', renderer.render, renderer);
//         app.use(touchEventListener(canvas));
//     }
// }