import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Quote,
  Sparkles,
} from "lucide-react";

import { BackToTopButton } from "@/components/presentation/back-to-top-button";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Qui suis-je | Timscare",
  description:
    "Découvrez la personne derrière Timscare Institut, son parcours et sa vision du soin.",
};

export default function QuiSuisJePage() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-x-clip">
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
              DÉCOR
              =================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[38%]
              -top-[22%]

              aspect-square
              w-[110%]

              rounded-full

              border
              border-timscare-brown/[0.05]

              sm:w-[80%]

              lg:-right-[10%]
              lg:-top-[45%]
              lg:w-[55%]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-[23%]
              -top-[11%]

              aspect-square
              w-[85%]

              rounded-full

              bg-timscare-beige/45

              sm:w-[60%]

              lg:-right-[4%]
              lg:-top-[30%]
              lg:w-[40%]
            "
          />

          <div
            className="
              pointer-events-none
              absolute

              -bottom-[42%]
              -left-[38%]

              aspect-square
              w-[95%]

              rounded-full

              border
              border-timscare-terracotta/10

              sm:w-[70%]

              lg:-bottom-[70%]
              lg:-left-[15%]
              lg:w-[50%]
            "
          />

          <div
            className="
              pointer-events-none
              absolute

              right-[10%]
              top-[26%]

              h-48
              w-48

              rounded-full

              bg-timscare-terracotta/[0.07]

              blur-3xl

              lg:h-72
              lg:w-72
            "
          />

          {/* ===================================================
              CONTENU
              =================================================== */}

          <div
            className="
              relative
              z-10

              mx-auto

              flex
              h-full
              max-w-7xl

              flex-col
              justify-center

              px-5
              pb-20
              pt-24

              sm:px-6
              sm:pt-28

              md:px-8

              lg:pb-16
              lg:pt-28
            "
          >
            {/* MICRO LABEL */}

            <div
              className="
                flex
                items-center
                gap-3
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
                    text-[9px]
                    font-medium

                    uppercase

                    tracking-[0.32em]

                    text-timscare-terracotta
                  "
                >
                  Qui suis-je
                </p>

                <span
                  className="
                    mt-2
                    block

                    h-px
                    w-9

                    bg-timscare-terracotta/50
                  "
                />
              </div>
            </div>

            {/* TITRE */}

            <h1
              className="
                mt-7

                max-w-[22rem]

                text-[clamp(3.4rem,15vw,5rem)]

                font-medium

                leading-[0.88]

                tracking-[-0.06em]

                text-timscare-brown

                sm:max-w-2xl
                sm:text-[clamp(4.5rem,11vw,6.5rem)]

                lg:max-w-5xl
                lg:text-[clamp(5.5rem,7vw,8rem)]
              "
            >
              Derrière
              <br />
              Timscare,

              <span
                className="
                  block

                  text-timscare-terracotta
                "
              >
                une histoire.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <div
              className="
                mt-7

                flex
                max-w-xl

                items-start
                gap-4

                sm:mt-8
              "
            >
              <span
                className="
                  mt-2

                  h-px
                  w-10

                  shrink-0

                  bg-timscare-brown/20
                "
              />

              <p
                className="
                  text-sm
                  leading-7

                  text-timscare-brown/55

                  sm:text-base
                  sm:leading-8
                "
              >
                Découvrez la personne derrière Timscare,
                son parcours, sa vision du soin et ce qui
                l&apos;anime au quotidien.
              </p>
            </div>

            {/* SIGNATURE DÉCORATIVE */}

            <div
              className="
                absolute

                bottom-10
                left-5

                hidden

                items-center
                gap-4

                sm:flex
                sm:left-6

                md:left-8
              "
            >
              <span
                className="
                  text-[8px]

                  uppercase

                  tracking-[0.35em]

                  text-timscare-brown/35
                "
              >
                Timscare · Institut
              </span>

              <span
                className="
                  h-px
                  w-16

                  bg-timscare-brown/10
                "
              />

              <span
                className="
                  h-1.5
                  w-1.5

                  rounded-full

                  bg-timscare-terracotta
                "
              />
            </div>
          </div>

          {/* ===================================================
              BOUTON DÉCOUVRIR
              =================================================== */}

          <a
            href="#portrait"
            aria-label="Découvrir la fondatrice de Timscare"
            className="
              group

              absolute

              bottom-6
              right-5

              z-30

              flex
              h-[68px]
              w-[68px]

              items-center
              justify-center

              rounded-full

              sm:right-6

              md:right-8

              lg:h-[78px]
              lg:w-[78px]
            "
          >
            <span
              className="
                pointer-events-none
                absolute
                inset-0

                rounded-full

                border
                border-timscare-terracotta/35
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                inset-[7px]

                rounded-full

                border
                border-dashed
                border-timscare-brown/25

                animate-[spin_12s_linear_infinite]

                motion-reduce:animate-none
              "
            />

            <span
              className="
                flex
                h-10
                w-10

                items-center
                justify-center

                rounded-full

                bg-timscare-brown

                text-timscare-cream

                shadow-[0_10px_30px_rgba(72,36,18,0.22)]

                transition-all
                duration-300

                group-hover:scale-110
                group-hover:bg-timscare-terracotta
              "
            >
              <ArrowDown
                size={15}
                strokeWidth={1.6}
                className="
                  animate-bounce
                  motion-reduce:animate-none
                "
              />
            </span>
          </a>
        </section>

        {/* =====================================================
            PORTRAIT + HISTOIRE
            ===================================================== */}

        <section
          id="portrait"
          className="
            relative
            overflow-hidden

            bg-[#fffaf5]
          "
        >
          {/* DÉCOR */}

          <div
            className="
              pointer-events-none
              absolute

              -left-32
              top-[15%]

              h-80
              w-80

              rounded-full

              bg-timscare-beige/35

              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute

              -right-40
              bottom-[5%]

              h-96
              w-96

              rounded-full

              bg-timscare-terracotta/[0.06]

              blur-3xl
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
              py-16

              sm:px-6
              sm:py-20

              md:px-8
              md:py-24

              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-center
              lg:gap-20
              lg:py-28
            "
          >
            {/* =================================================
                PHOTO

                MOBILE :
                photo énorme, presque toute la largeur.

                DESKTOP :
                vraie photo A4 verticale à droite.
                ================================================= */}

            <div
              className="
                relative

                mx-auto

                w-full
                max-w-[430px]

                lg:order-2
                lg:max-w-[510px]
              "
            >
              {/* LIGNE DÉCORATIVE */}

              <div
                className="
                  pointer-events-none
                  absolute

                  -left-3
                  top-[14%]

                  z-20

                  h-[30%]
                  w-px

                  bg-timscare-terracotta/70

                  sm:-left-5
                "
              />

              <span
                className="
                  pointer-events-none
                  absolute

                  -left-[5px]
                  top-[14%]

                  z-20

                  h-2
                  w-2

                  rounded-full

                  bg-timscare-terracotta

                  sm:-left-[23px]
                "
              />

              {/* PHOTO A4 */}

              <div
                className="
                  group
                  relative

                  aspect-[210/297]

                  w-full

                  overflow-hidden

                  rounded-[2rem_2rem_6rem_2rem]

                  bg-timscare-beige

                  shadow-[0_35px_100px_rgba(72,36,18,0.14)]

                  sm:rounded-[2.7rem_2.7rem_7rem_2.7rem]

                  lg:rounded-[3rem_3rem_8rem_3rem]
                "
              >
                {/* =============================================
                    VRAIE PHOTO À METTRE ICI

                    Quand tu me donneras la photo :

                    <Image
                      src="/images/fondatrice-timscare.jpg"
                      alt="Fondatrice de Timscare Institut"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="
                        object-cover
                        object-center
                      "
                    />

                    ============================================= */}

                {/* PLACEHOLDER TEMPORAIRE */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_65%_22%,#fffaf5_0%,#f2d7b8_35%,rgba(175,86,30,0.48)_72%,#482412_120%)]
                  "
                />

                {/* LUMIÈRE */}

                <div
                  className="
                    pointer-events-none
                    absolute

                    right-[8%]
                    top-[8%]

                    h-[38%]
                    w-[38%]

                    rounded-full

                    bg-white/25

                    blur-3xl
                  "
                />

                {/* FONDU */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-gradient-to-t

                    from-timscare-brown/28
                    via-transparent
                    to-white/5
                  "
                />

                {/* CADRE INTÉRIEUR */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-4

                    rounded-[1.6rem_1.6rem_5.1rem_1.6rem]

                    border
                    border-white/30

                    sm:inset-5
                    sm:rounded-[2.2rem_2.2rem_6rem_2.2rem]
                  "
                />

                {/* LABEL */}

                <div
                  className="
                    absolute

                    bottom-5
                    left-5

                    rounded-[1.15rem]

                    border
                    border-white/25

                    bg-timscare-brown/32

                    px-5
                    py-4

                    backdrop-blur-md

                    sm:bottom-7
                    sm:left-7
                  "
                >
                  <p
                    className="
                      text-[8px]

                      uppercase

                      tracking-[0.3em]

                      text-timscare-beige/65
                    "
                  >
                    Fondatrice
                  </p>

                  <p
                    className="
                      mt-1

                      text-lg
                      font-medium

                      text-timscare-cream

                      sm:text-xl
                    "
                  >
                    Timscare
                  </p>
                </div>
              </div>

              {/* CERCLE MOBILE */}

              <div
                className="
                  pointer-events-none

                  absolute

                  -bottom-8
                  -right-8

                  z-20

                  h-24
                  w-24

                  rounded-full

                  border
                  border-dashed
                  border-timscare-terracotta/25

                  animate-[spin_22s_linear_infinite]

                  motion-reduce:animate-none

                  sm:h-32
                  sm:w-32
                "
              />
            </div>

            {/* =================================================
                TEXTE HISTOIRE
                ================================================= */}

            <div
              className="
                lg:order-1
              "
            >
              <p
                className="
                  text-[9px]

                  font-medium

                  uppercase

                  tracking-[0.34em]

                  text-timscare-terracotta
                "
              >
                Mon histoire
              </p>

              <h2
                className="
                  mt-5

                  max-w-xl

                  text-4xl
                  font-medium

                  leading-[0.98]

                  tracking-[-0.05em]

                  text-timscare-brown

                  sm:text-5xl

                  lg:text-6xl
                "
              >
                Le parcours
                <br />
                derrière
                <br />

                <span
                  className="
                    text-timscare-terracotta
                  "
                >
                  Timscare.
                </span>
              </h2>

              <div
                className="
                  mt-8

                  max-w-xl

                  border-l
                  border-timscare-terracotta/30

                  pl-5

                  sm:pl-7
                "
              >
                <p
                  className="
                    text-lg
                    leading-8

                    text-timscare-brown/70

                    sm:text-xl
                    sm:leading-9
                  "
                >
                  Ici, elle pourra raconter son histoire avec
                  ses propres mots : son parcours, ce qui l&apos;a
                  amenée vers l&apos;esthétique et la naissance
                  de Timscare.
                </p>

                <p
                  className="
                    mt-6

                    text-sm
                    leading-7

                    text-timscare-brown/50

                    sm:text-base
                  "
                >
                  Nous remplacerons ce texte par son véritable
                  récit lorsque nous aurons les informations
                  exactes sur son parcours.
                </p>
              </div>

              {/* PETITE SIGNATURE */}

              <div
                className="
                  mt-9

                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  className="
                    h-px
                    w-12

                    bg-timscare-brown/15
                  "
                />

                <span
                  className="
                    text-[8px]

                    uppercase

                    tracking-[0.3em]

                    text-timscare-brown/35
                  "
                >
                  La personne derrière la marque
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PARCOURS
            ===================================================== */}

        <section
          className="
            bg-timscare-beige
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
            <div
              className="
                grid
                gap-8

                lg:grid-cols-[0.75fr_1.25fr]
                lg:items-end
              "
            >
              <div>
                <p
                  className="
                    text-[9px]

                    uppercase

                    tracking-[0.34em]

                    text-timscare-terracotta
                  "
                >
                  Mon parcours
                </p>

                <h2
                  className="
                    mt-5

                    text-4xl
                    font-medium

                    leading-[1]

                    tracking-[-0.045em]

                    text-timscare-brown

                    sm:text-5xl
                  "
                >
                  Ce qui m&apos;a
                  <br />
                  menée jusqu&apos;ici.
                </h2>
              </div>

              <p
                className="
                  max-w-xl

                  text-sm
                  leading-7

                  text-timscare-brown/55

                  sm:text-base

                  lg:ml-auto
                "
              >
                Cette partie accueillera les grandes étapes de
                son parcours une fois que nous disposerons de
                son histoire complète.
              </p>
            </div>

            {/* ÉTAPES */}

            <div
              className="
                mt-12

                grid
                gap-3

                md:grid-cols-3

                lg:mt-16
              "
            >
              <article
                className="
                  rounded-[2rem]

                  bg-timscare-cream

                  p-7

                  md:min-h-[280px]
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-full

                    bg-timscare-terracotta

                    text-timscare-cream
                  "
                >
                  <Sparkles
                    size={15}
                    strokeWidth={1.5}
                  />
                </span>

                <h3
                  className="
                    mt-16

                    text-2xl
                    font-medium

                    tracking-[-0.03em]

                    text-timscare-brown
                  "
                >
                  Le déclic
                </h3>

                <p
                  className="
                    mt-3

                    text-sm
                    leading-6

                    text-timscare-brown/50
                  "
                >
                  Ce qui lui a donné envie de se tourner vers
                  l&apos;univers de l&apos;esthétique et du soin.
                </p>
              </article>

              <article
                className="
                  rounded-[2rem]

                  bg-timscare-brown

                  p-7

                  text-timscare-cream

                  md:min-h-[280px]
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-full

                    bg-timscare-beige

                    text-timscare-brown
                  "
                >
                  <ArrowRight
                    size={15}
                    strokeWidth={1.5}
                  />
                </span>

                <h3
                  className="
                    mt-16

                    text-2xl
                    font-medium

                    tracking-[-0.03em]
                  "
                >
                  Le chemin
                </h3>

                <p
                  className="
                    mt-3

                    text-sm
                    leading-6

                    text-timscare-beige/60
                  "
                >
                  Les différentes étapes qui ont construit
                  son expérience et son approche.
                </p>
              </article>

              <article
                className="
                  rounded-[2rem]

                  bg-timscare-terracotta

                  p-7

                  text-timscare-cream

                  md:min-h-[280px]
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-full

                    bg-timscare-brown/20

                    text-timscare-beige
                  "
                >
                  <Sparkles
                    size={15}
                    strokeWidth={1.5}
                  />
                </span>

                <h3
                  className="
                    mt-16

                    text-2xl
                    font-medium

                    tracking-[-0.03em]
                  "
                >
                  Timscare
                </h3>

                <p
                  className="
                    mt-3

                    text-sm
                    leading-6

                    text-timscare-cream/65
                  "
                >
                  La naissance de son propre univers et la
                  vision qu&apos;elle souhaite aujourd&apos;hui partager.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            CITATION
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

              -right-[25%]
              -top-[65%]

              aspect-square
              w-[85%]

              rounded-full

              border
              border-timscare-beige/[0.08]

              sm:w-[60%]

              lg:w-[38%]
            "
          />

          <div
            className="
              pointer-events-none
              absolute

              -bottom-32
              -left-32

              h-80
              w-80

              rounded-full

              bg-timscare-terracotta/[0.08]

              blur-3xl
            "
          />

          <div
            className="
              relative

              mx-auto
              max-w-5xl

              px-5
              py-24

              text-center

              sm:px-6

              md:px-8
              md:py-32
            "
          >
            <Quote
              size={30}
              strokeWidth={1.2}
              className="
                mx-auto
                text-timscare-terracotta
              "
            />

            <p
              className="
                mt-8

                text-[clamp(2.3rem,8vw,4.8rem)]

                font-medium

                leading-[1]

                tracking-[-0.05em]
              "
            >
              Ici viendra une phrase qui lui ressemble vraiment.
            </p>

            <p
              className="
                mt-8

                text-[8px]

                uppercase

                tracking-[0.32em]

                text-timscare-beige/45
              "
            >
              La fondatrice · Timscare
            </p>
          </div>
        </section>

        {/* =====================================================
            VISION
            ===================================================== */}

        <section
          className="
            bg-[#fffaf5]
          "
        >
          <div
            className="
              mx-auto

              grid
              max-w-7xl

              gap-12

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
                  text-[9px]

                  uppercase

                  tracking-[0.34em]

                  text-timscare-terracotta
                "
              >
                Ma vision
              </p>

              <h2
                className="
                  mt-5

                  max-w-lg

                  text-4xl
                  font-medium

                  leading-[1]

                  tracking-[-0.045em]

                  text-timscare-brown

                  sm:text-5xl
                "
              >
                Une autre façon
                <br />
                de prendre soin.
              </h2>
            </div>

            <div
              className="
                grid
                gap-4

                sm:grid-cols-2
              "
            >
              <article
                className="
                  rounded-[2rem]

                  bg-timscare-beige

                  p-7
                "
              >
                <Sparkles
                  size={20}
                  strokeWidth={1.4}
                  className="
                    text-timscare-terracotta
                  "
                />

                <h3
                  className="
                    mt-12

                    text-2xl
                    font-medium

                    tracking-[-0.03em]

                    text-timscare-brown
                  "
                >
                  Prendre le temps
                </h3>

                <p
                  className="
                    mt-4

                    text-sm
                    leading-6

                    text-timscare-brown/55
                  "
                >
                  Comprendre la personne et ses besoins avant
                  de penser au soin lui-même.
                </p>
              </article>

              <article
                className="
                  rounded-[2rem]

                  bg-timscare-terracotta

                  p-7

                  text-timscare-cream
                "
              >
                <Quote
                  size={20}
                  strokeWidth={1.4}
                  className="
                    text-timscare-beige
                  "
                />

                <h3
                  className="
                    mt-12

                    text-2xl
                    font-medium

                    tracking-[-0.03em]
                  "
                >
                  Créer un moment
                </h3>

                <p
                  className="
                    mt-4

                    text-sm
                    leading-6

                    text-timscare-cream/65
                  "
                >
                  Faire du rendez-vous une parenthèse dédiée
                  à soi, à sa peau et à son bien-être.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA FINAL
            ===================================================== */}

        <section
          className="
            bg-timscare-cream
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
            <div
              className="
                relative
                overflow-hidden

                rounded-[2rem]

                bg-timscare-terracotta

                p-7

                text-timscare-cream

                sm:p-10

                lg:flex
                lg:items-end
                lg:justify-between
                lg:gap-12
                lg:p-12
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
                  border-white/10
                "
              />

              <div className="relative">
                <p
                  className="
                    text-[9px]

                    uppercase

                    tracking-[0.32em]

                    text-timscare-cream/60
                  "
                >
                  Timscare Institut
                </p>

                <h2
                  className="
                    mt-5

                    max-w-2xl

                    text-3xl
                    font-medium

                    leading-[1]

                    tracking-[-0.04em]

                    sm:text-4xl

                    md:text-5xl
                  "
                >
                  Au plaisir de prendre soin de vous.
                </h2>
              </div>

              <Link
                href="/prestations"
                className="
                  group
                  relative

                  mt-8

                  inline-flex
                  min-h-14
                  w-full

                  items-center
                  justify-center
                  gap-3

                  rounded-full

                  bg-timscare-cream

                  px-7

                  text-sm
                  font-medium

                  text-timscare-brown

                  transition-all
                  duration-300

                  hover:-translate-y-0.5

                  sm:w-auto

                  lg:mt-0
                "
              >
                Découvrir les soins

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.6}
                  className="
                    transition-transform
                    duration-300

                    group-hover:rotate-45
                  "
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <BackToTopButton />
    </>
  );
}