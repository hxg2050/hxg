

/**
 * 解决canvas模糊问题
 * 重写部分用到的api
 */
export function hidpi(context: CanvasRenderingContext2D, dpi = window.devicePixelRatio): CanvasRenderingContext2D {

    // const dpi = window.devicePixelRatio;
    if (dpi == 1) {
        return context;
    }
    // context.scale(dpi, dpi);

    const {
        clearRect,
        fillText,
        strokeText,
        stroke,
        drawImage,
        translate,
        transform,
        getImageData,
        moveTo,
        lineTo,
        arc,
        roundRect,
        rect,
        fillRect,
        strokeRect,
        measureText
    } = context;

    //    clearRect(x: number, y: number, w: number, h: number): void;
    context.clearRect = (x: number, y: number, w: number, h: number) => {
        x *= dpi;
        y *= dpi;
        w *= dpi;
        h *= dpi;
        clearRect.bind(context)(x, y, w, h);
    }
    context.stroke = () => {
        context.lineWidth *= dpi;
        stroke.bind(context)();
        context.lineWidth /= dpi;
    }
    context.fillText = (...args) => {
        args[1] *= dpi;
        args[2] *= dpi;
        const font = context.font;
        context.font = font.replace(
            /(\d+)(px|em|rem|pt)/g,
            function (w, m, u) {
                w;
                return (m * dpi) + u;
            }
        );
        fillText.bind(context)(...args);
        context.font = font;
    }
    context.strokeText = (...args) => {
        args[1] *= dpi;
        args[2] *= dpi;
        const font = context.font;
        context.font = font.replace(
            /(\d+)(px|em|rem|pt)/g,
            function (w, m, u) {
                w;
                return (m * dpi) + u;
            }
        );
        strokeText.bind(context)(...args);
        context.font = font;
    }

    // drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
    context.drawImage = (image: CanvasImageSource, sx: number, sy: number, sw?: number, sh?: number, dx?: number, dy?: number, dw?: number, dh?: number) => {
        if (sw != undefined && sh != undefined) {
            if (dx != undefined && dy != undefined && dw != undefined && dh != undefined) {
                dw *= dpi;
                dh *= dpi;
                // console.log(image, image.width, image.height);
                drawImage.bind(context)(image, sx, sy, sw, sh, dx, dy, dw, dh);
            } else {
                drawImage.bind(context)(image, sx, sy, sw, sh);
            }
        } else {
            drawImage.bind(context)(image, sx, sy);
        }
    }

    context.translate = (x: number, y: number) => {
        x *= dpi;
        y *= dpi;
        translate.bind(context)(x, y);
    }

    // transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    context.transform = (a: number, b: number, c: number, d: number, e: number, f: number) => {
        e *= dpi;
        f *= dpi;
        transform.bind(context)(a, b, c, d, e, f);
    }

    context.getImageData = (sx: number, sy: number, sw: number, sh: number, settings?: ImageDataSettings) => {
        sx *= dpi;
        sy *= dpi;
        sw *= dpi;
        sh *= dpi;
        return getImageData.bind(context)(sx, sy, sw, sh, settings);
    }

    context.moveTo = (x: number, y: number) => {
        x *= dpi;
        y *= dpi;
        return moveTo.bind(context)(x, y);
    }

    context.lineTo = (x: number, y: number) => {
        x *= dpi;
        y *= dpi;
        return lineTo.bind(context)(x, y);
    }

    // x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean
    context.arc = (x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean) => {
        x *= dpi;
        y *= dpi;
        radius *= dpi;
        return arc.bind(context)(x, y, radius, startAngle, endAngle, counterclockwise);
    }

    const parseRadii = (radii: number | DOMPointInit | (number | DOMPointInit)[]) => {
        if (typeof radii === 'number') {
            return radii * dpi;
        }

        if (Array.isArray(radii)) {
            return radii.map(val => parseRadii(val));
        }

        if (typeof radii === 'object') {
            radii.x *= dpi;
            radii.y *= dpi;
            radii.z *= dpi;
            return radii;
        }
    }

    context.roundRect = (x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | (number | DOMPointInit)[]) => {
        x *= dpi;
        y *= dpi;
        w *= dpi;
        h *= dpi;
        return roundRect.bind(context)(x, y, w, h, parseRadii(radii));
    }
    context.rect = (x: number, y: number, w: number, h: number) => {
        x *= dpi;
        y *= dpi;
        w *= dpi;
        h *= dpi;
        return rect.bind(context)(x, y, w, h);
    }
    context.fillRect = (x: number, y: number, w: number, h: number) => {
        x *= dpi;
        y *= dpi;
        w *= dpi;
        h *= dpi;
        return fillRect.bind(context)(x, y, w, h);
    }
    context.strokeRect = (x: number, y: number, w: number, h: number) => {
        x *= dpi;
        y *= dpi;
        w *= dpi;
        h *= dpi;
        context.lineWidth *= dpi;
        strokeRect.bind(context)(x, y, w, h);
        context.lineWidth /= dpi;
    }

    // context.measureText = (text: string) => {
    //     const font = context.font;
    //     context.font = font.replace(
    //         /(\d+)(px|em|rem|pt)/g,
    //         function (w, m, u) {
    //             w;
    //             return (m * dpi) + u;
    //         }
    //     );
    //     const res = measureText.bind(context)(text);
    //     context.font = font;
    //     return res;
    // }

    const { getContext } = context.canvas;

    context.canvas.getContext = (contextId: string, options?: any) => {
        if (contextId == '2d') {
            return context;
        }
        return getContext.bind(context.canvas)(contextId) as any;
    }

    return context;
}