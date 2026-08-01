import type { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassPanel({
  children,
  className = "",
}: GlassPanelProps) {
  return (
    <div
      className={`rounded-[2rem] border border-white/15 bg-white/[0.07] p-7 shadow-2xl shadow-black/15 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}