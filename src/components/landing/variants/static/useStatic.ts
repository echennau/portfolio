"use client";

import { useState, useEffect } from "react";

const BLOCK_SIZE = 2;
const TILE_SIZE = 200;
const INTERVAL_MS = 150;
const LIGHT_ALPHA = 0.2;
const DARK_ALPHA = 0.35;

// single channel values for 5 greyscale levels (r=g=b for greyscale)
const LEVELS = [220, 180, 140, 100, 60] as const;

const ALPHAS = Array.from(
  { length: 5 },
  (_, i) => LIGHT_ALPHA + (DARK_ALPHA - LIGHT_ALPHA) * (i / 4),
);

function drawStatic(ctx: CanvasRenderingContext2D): void {
  ctx.clearRect(0, 0, TILE_SIZE, TILE_SIZE);
  for (let y = 0; y < TILE_SIZE; y += BLOCK_SIZE) {
    for (let x = 0; x < TILE_SIZE; x += BLOCK_SIZE) {
      const level = Math.floor(Math.random() * LEVELS.length);
      const v = LEVELS[level];
      const a = ALPHAS[level];
      ctx.fillStyle = `rgba(${v},${v},${v},${a})`;
      ctx.fillRect(x, y, BLOCK_SIZE, BLOCK_SIZE);
    }
  }
}

export function useStatic(): string {
  const [dataUrl, setDataUrl] = useState<string>("");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = TILE_SIZE;
    canvas.height = TILE_SIZE;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const redraw = () => {
      drawStatic(ctx);
      setDataUrl(canvas.toDataURL("image/png"));
    };

    redraw();
    const id = setInterval(redraw, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return dataUrl;
}
