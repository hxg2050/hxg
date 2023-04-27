import { hidpi } from "./hidpi";


function createContext(width: number = 0, height: number = 0, dpi = window.devicePixelRatio): CanvasRenderingContext2D {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    let context = canvas.getContext('2d', {
        willReadFrequently: true
    })!;
    if (dpi) {
        context = hidpi(context, dpi);
    }

    context.clearRect(0, 0, width, height);
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