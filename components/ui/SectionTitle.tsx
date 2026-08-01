type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionTitleProps) {
  const centered = align === "center";
  const dark = theme === "dark";

  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-4xl ${className}`}
    >
      <p
        className={`text-sm font-bold uppercase tracking-[0.3em] ${
          dark ? "text-[#e3bd42]" : "text-[#2e7d32]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl ${
          dark ? "text-white" : "text-[#17351f]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-lg leading-8 ${
            dark ? "text-white/65" : "text-[#536158]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}