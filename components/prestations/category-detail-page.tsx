import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Grid2X2,
  Sparkles,
} from "lucide-react";
import { notFound } from "next/navigation";

import { BackToTopButton } from "@/components/presentation/back-to-top-button";
import { SiteHeader } from "@/components/site-header";
import {
  categories,
  type Service,
} from "@/data/services";

/* =========================================================
   CONTOUR ORGANIQUE DU GRAND CERCLE
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

/* =========================================================
   CARTE D'UN SOIN
   ========================================================= */

function TreatmentCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const curvedMask =
    "radial-gradient(ellipse 96% 98% at 108% 50%, black 0%, black 48%, rgba(0,0,0,0.96) 60%, rgba(0,0,0,0.72) 72%, rgba(0,0,0,0.36) 84%, transparent 100%)";

  return (
    <Link
      href={`/prestations/${service.slug}`}
      className="
        group
        relative
        block

        overflow-hidden

        rounded-[1.8rem]

        border
        border-timscare-brown/10

        bg-[#fffaf5]
      "
    >
      <article
        className="
          relative isolate

          min-h-[190px]

          overflow-hidden

          sm:min-h-[220px]

          lg:min-h-[245px]
        "
      >
        {/* NUMÉRO */}

        <span
          className="
            pointer-events-none

            absolute
            left-5
            top-5

            z-10

            text-[9px]

            tracking-[0.3em]

            text-timscare-terracotta

            sm:left-7
            sm:top-7
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* IMAGE */}

        <div
          className="
            pointer-events-none

            absolute

            -right-[8%]
            top-1/2

            h-[170%]
            w-[48%]

            -translate-y-1/2

            sm:w-[44%]

            md:-right-[6%]
            md:w-[40%]
          "
          style={{
            WebkitMaskImage: curvedMask,
            maskImage: curvedMask,
          }}
        >
          {service.image ? (
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(max-width: 768px) 48vw, 40vw"
              className="
                object-cover

                transition-transform
                duration-1000

                group-hover:scale-[1.05]
              "
            />
          ) : (
            <div
              className="
                absolute inset-0

                bg-[radial-gradient(circle_at_72%_35%,#fffaf5_0%,#f2d7b8_28%,rgba(175,86,30,.72)_62%,rgba(72,36,18,.38)_100%)]
              "
            />
          )}
        </div>

        {/* HALO */}

        <div
          className="
            pointer-events-none

            absolute

            right-[21%]
            top-1/2

            h-[130%]
            w-[24%]

            -translate-y-1/2

            rounded-full

            bg-timscare-beige/30

            blur-3xl
          "
        />

        {/* CONTENU */}

        <div
          className="
            relative z-10

            flex

            min-h-[190px]

            w-[74%]

            flex-col
            justify-end

            px-5
            pb-5
            pt-14

            sm:min-h-[220px]
            sm:w-[70%]
            sm:px-7
            sm:pb-7

            lg:min-h-[245px]
            lg:w-[68%]
            lg:px-8
            lg:pb-8
          "
        >
          <h3
            className="
              max-w-lg

              text-xl
              font-medium

              leading-[1.02]

              tracking-[-0.035em]

              text-timscare-brown

              sm:text-2xl

              md:text-3xl
            "
          >
            {service.name}
          </h3>

          <p
            className="
              mt-3
              max-w-lg

              text-[12px]
              leading-5

              text-timscare-brown/55

              sm:text-sm
              sm:leading-6
            "
          >
            {service.description}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <span
              className="
                rounded-full

                bg-timscare-brown

                px-4
                py-2

                text-[11px]
                font-medium

                text-timscare-cream
              "
            >
              {service.price}
            </span>

            <span
              className="
                inline-flex
                items-center
                gap-1.5

                text-[10px]
                font-medium

                text-timscare-terracotta
              "
            >
              Découvrir

              <ArrowUpRight
                size={12}
                strokeWidth={1.5}
              />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

/* =========================================================
   PAGE CATÉGORIE
   ========================================================= */

export function CategoryDetailPage({
  categoryId,
}: {
  categoryId: string;
}) {
  const categoryIndex = categories.findIndex(
    (category) =>
      category.id === categoryId,
  );

  if (categoryIndex === -1) {
    notFound();
  }

  const category =
    categories[categoryIndex];

  const previous =
    categories[
      (categoryIndex -
        1 +
        categories.length) %
        categories.length
    ];

  const next =
    categories[
      (categoryIndex + 1) %
        categories.length
    ];

  /*
    On utilise automatiquement la première
    photo disponible dans la catégorie pour
    le grand cercle du Hero.

    Plus tard, si chaque catégorie possède
    sa propre photo Hero, on pourra ajouter
    directement une propriété heroImage.
  */

  const heroImage =
    category.services.find(
      (service) => service.image,
    )?.image;

  return (
    <>
      <SiteHeader />

      <main className="overflow-x-clip bg-timscare-cream">
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
              RETOUR CATÉGORIES
              =================================================== */}

          <Link
            href="/prestations"
            className="
              absolute

              left-5
              top-24

              z-40

              inline-flex

              items-center
              gap-2

              text-[9px]
              font-medium

              uppercase

              tracking-[0.18em]

              text-timscare-brown/45

              transition-colors

              hover:text-timscare-terracotta

              sm:left-6

              md:left-8
              md:top-28

              lg:top-28
            "
          >
            <ArrowLeft
              size={13}
              strokeWidth={1.5}
            />

            Toutes les catégories
          </Link>

          {/* ===================================================
              GRAND CERCLE
              =================================================== */}

          <div
            className="
              absolute

              -right-[48%]
              top-[9%]

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
                ANIMATION ORGANIQUE
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
                  id={`categorySnakeGlow-${category.id}`}
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
                  id={`categorySnakeGradient-${category.id}`}
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

              {/* SERPENT PRINCIPAL */}

              <path
                d={wavyCirclePath}
                fill="none"
                stroke={`url(#categorySnakeGradient-${category.id})`}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeDasharray="95 1010"
                filter={`url(#categorySnakeGlow-${category.id})`}
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
                IMAGE
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
                  alt={category.title}
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
                DÉCOUVRIR DESKTOP
                ================================================= */}

            <a
              href="#soins"
              aria-label={`Découvrir les soins ${category.title}`}
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
              DÉCOUVRIR MOBILE / TABLETTE
              =================================================== */}

          <a
            href="#soins"
            aria-label={`Découvrir les soins ${category.title}`}
            className="
              group

              absolute

              bottom-[11%]
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
              GRAND NUMÉRO DÉCORATIF
              =================================================== */}

          <span
            className="
              pointer-events-none

              absolute

              -left-[6%]
              bottom-[2%]

              text-[9rem]

              font-medium

              leading-none

              tracking-[-0.1em]

              text-timscare-brown/[0.025]

              sm:text-[13rem]

              lg:left-auto
              lg:right-[3%]
              lg:top-[20%]
              lg:bottom-auto
              lg:text-[24rem]
            "
          >
            {category.number}
          </span>

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
                right-[8%]

                top-[19%]

                sm:left-6
                sm:right-[24%]
                sm:top-[18%]

                md:left-8
                md:right-[32%]
                md:top-[18%]

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
                    Univers {category.number}
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

                  text-[clamp(2.8rem,12vw,4rem)]

                  font-medium

                  leading-[0.9]

                  tracking-[-0.055em]

                  text-timscare-brown

                  sm:max-w-xl
                  sm:text-[clamp(3.4rem,10vw,5rem)]

                  md:text-[clamp(4rem,8vw,5.5rem)]

                  lg:mt-6
                  lg:max-w-4xl
                  lg:text-[clamp(5rem,7vw,7rem)]
                  lg:leading-[0.92]
                "
              >
                {category.title}
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
                top-[48%]

                w-[68%]
                max-w-[315px]

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
              {/* NOMBRE DE SOINS MOBILE */}

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
                    category.services.length,
                  ).padStart(2, "0")}{" "}
                  {category.services.length > 1
                    ? "soins"
                    : "soin"}
                </span>
              </div>

              {/* NOMBRE DE SOINS DESKTOP */}

              <div
                className="
                  mb-4

                  hidden

                  items-center
                  gap-2

                  lg:flex
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
                    text-[9px]

                    font-medium

                    uppercase

                    tracking-[0.25em]

                    text-timscare-brown/40
                  "
                >
                  {category.services.length}{" "}
                  {category.services.length > 1
                    ? "prestations"
                    : "prestation"}
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
                {category.intro}
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            SOINS
            ===================================================== */}

        <section
          id="soins"
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
              py-16

              sm:px-6

              md:px-8
              md:py-24
            "
          >
            <div
              className="
                mb-10

                flex
                items-end
                justify-between
                gap-5

                md:mb-14
              "
            >
              <div>
                <p
                  className="
                    text-[9px]

                    uppercase

                    tracking-[0.3em]

                    text-timscare-terracotta
                  "
                >
                  Les soins
                </p>

                <h2
                  className="
                    mt-3

                    text-3xl

                    font-medium

                    tracking-[-0.04em]

                    text-timscare-brown

                    sm:text-4xl
                  "
                >
                  À vous de choisir.
                </h2>
              </div>

              <span
                className="
                  hidden

                  h-12
                  w-12

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-timscare-brown/10

                  text-timscare-brown/40

                  sm:flex
                "
              >
                <Grid2X2
                  size={17}
                  strokeWidth={1.4}
                />
              </span>
            </div>

            <div className="grid gap-3 sm:gap-4">
              {category.services.map(
                (service, index) => (
                  <TreatmentCard
                    key={service.slug}
                    service={service}
                    index={index}
                  />
                ),
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            NAVIGATION ENTRE CATÉGORIES
            ===================================================== */}

        <section className="bg-timscare-beige">
          <div
            className="
              mx-auto
              max-w-7xl

              px-5
              py-16

              sm:px-6

              md:px-8
              md:py-20
            "
          >
            <div className="text-center">
              <Link
                href="/prestations"
                className="
                  inline-flex

                  items-center
                  gap-2

                  text-[10px]

                  font-medium

                  uppercase

                  tracking-[0.22em]

                  text-timscare-brown/50

                  transition-colors

                  hover:text-timscare-terracotta
                "
              >
                <Grid2X2
                  size={13}
                  strokeWidth={1.4}
                />

                Toutes les catégories
              </Link>
            </div>

            <div
              className="
                mt-8

                grid
                grid-cols-2
                gap-2

                sm:gap-4
              "
            >
              {/* PRÉCÉDENT */}

              <Link
                href={`/prestations/${previous.id}`}
                className="
                  group

                  flex

                  min-h-[140px]

                  flex-col
                  justify-between

                  rounded-[1.75rem]

                  bg-timscare-cream

                  p-5

                  transition-transform
                  duration-500

                  hover:-translate-y-1

                  sm:min-h-[170px]
                  sm:p-6
                "
              >
                <span
                  className="
                    flex

                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-timscare-brown/10

                    transition-transform

                    group-hover:-translate-x-1
                  "
                >
                  <ArrowLeft
                    size={14}
                    strokeWidth={1.5}
                  />
                </span>

                <div>
                  <p
                    className="
                      text-[8px]

                      uppercase

                      tracking-[0.25em]

                      text-timscare-brown/35
                    "
                  >
                    Précédent
                  </p>

                  <p
                    className="
                      mt-2

                      text-lg

                      font-medium

                      leading-none

                      tracking-[-0.035em]

                      text-timscare-brown

                      sm:text-2xl
                    "
                  >
                    {previous.shortTitle}
                  </p>
                </div>
              </Link>

              {/* SUIVANT */}

              <Link
                href={`/prestations/${next.id}`}
                className="
                  group

                  flex

                  min-h-[140px]

                  flex-col
                  items-end
                  justify-between

                  rounded-[1.75rem]

                  bg-timscare-brown

                  p-5

                  text-right
                  text-timscare-cream

                  transition-transform
                  duration-500

                  hover:-translate-y-1

                  sm:min-h-[170px]
                  sm:p-6
                "
              >
                <span
                  className="
                    flex

                    h-9
                    w-9

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-timscare-cream/15

                    transition-transform

                    group-hover:translate-x-1
                  "
                >
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                  />
                </span>

                <div>
                  <p
                    className="
                      text-[8px]

                      uppercase

                      tracking-[0.25em]

                      text-timscare-beige/40
                    "
                  >
                    Suivant
                  </p>

                  <p
                    className="
                      mt-2

                      text-lg

                      font-medium

                      leading-none

                      tracking-[-0.035em]

                      sm:text-2xl
                    "
                  >
                    {next.shortTitle}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <BackToTopButton />
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

      {/* ANNEAU CENTRAL */}

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