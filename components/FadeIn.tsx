"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 30,
}: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!elementRef.current) return;

      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          y,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          delay,
          ease: "power3.out",
        }
      );
    },
    { scope: elementRef }
  );

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}