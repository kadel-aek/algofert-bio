import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  theme?: "green" | "gold" | "light";
  className?: string;
};

const themes = {
  green: "border-[#2e7d32]/20 bg-[#2e7d32]/10 text-[#246429]",
  gold: "border-[#e3bd42]/30 bg-[#e3bd42]/10 text-[#9a7411]",
  light: "border-white/15 bg-white/10 text-white/80",
};

export default function Badge({
  children,
  theme = "green",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] ${themes[theme]} ${className}`}
    >
      {children}
    </span>
  );
}