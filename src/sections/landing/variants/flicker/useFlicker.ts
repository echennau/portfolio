import { useEffect, RefObject } from "react";

const INITIAL_OPACITY = 0.8;
const FADE_IN_DURATION = 0.01;
const FADE_IN_JITTER = 0.15;
const DURATION = 500;
const MAX_START_DELAY = 400;

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

function placeDips(count: number, rangeMin: number, rangeMax: number, minSpacing = 0.15): number[] {
  const positions: number[] = [];
  let attempts = 0;
  while (positions.length < count && attempts < 500) {
    const t = rangeMin + Math.random() * (rangeMax - rangeMin);
    if (positions.every((p) => Math.abs(p - t) > minSpacing)) {
      positions.push(t);
    }
    attempts++;
  }
  return positions.sort((a, b) => a - b);
}

export function generateFlickerKeyframes(): Keyframe[] {
  const flickerCount = Math.random() > 0.66 ? 2 : 1;

  const initialOpacity = clamp(INITIAL_OPACITY + Math.random() * 0.2, 0, 1);

  const jitter = (Math.random() * 2 - 1) * FADE_IN_JITTER;
  const fadeEnd = clamp(FADE_IN_DURATION + jitter, 0.01, 0.95);

  // linear ramp from initialOpacity to 1 over the flicker phase
  const envelope = (t: number) =>
    initialOpacity + (1 - initialOpacity) * ((t - fadeEnd) / (1 - fadeEnd));

  // flickers concentrated in the first ~70% - light struggles early then settles
  const dipPositions = placeDips(flickerCount, fadeEnd + 0.02, 0.5, 0.12);

  const points: Keyframe[] = [
    { offset: 0, opacity: 0 },
    { offset: fadeEnd, opacity: initialOpacity },
  ];

  for (const t of dipPositions) {
    const base = envelope(t);
    const dipDepth = Math.random() * 0.25;
    const recoveryEnd = clamp(t + 0.05 + Math.random() * 0.2, fadeEnd + 0.016, 0.999);
    points.push(
      { offset: clamp(t - 0.008, fadeEnd + 0.001, 0.984), opacity: base },
      { offset: t, opacity: base * dipDepth },
      { offset: recoveryEnd, opacity: envelope(recoveryEnd) },
    );
  }

  points.push({ offset: 1, opacity: 1 });

  return points.sort((a, b) => (a.offset as number) - (b.offset as number));
}

export interface FlickerAnimationOptions {
  duration?: number;
  maxStartDelay?: number;
}

export function useFlickerAnimation(
  ref: RefObject<HTMLElement | null>,
  options?: FlickerAnimationOptions,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const maxDelay = options?.maxStartDelay ?? MAX_START_DELAY;
    const baseDuration = options?.duration ?? DURATION;

    const startDelay = Math.random() * maxDelay;
    const animationDuration = baseDuration - startDelay * Math.random() * 0.7;

    const anim = el.animate(generateFlickerKeyframes(), {
      duration: animationDuration,
      delay: startDelay,
      fill: "both",
      easing: "linear",
    });

    return () => anim.cancel();
  }, [options?.duration, options?.maxStartDelay, ref]); // options intentionally omitted — animation is fixed at mount time
}
