import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Heart,
  Sparkles,
  UserRound,
} from "lucide-react";

import { BackToTopButton } from "@/components/presentation/back-to-top-button";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Timscare",
  description:
    "Découvrez l’univers Timscare Institut, son approche du soin et sa vision du bien-être à Bagnolet.",
};

const values = [
  {
    number: "01",
    title: "Écoute",
    description:
      "Chaque peau est différente. Le soin commence par la compréhension de vos besoins et de vos attentes.",
    icon: UserRound,
  },
  {
    number: "02",
    title: "Douceur",
    description:
      "Timscare imagine chaque rendez-vous comme un moment pour ralentir, prendre soin de soi et se reconnecter.",
    icon: Heart,
  },
  {
    number: "03",
    title: "Éclat",
    description:
      "L’objectif est de révéler votre peau et de mettre en valeur sa beauté naturelle, sans la transformer.",
    icon: Sparkles,
  },
];

/* =========================================================
   PHOTO DU HERO

   Plus tard :

   public/timscare/hero-timscare.webp

   puis :

   const heroImage =
     "/timscare/hero-timscare.webp";
   ========================================================= */

const heroImage = "";

/* =========================================================
   CONTOUR ORGANIQUE
   ========================================================= */

function createWavyCirclePath() {
  const points = 260;

  const centerX = 200;
  const centerY = 200;
  const baseRadius = 169;

  let path = "";

  for (let index = 0; index <= points; index++) {
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

export default function TimscarePage() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-x-clip">
        {/* =====================================================
            HERO
            ===================================================== */}

        <section
          id="hero"
          className="
            relative
            h-[100dvh]
            overflow-hidden
            bg-timscare-cream
          "
        >
          {/* ===================================================
              GRAND CERCLE / PHOTO
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
                LIGNE ORGANIQUE / SERPENT
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
                  id="timscareSnakeGlow"
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
                  id="timscareSnakeGradient"
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

              {/* TRACE */}

              <path
                d={wavyCirclePath}
                fill="none"
                stroke="rgba(72,36,18,0.07)"
                strokeWidth="1"
              />

              {/* HALO */}

              <path
                d={wavyCirclePath}
                fill="none"
                stroke="rgba(175,86,30,0.08)"
                strokeWidth="6"
                opacity="0.35"
              />

              {/* SEGMENT PRINCIPAL */}

              <path
                d={wavyCirclePath}
                fill="none"
                stroke="url(#timscareSnakeGradient)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeDasharray="95 1010"
                filter="url(#timscareSnakeGlow)"
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

              {/* PETIT SEGMENT */}

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

            {/* CERCLES FIXES */}

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
                h-full w-full

                overflow-hidden
                rounded-full

                bg-timscare-beige

                shadow-[0_35px_100px_rgba(72,36,18,0.12)]
              "
            >
              {heroImage ? (
                <Image
                  src={heroImage}
                  alt="L'univers Timscare"
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

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[8%] top-[9%]

                  h-[38%] w-[38%]

                  rounded-full
                  bg-white/25
                  blur-3xl
                "
              />

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

            {/* ===============================================
                DÉCOUVRIR DESKTOP
                =============================================== */}

            <a
              href="#philosophie"
              aria-label="Découvrir l'univers Timscare"
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
              DÉCOUVRIR MOBILE
              =================================================== */}

          <a
            href="#philosophie"
            aria-label="Découvrir l'univers Timscare"
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
              DÉCOR BAS GAUCHE
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
              TEXTES
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
            {/* ===============================================
                TITRE
                =============================================== */}

            <div
              className="
                pointer-events-auto
                absolute

                left-5
                right-[9%]
                top-[14%]

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
                    flex h-9 w-9
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
                    L’univers Timscare
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

                  max-w-[22rem]

                  text-[clamp(2.8rem,12vw,3.8rem)]

                  font-medium

                  leading-[0.9]

                  tracking-[-0.055em]

                  text-timscare-brown

                  sm:max-w-xl
                  sm:text-[clamp(3.4rem,10vw,4.8rem)]

                  md:text-[clamp(4rem,8vw,5.3rem)]

                  lg:mt-6
                  lg:max-w-4xl
                  lg:text-[clamp(4.8rem,6.5vw,6.7rem)]
                  lg:leading-[0.92]
                "
              >
                Prendre soin
                <br />
                de votre peau,
                <br />
                autrement.
              </h1>
            </div>

            {/* ===============================================
                DESCRIPTION
                =============================================== */}

            <div
              className="
                pointer-events-auto
                absolute

                left-5
                top-[52%]

                w-[69%]
                max-w-[315px]

                border-l
                border-timscare-terracotta/25

                pl-4

                sm:left-6
                sm:top-[49%]
                sm:w-[58%]
                sm:max-w-md

                md:left-8
                md:top-[48%]

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
                  Peau · bien-être
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
                Timscare est un univers dédié au soin
                de la peau et au bien-être, pensé pour
                offrir à chacune et chacun un moment
                d’attention, de douceur et de
                reconnexion.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            PHILOSOPHIE
            ===================================================== */}

        <section
          id="philosophie"
          className="bg-[#fffaf5]"
        >
          <div
            className="
              mx-auto
              grid
              max-w-7xl
              gap-10

              px-5
              py-20

              sm:px-6

              md:px-8
              md:py-28

              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-20
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.32em]
                  text-timscare-terracotta

                  sm:text-xs
                "
              >
                La philosophie
              </p>

              <h2
                className="
                  mt-5
                  max-w-lg

                  text-4xl
                  font-medium
                  leading-[1.02]
                  tracking-tight
                  text-timscare-brown

                  sm:text-5xl

                  lg:text-6xl
                "
              >
                Votre peau n’est pas une tendance.
              </h2>
            </div>

            <div
              className="
                flex
                flex-col
                justify-center

                border-t
                border-timscare-brown/10

                pt-8

                lg:border-l
                lg:border-t-0
                lg:pl-14
                lg:pt-0
              "
            >
              <p
                className="
                  max-w-2xl

                  text-lg
                  leading-8
                  text-timscare-brown/75

                  md:text-xl
                  md:leading-9
                "
              >
                Chaque peau possède ses propres besoins,
                son histoire et son équilibre. L’approche
                Timscare privilégie des soins choisis selon
                vos attentes, dans un environnement
                chaleureux et apaisant.
              </p>

              <p
                className="
                  mt-6
                  max-w-2xl

                  text-sm
                  leading-7
                  text-timscare-brown/55

                  sm:text-base
                "
              >
                L’objectif est simple : prendre le temps de
                comprendre votre peau, proposer un moment
                adapté et vous permettre de repartir avec
                une sensation de bien-être et de confiance.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            VALEURS
            ===================================================== */}

        <section className="bg-timscare-beige">
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
            <div
              className="
                grid
                gap-7

                lg:grid-cols-[0.75fr_1.25fr]
                lg:items-end
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.32em]
                    text-timscare-terracotta

                    sm:text-xs
                  "
                >
                  Notre approche
                </p>

                <h2
                  className="
                    mt-5

                    text-4xl
                    font-medium
                    leading-[1.02]
                    tracking-tight
                    text-timscare-brown

                    sm:text-5xl
                  "
                >
                  Trois essentiels.
                </h2>
              </div>

              <p
                className="
                  max-w-xl

                  text-sm
                  leading-7
                  text-timscare-brown/60

                  sm:text-base

                  lg:ml-auto
                "
              >
                Une expérience pensée autour de la
                personne, de sa peau et du moment qu’elle
                vient s’accorder.
              </p>
            </div>

            <div
              className="
                mt-12

                grid
                gap-3

                sm:grid-cols-2

                lg:mt-16
                lg:grid-cols-3
                lg:gap-4
              "
            >
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.number}
                    className="
                      group
                      relative
                      overflow-hidden

                      rounded-[1.8rem]

                      border
                      border-timscare-brown/10

                      bg-timscare-cream

                      p-6

                      sm:p-7

                      lg:min-h-[320px]
                      lg:p-8
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="
                          text-[10px]
                          tracking-[0.3em]
                          text-timscare-terracotta
                        "
                      >
                        {value.number}
                      </span>

                      <div
                        className="
                          flex
                          h-11
                          w-11

                          items-center
                          justify-center

                          rounded-full

                          bg-timscare-beige/60

                          text-timscare-brown
                        "
                      >
                        <Icon
                          size={17}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <div className="mt-12 lg:mt-24">
                      <h3
                        className="
                          text-2xl
                          font-medium
                          tracking-tight
                          text-timscare-brown

                          sm:text-3xl
                        "
                      >
                        {value.title}
                      </h3>

                      <p
                        className="
                          mt-4

                          text-sm
                          leading-6
                          text-timscare-brown/60
                        "
                      >
                        {value.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            INCLUSIVITÉ
            ===================================================== */}

        <section
          className="
            relative
            overflow-hidden

            bg-timscare-brown

            text-timscare-cream
          "
        >
          <div
            className="
              pointer-events-none
              absolute

              -right-[35%]
              top-1/2

              aspect-square
              w-[95%]

              -translate-y-1/2

              rounded-full

              border
              border-timscare-beige/10

              sm:w-[65%]

              lg:-right-[15%]
              lg:w-[46%]
            "
          />

          <div
            className="
              relative

              mx-auto

              grid
              max-w-7xl
              gap-12

              px-5
              py-20

              sm:px-6

              md:px-8
              md:py-28

              lg:grid-cols-[1.15fr_.85fr]
              lg:items-center
              lg:gap-20
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.32em]
                  text-timscare-beige/65

                  sm:text-xs
                "
              >
                Pour toutes les peaux
              </p>

              <h2
                className="
                  mt-5
                  max-w-3xl

                  text-4xl
                  font-medium
                  leading-[1.02]
                  tracking-tight

                  sm:text-5xl

                  lg:text-6xl
                "
              >
                Une beauté plurielle,
                <br />
                un soin personnel.
              </h2>
            </div>

            <div>
              <p
                className="
                  text-base
                  leading-7
                  text-timscare-beige/75

                  lg:text-lg
                  lg:leading-8
                "
              >
                L’identité de Timscare s’inspire d’un
                univers chaleureux et pluriel. Les soins
                s’adressent à des peaux, des besoins et
                des profils différents.
              </p>

              <Link
                href="/prestations"
                className="
                  mt-8

                  inline-flex
                  min-h-13

                  items-center
                  justify-center
                  gap-3

                  rounded-full

                  bg-timscare-terracotta

                  px-6

                  text-sm
                  font-medium
                  text-timscare-cream

                  transition

                  hover:opacity-90
                "
              >
                Voir les prestations

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.6}
                />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA FINAL
            ===================================================== */}

        <section className="bg-timscare-cream">
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
            <div
              className="
                relative
                overflow-hidden

                rounded-[2rem]

                bg-timscare-terracotta

                p-7

                text-timscare-cream

                sm:p-9

                md:rounded-[2.5rem]
                md:p-12

                lg:grid
                lg:grid-cols-[1fr_auto]
                lg:items-end
                lg:gap-12
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute

                  -right-20
                  -top-24

                  h-72
                  w-72

                  rounded-full

                  border
                  border-timscare-cream/10
                "
              />

              <div className="relative">
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.32em]
                    text-timscare-cream/65
                  "
                >
                  Timscare Institut · Bagnolet
                </p>

                <h2
                  className="
                    mt-5
                    max-w-3xl

                    text-3xl
                    font-medium
                    leading-[1.03]
                    tracking-tight

                    sm:text-4xl

                    md:text-5xl
                  "
                >
                  Accordez-vous votre moment Timscare.
                </h2>

                <p
                  className="
                    mt-5
                    max-w-xl

                    text-sm
                    leading-6
                    text-timscare-cream/70

                    sm:text-base
                    sm:leading-7
                  "
                >
                  Retrouvez Timscare à Bagnolet et
                  découvrez le soin qui correspond à vos
                  besoins.
                </p>
              </div>

              <div
                className="
                  relative
                  mt-8

                  flex
                  flex-col
                  gap-2

                  sm:flex-row

                  lg:mt-0
                "
              >
                <Link
                  href="/prestations"
                  className="
                    inline-flex
                    min-h-14

                    items-center
                    justify-center

                    rounded-full

                    bg-timscare-cream

                    px-7

                    text-sm
                    font-medium
                    text-timscare-brown

                    transition

                    hover:opacity-90
                  "
                >
                  Choisir un soin
                </Link>

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    min-h-14

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-timscare-cream/25

                    px-7

                    text-sm
                    font-medium
                    text-timscare-cream

                    transition

                    hover:bg-timscare-cream/10
                  "
                >
                  Contacter Timscare
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BackToTopButton />
    </>
  );
}

/* =========================================================
   BOUTON DÉCOUVRIR
   ========================================================= */

function DiscoverTarget() {
  return (
    <>
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

      <span
        className="
          pointer-events-none
          absolute inset-[3px]

          rounded-full

          border
          border-timscare-brown/20
        "
      />

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

      <span
        className="
          relative z-10

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