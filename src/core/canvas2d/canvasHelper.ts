import { hidpi } from "./hidpi";

const canvas = document.createElement('canvas');
const context = hidpi(canvas.getContext('2d', {
    willReadFrequently: true
}) as CanvasRenderingContext2D);
export const canvasHelper = { context };