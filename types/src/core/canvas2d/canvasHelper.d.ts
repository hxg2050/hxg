declare function createContext(width?: number, height?: number): CanvasRenderingContext2D;
declare function toImage(canvas: HTMLCanvasElement): Promise<HTMLImageElement>;
export declare const canvasHelper: {
    createContext: typeof createContext;
    toImage: typeof toImage;
};
export {};
