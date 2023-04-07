import { hidpi } from "./hidpi";


function createContext(width: number = 0, height: number = 0) {
    const canvas = document.createElement('canvas');
    const context = hidpi(canvas.getContext('2d', {
        willReadFrequently: true
    }) as CanvasRenderingContext2D);

    canvas.width = width;
    canvas.height = height;
    context.clearRect(0, 0, width, height);
    return context;
}

async function toImage(canvas: HTMLCanvasElement): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
        const image = new Image();
        image.src = canvas.toDataURL();
        image.onload = () => {
            image.onload = undefined;
            resolve(image);
        }
    });
}

export const canvasHelper = {
    createContext,
    toImage
};