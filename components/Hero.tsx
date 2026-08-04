"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import RootColonizationGraphic from "@/components/RootColonizationGraphic";
import { useLanguage } from "@/components/LanguageProvider";
import { Button, GlassPanel } from "@/components/ui";

type HeroProps = {
  heroVideo: string;
  fullFilm: string;
};

export default function Hero({ heroVideo, fullFilm }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t, isRTL } = useLanguage();

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from("[data-hero-eyebrow]", {
          opacity: 0,
          y: 25,
          duration: 0.8,
        })
        .from(
          "[data-hero-title-line]",
          {
            opacity: 0,
            y: 70,
            rotateX: -16,
            filter: "blur(10px)",
            duration: 1.05,
            stagger: 0.16,
          },
          "-=0.35"
        )
        .from(
          "[data-hero-description]",
          {
            opacity: 0,
            y: 28,
            duration: 0.85,
          },
          "-=0.45"
        )
        .from(
          "[data-hero-signature]",
          {
            opacity: 0,
            y: 20,
            duration: 0.75,
          },
          "-=0.45"
        )
        .from(
          "[data-hero-button]",
          {
            opacity: 0,
            y: 22,
            duration: 0.75,
            stagger: 0.12,
          },
          "-=0.35"
        )
        .from(
          "[data-hero-stat]",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
            stagger: 0.1,
          },
          "-=0.3"
        )
        .from(
          "[data-hero-graphic]",
          {
            opacity: 0,
            scale: 0.9,
            x: isRTL ? -35 : 35,
            duration: 1.1,
          },
          "-=0.8"
        )
        .from(
          "[data-scroll-indicator]",
          {
            opacity: 0,
            y: -10,
            duration: 0.7,
          },
          "-=0.2"
        );

      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          {
            scale: 1.08,
          },
          {
            scale: 1,
            duration: 6,
            ease: "power1.out",
          }
        );
      }
    },
    {
      scope: sectionRef,
      dependencies: [isRTL],
      revertOnUpdate: true,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="accueil"
      className="relative flex min-h-[100svh] items-start overflow-hidden bg-[#071d12] px-5 pb-16 pt-32 text-white sm:items-center sm:px-6 sm:py-32"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-[#06170e]/95 via-[#0a2b1a]/82 to-[#0a2b1a]/44 rtl:bg-gradient-to-l" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05140c]/85 via-transparent to-[#05140c]/45" />

      <div className="pointer-events-none absolute left-[-12rem] top-[20%] h-[30rem] w-[30rem] rounded-full bg-[#58a74b]/15 blur-[100px]" />
      <div className="pointer-events-none absolute right-[-10rem] top-[4%] h-[28rem] w-[28rem] rounded-full bg-[#e3bd42]/12 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-12rem] right-[20%] h-[24rem] w-[24rem] rounded-full bg-[#3c8752]/12 blur-[100px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[length:34px_34px]" />
      </div>

      <div
        className={`relative z-10 mx-auto grid w-full max-w-[1600px] items-center gap-12 xl:grid-cols-[0.82fr_1.18fr] xl:gap-10 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <div className="min-w-0">
          <div data-hero-eyebrow>
            <span className="inline-flex max-w-full rounded-full border border-[#e3bd42]/30 bg-[#e3bd42]/10 px-4 py-2 text-[10px] font-bold uppercase leading-5 tracking-[0.22em] text-[#f0d36f] backdrop-blur-md sm:text-xs sm:tracking-[0.28em]">
              {t.hero.eyebrow}
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-[2.75rem] font-extrabold leading-[0.98] tracking-[-0.045em] sm:mt-8 sm:text-6xl sm:leading-[0.94] sm:tracking-[-0.055em] lg:text-[5.6rem]">
            <span data-hero-title-line className="block origin-bottom">
              {t.hero.titleLine1}
            </span>

            <span
              data-hero-title-line
              className="mt-2 block origin-bottom bg-gradient-to-r from-[#f3d66f] via-[#e3bd42] to-[#9ddf77] bg-clip-text text-transparent rtl:bg-gradient-to-l"
            >
              {t.hero.titleLine2}
            </span>
          </h1>

          <p
            data-hero-description
            className="mt-7 max-w-2xl text-base leading-7 text-white/78 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl"
          >
            {t.hero.description}
          </p>

          <p
            data-hero-signature
            className={`mt-5 max-w-2xl text-sm font-semibold leading-6 text-white/65 sm:leading-7 ${
              isRTL
                ? "border-r-2 border-[#e3bd42]/70 pr-4 sm:pr-5"
                : "border-l-2 border-[#e3bd42]/70 pl-4 sm:pl-5"
            }`}
          >
            {t.hero.signature}
          </p>

          <div
            className={`mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4 ${
              isRTL ? "sm:flex-row-reverse sm:justify-end" : ""
            }`}
          >
            <div data-hero-button className="w-full sm:w-auto">
              <Button
                href="#technologie"
                variant="primary"
                className="w-full sm:w-auto"
              >
                {t.hero.discover}
              </Button>
            </div>

            <div data-hero-button className="w-full sm:w-auto">
              <Button
                href={fullFilm}
                variant="outline"
                target="_blank"
                className="w-full sm:w-auto"
              >
                {t.hero.film}
              </Button>
            </div>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 min-[420px]:grid-cols-3 sm:mt-12">
            {t.hero.stats.map((item) => (
              <div
                key={`${item.value}-${item.label}`}
                data-hero-stat
                className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 backdrop-blur-md"
              >
                <p className="text-lg font-extrabold text-[#e3bd42]">
                  {item.value}
                </p>
                <p className="mt-1 text-xs leading-5 text-white/50">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div data-hero-graphic className="hidden min-w-0 xl:block">
          <GlassPanel className="relative w-full overflow-hidden p-3">
            <RootColonizationGraphic />
          </GlassPanel>
        </div>
      </div>

      <a
        data-scroll-indicator
        href="#technologie"
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.26em] text-white/45 transition hover:text-white/80 sm:flex"
      >
        {t.hero.explore}
        <span className="block h-8 w-px bg-gradient-to-b from-[#e3bd42] to-transparent" />
      </a>
    </section>
  );
}
