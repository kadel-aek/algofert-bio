import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  theme?: "light" | "dark" | "glass";
};

const themes = {
  light:
    "border border-[#e0e7dd] bg-white text-[#17351f] shadow-sm shadow-[#17351f]/5",
  dark:
    "border border-white/10 bg-[#17351f] text-white shadow-xl shadow-black/10",
  glass:
    "border border-white/10 bg-white/[0.06] text-white backdrop-blur-md",
};

export default function Card({
  children,
  className = "",
  theme = "light",
}: CardProps) {
  return (
    <article
      className={`rounded-3xl p-7 transition duration-300 hover:-translate-y-1 ${themes[theme]} ${className}`}
    >
      {children}
    </article>
  );
}