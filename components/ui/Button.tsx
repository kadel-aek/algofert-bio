import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
  target?: "_blank" | "_self";
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#e3bd42] text-[#17351f] shadow-lg shadow-black/15 hover:-translate-y-1 hover:bg-[#efca54]",
  secondary:
    "bg-[#17351f] text-white shadow-lg shadow-[#17351f]/20 hover:-translate-y-1 hover:bg-[#245331]",
  outline:
    "border border-white/35 bg-white/5 text-white backdrop-blur-sm hover:-translate-y-1 hover:border-white/60 hover:bg-white/15",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  target = "_self",
}: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full px-7 py-4 font-bold transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}