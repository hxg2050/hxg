/**
 * 解决canvas模糊问题
 * 重写部分用到的api
 */
export function hidpi(context: CanvasRenderingContext2D): CanvasRenderingContext2D {

    const dpi = window.devicePixelRatio;
    if (dpi == 1) {
        return context;
    }
    context.canvas.width *= dpi;
    context.canvas.height *= dpi;
    // context.scale(dpi, dpi);

    const { clearRect, fillText, strokeText, stroke, drawImage, transform } = context;
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
                drawImage.bind(context)(image, sx, sy, sw, sh, dx, dy, dw, dh);
            } else {
                drawImage.bind(context)(image, sx, sy, sw, sh);
            }
        } else {
            drawImage.bind(context)(image, sx, sy);
        }
    }

    // transform(a: number, b: number, c: number, d: number, e: number, f: number): void;
    context.transform = (a: number, b: number, c: number, d: number, e: number, f: number) => {
        // a *= dpi;
        // b *= dpi;
        // c *= dpi;
        // d *= dpi;
        e *= dpi;
        f *= dpi;
        transform.bind(context)(a, b, c, d, e, f);
    }

    return context;
}