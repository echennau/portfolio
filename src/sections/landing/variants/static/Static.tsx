"use client";

import { useStatic } from "./useStatic";

const Camo = () => {
  const camoUrl = useStatic();

  return (
    <div className="px-[4vw] w-full h-full flex flex-col justify-end">
      <span
        className="type-mono text-9xl!"
        style={{
          backgroundImage: camoUrl
            ? `url(${camoUrl}), linear-gradient(var(--color-primary), var(--color-primary))`
            : `linear-gradient(var(--color-primary), var(--color-primary))`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Saving this for a rainy day
      </span>
    </div>
  );
};

export default Camo;
