const CANVAS = document.createElement('canvas');
const CTX = CANVAS.getContext('2d');

export function createCanvasCtx(width: number, height: number) {
    CANVAS.width = width;
    CANVAS.height = height;
    CTX.clearRect(0, 0, width, height);
    return CTX;
}