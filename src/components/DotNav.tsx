"use client";

interface DotNavProps {
  count: number;
  activeIndex: number;
  slideIds: string[];
  containerRef: React.RefObject<HTMLDivElement | null>;
  onDotClick?: (index: number) => void;
}

export default function DotNav({
  count,
  activeIndex,
  slideIds,
  onDotClick,
}: DotNavProps) {
  return (
    <nav
      className="fixed right-3 top-1/2 z-40 -translate-y-1/2 sm:right-5"
      aria-label="Slide navigation"
    >
      <ul className="flex flex-col gap-3">
        {Array.from({ length: count }).map((_, i) => (
          <li key={slideIds[i]}>
            <button
              onClick={() => onDotClick?.(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === activeIndex ? "true" : undefined}
              className={`block h-2.5 w-2.5 rounded-full border border-white/60 transition-all ${
                i === activeIndex
                  ? "scale-125 bg-white"
                  : "bg-white/20 hover:bg-white/50"
              }`}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
