"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import {
  type MouseEvent,
  useEffect,
  useState,
} from "react";

import { SiteHeader } from "@/components/site-header";
import { categories } from "@/data/services";

const layouts = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-7",
  "lg:col-span-5",
];

/* =========================================================
   IMAGE HERO

   Plus tard :

   public/prestations/hero-prestations.webp

   puis :

   const heroImage =
     "/prestations/hero-prestations.webp";
   ========================================================= */

const heroImage = "";

/* =========================================================
   CONTOUR ONDULÉ DU GRAND CERCLE
   ========================================================= */

function createWavyCirclePath() {
  const points = 260;

  const centerX = 200;
  const centerY = 200;

  const baseRadius = 169;

  let path = "";

  for (
    let index = 0;
    index <= points;
    index++
  ) {
    const angle =
      (index / points) * Math.PI * 2;

    const waveOne =
      Math.sin(angle * 12) * 4.2;

    const waveTwo =
      Math.sin(angle * 7 + 0.7) * 2.4;

    const waveThree =
      Math.sin(angle * 19 + 1.3) * 1.1;

    const radius =
      baseRadius +
      waveOne +
      waveTwo +
      waveThree;

    const x =
      centerX +
      Math.cos(angle) * radius;

    const y =
      centerY +
      Math.sin(angle) * radius;

    if (index === 0) {
      path = `M ${x.toFixed(2)} ${y.toFixed(2)}`;
    } else {
      path += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
  }

  return `${path} Z`;
}

const wavyCirclePath =
  createWavyCirclePath();

/* =========================================================
   PAGE
   ========================================================= */

export default function PrestationsPage() {
  const [showBackToTop, setShowBackToTop] =
    useState(false);

  /* =======================================================
     APPARITION AUTOMATIQUE DU BOUTON ↑

     Fonctionne :
     - avec le bouton Découvrir
     - avec la molette
     - avec le tactile
     - avec le trackpad
     ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const threshold =
        window.innerHeight * 0.2;

      setShowBackToTop(
        window.scrollY > threshold,
      );
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  /* =======================================================
     DESCENDRE VERS LES CATÉGORIES
     ======================================================= */

  const handleDiscover = (
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();

    document
      .getElementById("univers")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  /* =======================================================
     RETOUR HERO
     ======================================================= */

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SiteHeader />

      <main className="overflow-x-clip bg-timscare-cream">
        {/* =====================================================
            HERO
            ===================================================== */}

        <section
          className="
            relative
            h-[100dvh]
            overflow-hidden
            bg-timscare-cream
          "
        >
          {/* ===================================================
              GRAND CERCLE
              =================================================== */}

          <div
            className="
              absolute

              -right-[48%]
              top-[8%]

              aspect-square
              w-[112%]

              sm:-right-[28%]
              sm:top-[3%]
              sm:w-[78%]

              md:-right-[18%]
              md:w-[65%]

              lg:-right-[8%]
              lg:-top-[10%]
              lg:w-[48%]
            "
          >
            {/* ===============================================
                SERPENT / ONDULATION AUTOUR DU CERCLE
                =============================================== */}

            <svg
              aria-hidden="true"
              viewBox="0 0 400 400"
              className="
                pointer-events-none
                absolute
                -inset-[10%]
                z-[4]
                h-[120%]
                w-[120%]
                overflow-visible
              "
            >
              <defs>
                <filter
                  id="snakeGlow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur
                    stdDeviation="2.4"
                    result="blur"
                  />

                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <linearGradient
                  id="snakeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#af561e"
                    stopOpacity="0.12"
                  />

                  <stop
                    offset="45%"
                    stopColor="#af561e"
                    stopOpacity="0.95"
                  />

                  <stop
                    offset="100%"
                    stopColor="#f2d7b8"
                    stopOpacity="0.12"
                  />
                </linearGradient>
              </defs>

              {/* TRACE ONDULÉ */}

              <path
                d={wavyCirclePath}
                fill="none"
                stroke="rgba(72,36,18,0.07)"
                strokeWidth="1"
              />

              {/* HALO DISCRET */}

              <path
                d={wavyCirclePath}
                fill="none"
                stroke="rgba(175,86,30,0.08)"
                strokeWidth="6"
                opacity="0.35"
              />

              {/* SERPENT */}

              <path
                d={wavyCirclePath}
                fill="none"
                stroke="url(#snakeGradient)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeDasharray="95 1010"
                filter="url(#snakeGlow)"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-1105"
                  dur="8.5s"
                  repeatCount="indefinite"
                />
              </path>

              {/* TRAÎNÉE */}

              <path
                d={wavyCirclePath}
                fill="none"
                stroke="#af561e"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="180 925"
                opacity="0.18"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="-40"
                  to="-1145"
                  dur="8.5s"
                  repeatCount="indefinite"
                />
              </path>

              {/* PETITE TÊTE / SEGMENT */}

              <path
                d={wavyCirclePath}
                fill="none"
                stroke="#482412"
                strokeWidth="0.9"
                strokeLinecap="round"
                strokeDasharray="32 1073"
                opacity="0.35"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="25"
                  to="-1080"
                  dur="8.5s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>

            {/* ===============================================
                CERCLES FIXES
                =============================================== */}

            <div
              className="
                pointer-events-none
                absolute -inset-5

                rounded-full

                border
                border-timscare-brown/[0.045]

                sm:-inset-7

                lg:-inset-10
              "
            />

            <div
              className="
                pointer-events-none
                absolute -inset-10

                rounded-full

                border
                border-timscare-brown/[0.02]

                sm:-inset-14

                lg:-inset-20
              "
            />

            {/* ===============================================
                PHOTO
                =============================================== */}

            <div
              className="
                relative
                h-full
                w-full

                overflow-hidden

                rounded-full

                bg-timscare-beige

                shadow-[0_35px_100px_rgba(72,36,18,0.12)]
              "
            >
              {heroImage ? (
                <Image
                  src={heroImage}
                  alt="L'univers des soins Timscare"
                  fill
                  priority
                  sizes="
                    (max-width: 640px) 112vw,
                    (max-width: 1024px) 75vw,
                    48vw
                  "
                  className="object-cover"
                />
              ) : (
                <div
                  className="
                    absolute inset-0

                    bg-[radial-gradient(circle_at_62%_28%,#fffaf5_0%,#f2d7b8_29%,rgba(175,86,30,0.68)_67%,#482412_115%)]
                  "
                />
              )}

              {/* LUMIÈRE */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[8%]
                  top-[9%]

                  h-[38%]
                  w-[38%]

                  rounded-full

                  bg-white/25

                  blur-3xl
                "
              />

              {/* PROFONDEUR */}

              <div
                className="
                  pointer-events-none
                  absolute inset-0

                  bg-gradient-to-br

                  from-white/10
                  via-transparent
                  to-timscare-brown/15
                "
              />

              {/* CONTOUR INTÉRIEUR */}

              <div
                className="
                  pointer-events-none
                  absolute inset-3

                  rounded-full

                  border
                  border-white/20

                  sm:inset-4

                  lg:inset-5
                "
              />
            </div>

            {/* =================================================
                DÉCOUVRIR — DESKTOP
                ================================================= */}

            <a
              href="#univers"
              onClick={handleDiscover}
              aria-label="Découvrir les univers Timscare"
              className="
                group
                absolute
                z-30

                hidden

                items-center
                justify-center

                rounded-full

                lg:left-[47%]
                lg:top-[82%]

                lg:flex
                lg:h-[118px]
                lg:w-[118px]
              "
            >
              <DiscoverTarget />
            </a>
          </div>

          {/* ===================================================
              DÉCOUVRIR — MOBILE / TABLETTE
              =================================================== */}

          <a
            href="#univers"
            onClick={handleDiscover}
            aria-label="Découvrir les univers Timscare"
            className="
              group

              absolute

              bottom-[12%]
              right-[7%]

              z-30

              flex

              h-[86px]
              w-[86px]

              items-center
              justify-center

              rounded-full

              sm:bottom-[13%]
              sm:right-[9%]

              sm:h-[96px]
              sm:w-[96px]

              md:bottom-[14%]
              md:right-[10%]

              md:h-[106px]
              md:w-[106px]

              lg:hidden
            "
          >
            <DiscoverTarget />
          </a>

          {/* ===================================================
              DÉCOR
              =================================================== */}

          <div
            className="
              pointer-events-none
              absolute

              -bottom-[42%]
              -left-[40%]

              aspect-square
              w-[92%]

              rounded-full

              border
              border-timscare-brown/5

              sm:w-[65%]

              lg:w-[40%]
            "
          />

          {/* ===================================================
              TITRES
              =================================================== */}

          <div
            className="
              pointer-events-none

              absolute inset-0

              z-20

              mx-auto

              w-full
              max-w-7xl

              px-5

              sm:px-6

              md:px-8
            "
          >
            {/* =================================================
                H1
                ================================================= */}

            <div
              className="
                pointer-events-auto

                absolute

                left-5
                right-[10%]
                top-[15%]

                sm:left-6
                sm:right-[24%]
                sm:top-[15%]

                md:left-8
                md:right-[32%]
                md:top-[16%]

                lg:bottom-[10%]
                lg:left-8
                lg:right-auto
                lg:top-auto

                lg:w-[58%]
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex
                    h-9
                    w-9

                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-timscare-terracotta

                    text-timscare-cream
                  "
                >
                  <Sparkles
                    size={14}
                    strokeWidth={1.5}
                  />
                </span>

                <div>
                  <p
                    className="
                      text-[8px]

                      font-medium

                      uppercase

                      tracking-[0.28em]

                      text-timscare-terracotta

                      sm:text-[9px]

                      md:text-[10px]
                    "
                  >
                    L’expérience Timscare
                  </p>

                  <div
                    className="
                      mt-2
                      h-px
                      w-10
                      bg-timscare-terracotta/35

                      lg:hidden
                    "
                  />
                </div>
              </div>

              <h1
                className="
                  mt-5

                  max-w-[21rem]

                  text-[clamp(3rem,13vw,4rem)]

                  font-medium

                  leading-[0.88]

                  tracking-[-0.055em]

                  text-timscare-brown

                  sm:max-w-xl

                  sm:text-[clamp(3.5rem,11vw,5rem)]

                  md:text-[clamp(4rem,9vw,5.5rem)]

                  lg:mt-6

                  lg:max-w-4xl

                  lg:text-[clamp(5rem,7vw,7rem)]

                  lg:leading-[0.92]
                "
              >
                Choisissez
                <br />
                votre univers.
              </h1>
            </div>

            {/* =================================================
                DESCRIPTION
                ================================================= */}

            <div
              className="
                pointer-events-auto

                absolute

                left-5
                top-[48%]

                w-[72%]
                max-w-[320px]

                border-l
                border-timscare-terracotta/25

                pl-4

                sm:left-6
                sm:top-[47%]

                sm:w-[58%]
                sm:max-w-md

                md:left-8
                md:top-[47%]

                lg:left-[54%]
                lg:right-auto
                lg:top-[53%]

                lg:w-[34%]
                lg:max-w-none

                lg:border-l-0
                lg:pl-0
              "
            >
              <div
                className="
                  mb-3

                  flex
                  items-center
                  gap-2

                  lg:hidden
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5

                    rounded-full

                    bg-timscare-terracotta
                  "
                />

                <span
                  className="
                    text-[8px]

                    font-medium

                    uppercase

                    tracking-[0.26em]

                    text-timscare-brown/35
                  "
                >
                  {String(
                    categories.length,
                  ).padStart(2, "0")}{" "}
                  univers
                </span>
              </div>

              <p
                className="
                  text-[13px]

                  leading-[1.65]

                  text-timscare-brown/60

                  sm:text-base
                  sm:leading-7

                  lg:text-lg
                  lg:leading-8
                "
              >
                Visage, peelings, massages, corps ou
                rituels. Explorez chaque univers et
                découvrez les soins Timscare qui lui
                sont associés.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            CATÉGORIES
            ===================================================== */}

        <section
          id="univers"
          className="
            scroll-mt-0
            bg-[#fffaf5]
          "
        >
          <div
            className="
              mx-auto
              max-w-7xl

              px-5
              py-20

              sm:px-6

              md:px-8
              md:py-28
            "
          >
            {/* =================================================
                INTRO
                ================================================= */}

            <div
              className="
                mb-12

                grid
                gap-5

                lg:grid-cols-[1fr_.8fr]

                lg:items-end
              "
            >
              <div>
                <p
                  className="
                    text-[9px]

                    uppercase

                    tracking-[0.32em]

                    text-timscare-terracotta

                    sm:text-[10px]
                  "
                >
                  Nos univers
                </p>

                <h2
                  className="
                    mt-4

                    max-w-2xl

                    text-3xl

                    font-medium

                    leading-[1]

                    tracking-[-0.035em]

                    text-timscare-brown

                    sm:text-4xl

                    md:text-5xl
                  "
                >
                  Un soin commence par le bon univers.
                </h2>
              </div>

              <p
                className="
                  max-w-lg

                  text-sm

                  leading-7

                  text-timscare-brown/55

                  lg:ml-auto
                "
              >
                Entrez dans une catégorie pour découvrir
                uniquement les prestations qui correspondent
                à votre envie.
              </p>
            </div>

            {/* =================================================
                MOSAÏQUE
                ================================================= */}

            <div className="grid gap-3 lg:grid-cols-12 lg:gap-4">
              {categories.map(
                (category, index) => {
                  const firstImage =
                    category.services.find(
                      (service) =>
                        service.image,
                    )?.image;

                  const dark =
                    index === 0 ||
                    index === 3 ||
                    index === 4;

                  return (
                    <Link
                      key={category.id}
                      href={`/prestations/${category.id}`}
                      className={`
                        group
                        relative

                        min-h-[260px]

                        overflow-hidden

                        rounded-[2rem]

                        transition-transform
                        duration-500

                        hover:-translate-y-1

                        sm:min-h-[300px]

                        lg:min-h-[360px]

                        ${layouts[index]}

                        ${
                          dark
                            ? "bg-timscare-brown text-timscare-cream"
                            : "border border-timscare-brown/10 bg-timscare-beige text-timscare-brown"
                        }
                      `}
                    >
                      {/* PHOTO */}

                      {firstImage && (
                        <div className="absolute inset-0">
                          <Image
                            src={firstImage}
                            alt=""
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="
                              object-cover

                              transition-transform
                              duration-1000

                              group-hover:scale-[1.04]
                            "
                          />

                          <div
                            className={`
                              absolute inset-0

                              ${
                                dark
                                  ? "bg-timscare-brown/65"
                                  : "bg-timscare-beige/65"
                              }
                            `}
                          />
                        </div>
                      )}

                      {/* FORMES */}

                      <div
                        className="
                          pointer-events-none

                          absolute

                          -right-[18%]
                          -top-[35%]

                          aspect-square
                          w-[70%]

                          rounded-full

                          border
                          border-current

                          opacity-[0.07]

                          transition-transform
                          duration-1000

                          group-hover:scale-110
                        "
                      />

                      <div
                        className="
                          pointer-events-none

                          absolute

                          -bottom-[45%]
                          right-[10%]

                          aspect-square
                          w-[65%]

                          rounded-full

                          border
                          border-current

                          opacity-[0.06]
                        "
                      />

                      {/* NUMÉRO */}

                      <span
                        className="
                          pointer-events-none

                          absolute

                          right-5
                          top-2

                          text-[7rem]

                          font-medium

                          leading-none

                          tracking-[-0.08em]

                          opacity-[0.045]

                          sm:text-[9rem]
                        "
                      >
                        {category.number}
                      </span>

                      {/* CONTENU */}

                      <div
                        className="
                          relative
                          z-10

                          flex

                          h-full
                          min-h-[260px]

                          flex-col

                          justify-between

                          p-6

                          sm:min-h-[300px]
                          sm:p-8

                          lg:min-h-[360px]
                        "
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span
                              className={`
                                text-[9px]

                                uppercase

                                tracking-[0.3em]

                                ${
                                  dark
                                    ? "text-timscare-beige/50"
                                    : "text-timscare-terracotta"
                                }
                              `}
                            >
                              {category.number}
                            </span>

                            <p
                              className={`
                                mt-2

                                text-[10px]

                                uppercase

                                tracking-[0.22em]

                                ${
                                  dark
                                    ? "text-timscare-beige/35"
                                    : "text-timscare-brown/40"
                                }
                              `}
                            >
                              {
                                category.services
                                  .length
                              }{" "}
                              {category.services
                                .length > 1
                                ? "soins"
                                : "soin"}
                            </p>
                          </div>

                          <span
                            className={`
                              flex

                              h-11
                              w-11

                              items-center
                              justify-center

                              rounded-full

                              border

                              transition-all
                              duration-500

                              group-hover:rotate-45

                              ${
                                dark
                                  ? "border-timscare-cream/15 bg-timscare-cream/5"
                                  : "border-timscare-brown/10 bg-timscare-cream/30"
                              }
                            `}
                          >
                            <ArrowUpRight
                              size={17}
                              strokeWidth={1.5}
                            />
                          </span>
                        </div>

                        <div>
                          <h3
                            className="
                              text-[2rem]

                              font-medium

                              leading-[0.95]

                              tracking-[-0.045em]

                              sm:text-[2.7rem]
                            "
                          >
                            {category.shortTitle}
                          </h3>

                          <p
                            className={`
                              mt-4

                              max-w-md

                              text-sm

                              leading-6

                              ${
                                dark
                                  ? "text-timscare-beige/55"
                                  : "text-timscare-brown/55"
                              }
                            `}
                          >
                            {category.intro}
                          </p>

                          <div
                            className={`
                              mt-6

                              h-px
                              w-12

                              transition-all
                              duration-500

                              group-hover:w-24

                              ${
                                dark
                                  ? "bg-timscare-terracotta"
                                  : "bg-timscare-brown/30"
                              }
                            `}
                          />
                        </div>
                      </div>
                    </Link>
                  );
                },
              )}
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          RETOUR EN HAUT

          IMPORTANT :
          son apparition dépend UNIQUEMENT du scroll.
          ===================================================== */}

      <button
        type="button"
        onClick={handleBackToTop}
        aria-label="Revenir au début de la page"
        title="Revenir en haut"
        className={`
          fixed

          bottom-5
          right-4

          z-[70]

          flex
          h-12
          w-12

          items-center
          justify-center

          rounded-full

          border
          border-timscare-cream/20

          bg-timscare-brown

          text-timscare-cream

          shadow-[0_15px_40px_rgba(72,36,18,0.25)]

          backdrop-blur-md

          transition-all
          duration-500

          ease-[cubic-bezier(0.16,1,0.3,1)]

          hover:-translate-y-1
          hover:bg-timscare-terracotta

          active:scale-90

          sm:bottom-6
          sm:right-6
          sm:h-14
          sm:w-14

          lg:bottom-8
          lg:right-8

          ${
            showBackToTop
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-6 scale-75 opacity-0"
          }
        `}
      >
        {/* CERCLE INTÉRIEUR */}

        <span
          className="
            absolute inset-[5px]

            rounded-full

            border
            border-timscare-cream/10
          "
        />

        <ArrowUp
          size={18}
          strokeWidth={1.6}
          className="relative"
        />
      </button>
    </>
  );
}

/* =========================================================
   CIBLE DÉCOUVRIR
   ========================================================= */

function DiscoverTarget() {
  return (
    <>
      {/* ONDE 1 */}

      <span
        className="
          pointer-events-none

          absolute inset-0

          rounded-full

          border
          border-timscare-terracotta/50

          animate-ping

          motion-reduce:animate-none
        "
        style={{
          animationDuration: "2.2s",
        }}
      />

      {/* ONDE 2 */}

      <span
        className="
          pointer-events-none

          absolute -inset-3

          rounded-full

          border
          border-timscare-terracotta/20

          animate-ping

          motion-reduce:animate-none
        "
        style={{
          animationDuration: "2.8s",
          animationDelay: "0.55s",
        }}
      />

      {/* ANNEAU FIXE */}

      <span
        className="
          pointer-events-none

          absolute inset-[3px]

          rounded-full

          border
          border-timscare-brown/20
        "
      />

      {/* ANNEAU TOURNANT */}

      <span
        className="
          pointer-events-none

          absolute inset-[9px]

          rounded-full

          border
          border-dashed
          border-timscare-brown/40

          animate-spin

          motion-reduce:animate-none
        "
        style={{
          animationDuration: "10s",
        }}
      />

      {/* ANNEAU TERRACOTTA */}

      <span
        className="
          pointer-events-none

          absolute inset-[20px]

          rounded-full

          border
          border-timscare-terracotta/60

          transition-transform
          duration-500

          group-hover:scale-110

          sm:inset-[22px]

          lg:inset-[25px]
        "
      />

      {/* VISEUR HAUT */}

      <span
        className="
          pointer-events-none

          absolute

          left-1/2
          top-[-3px]

          h-[16px]
          w-px

          -translate-x-1/2

          bg-timscare-terracotta

          lg:h-[19px]
        "
      />

      {/* VISEUR BAS */}

      <span
        className="
          pointer-events-none

          absolute

          bottom-[-3px]
          left-1/2

          h-[16px]
          w-px

          -translate-x-1/2

          bg-timscare-terracotta

          lg:h-[19px]
        "
      />

      {/* VISEUR GAUCHE */}

      <span
        className="
          pointer-events-none

          absolute

          left-[-3px]
          top-1/2

          h-px
          w-[16px]

          -translate-y-1/2

          bg-timscare-terracotta

          lg:w-[19px]
        "
      />

      {/* VISEUR DROITE */}

      <span
        className="
          pointer-events-none

          absolute

          right-[-3px]
          top-1/2

          h-px
          w-[16px]

          -translate-y-1/2

          bg-timscare-terracotta

          lg:w-[19px]
        "
      />

      {/* CENTRE */}

      <span
        className="
          relative
          z-10

          flex

          h-11
          w-11

          items-center
          justify-center

          overflow-hidden

          rounded-full

          bg-timscare-brown

          text-timscare-cream

          shadow-[0_12px_35px_rgba(72,36,18,0.28)]

          transition-all
          duration-500

          group-hover:scale-110
          group-hover:bg-timscare-terracotta

          sm:h-12
          sm:w-12

          lg:h-14
          lg:w-14
        "
      >
        <ArrowDown
          size={18}
          strokeWidth={1.7}
          className="
            relative

            animate-bounce

            motion-reduce:animate-none
          "
          style={{
            animationDuration: "1.8s",
          }}
        />
      </span>

      {/* LABEL */}

      <span
        className="
          absolute

          left-1/2
          top-full

          mt-3

          -translate-x-1/2

          whitespace-nowrap

          text-[7px]

          font-medium

          uppercase

          tracking-[0.26em]

          text-timscare-brown/50

          transition-colors
          duration-300

          group-hover:text-timscare-terracotta

          sm:text-[8px]

          lg:mt-4
          lg:text-[9px]
        "
      >
        Découvrir
      </span>
    </>
  );
}