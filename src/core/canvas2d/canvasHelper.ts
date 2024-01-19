import { hidpi } from "./hidpi";

export interface ICanvasContext extends CanvasRenderingContext2D {
    canvas: HTMLCanvasElement & {
        computedWidth: number;
        computedHeight: number;
    }
}

function createContext(width: number = 0, height: number = 0, dpi = window.devicePixelRatio): ICanvasContext {
    const canvas = document.createElement('canvas');
    Object.defineProperty(canvas, 'computedWidth', {
        get() {
            return canvas.width / dpi;
        },
        set(val: number) {
            canvas.width = val * dpi;
        }
    });

    Object.defineProperty(canvas, 'computedHeight', {
        get() {
            return canvas.height / dpi;
        },
        set(val: number) {
            canvas.height = val * dpi;
        }
    });
    let context = canvas.getContext('2d', {
        willReadFrequently: true
    })! as ICanvasContext;
    if (dpi) {
        context = hidpi(context, dpi) as ICanvasContext;
    }

    context.canvas.computedWidth = width;
    context.canvas.computedHeight = height;
    return context;
}

async function toImage(canvas: HTMLCanvasElement): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
        const image = new Image();
        image.src = canvas.toDataURL();
        image.onload = () => {
            image.onload = null;
            resolve(image);
        }
    });
}

export const canvasHelper = {
    createContext,
    toImage
};