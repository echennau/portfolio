import { useState, useEffect } from "react";

interface CamoOptions {
    blockSize?: number;
    intervalMs?: number;
    lightAlpha?: number;
    darkAlpha?: number;
}

// [r, g, b] tuples for the 5 greyscale levels
const LEVELS = [255, 200, 128, 50, 0] as const;

function buildAlphas(lightAlpha: number, darkAlpha: number): number[] {
    // interpolate alpha across 5 levels: lightest -> darkest
    return [lightAlpha, 0.25, 0.15, 0.30, darkAlpha];
}

function drawCamo(
    ctx: CanvasRenderingContext2D,
    size: number,
    blockSize: number,
    alphas: number[],
): void {
    ctx.clearRect(0, 0, size, size);
    for (let y = 0; y < size; y += blockSize) {
        for (let x = 0; x < size; x += blockSize) {
            const level = Math.floor(Math.random() * LEVELS.length);
            const v = LEVELS[level];
            const a = alphas[level];
            ctx.fillStyle = `rgba(${v},${v},${v},${a})`;
            ctx.fillRect(x, y, blockSize, blockSize);
        }
    }
}

export function useCamoBackground(options?: CamoOptions): string {
    const blockSize = options?.blockSize ?? 14;
    const intervalMs = options?.intervalMs ?? 1000;
    const lightAlpha = options?.lightAlpha ?? 0.20;
    const darkAlpha = options?.darkAlpha ?? 0.35;

    const [dataUrl, setDataUrl] = useState<string>("");

    useEffect(() => {
        const size = blockSize * 20;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d")!;
        const alphas = buildAlphas(lightAlpha, darkAlpha);

        const redraw = () => {
            drawCamo(ctx, size, blockSize, alphas);
            setDataUrl(canvas.toDataURL("image/png"));
        };

        redraw();
        const id = setInterval(redraw, intervalMs);
        return () => clearInterval(id);
    }, [blockSize, intervalMs, lightAlpha, darkAlpha]);

    return dataUrl;
}
