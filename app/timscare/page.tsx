import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Heart,
  Sparkles,
  UserRound,
} from "lucide-react";

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

export default function TimscarePage() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-x-clip">
        {/* =====================================================
            HERO
            Toujours contenu dans l'écran au chargement
            ===================================================== */}

        <section
          className="
            relative h-[100dvh]
            overflow-hidden
            bg-timscare-cream
            pt-20

            md:pt-24
          "
        >
          {/* FORMES DE FOND */}
          <div
            className="
              pointer-events-none absolute
              -right-[42%] -top-[8%]
              aspect-square w-[95%]
              rounded-full
              bg-timscare-beige/50

              sm:-right-[25%] sm:w-[70%]

              lg:-right-[12%] lg:w-[48%]
            "
          />

          <div
            className="
              pointer-events-none absolute
              -bottom-[38%] -left-[38%]
              aspect-square w-[85%]
              rounded-full
              bg-timscare-beige/25

              lg:w-[42%]
            "
          />

          <div
            className="
              relative mx-auto grid h-full
              w-full max-w-7xl
              grid-rows-[auto_1fr]
              px-5 pb-5

              sm:px-6 sm:pb-6

              md:px-8 md:pb-8

              lg:grid-cols-[0.95fr_1.05fr]
              lg:grid-rows-1
              lg:items-center
              lg:gap-14
            "
          >
            {/* TEXTE */}
            <div
              className="
                relative z-10
                flex flex-col justify-center
                pt-3

                sm:pt-5

                lg:pt-0
              "
            >
              <p
                className="
                  text-[10px] font-medium
                  uppercase tracking-[0.32em]
                  text-timscare-terracotta

                  sm:text-xs
                "
              >
                L’univers Timscare
              </p>

              <h1
                className="
                  mt-4 max-w-2xl
                  text-[clamp(2.6rem,11vw,4rem)]
                  font-medium
                  leading-[0.96]
                  tracking-tight
                  text-timscare-brown

                  sm:mt-5

                  lg:text-[clamp(3.8rem,5.2vw,5.4rem)]
                "
              >
                Prendre soin
                <br />
                de votre peau,
                <br />
                autrement.
              </h1>

              <p
                className="
                  mt-4 max-w-xl
                  text-sm leading-6
                  text-timscare-brown/65

                  sm:mt-5
                  sm:text-base
                  sm:leading-7

                  lg:text-lg
                  lg:leading-8
                "
              >
                Timscare est un univers dédié au soin de la peau et au
                bien-être, pensé pour offrir à chacune et chacun un moment
                d’attention, de douceur et de reconnexion.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
                <Link
                  href="/prestations"
                  className="
                    inline-flex min-h-12
                    items-center justify-center
                    gap-2 rounded-full
                    bg-timscare-terracotta
                    px-5
                    text-xs font-medium
                    text-timscare-cream
                    transition

                    hover:opacity-90

                    sm:px-6
                    sm:text-sm
                  "
                >
                  Découvrir les soins

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.6}
                  />
                </Link>

                <Link
                  href="/contact"
                  className="
                    inline-flex min-h-12
                    items-center justify-center
                    rounded-full
                    border
                    border-timscare-brown/15
                    px-5
                    text-xs font-medium
                    text-timscare-brown
                    transition

                    hover:bg-timscare-beige/40

                    sm:px-6
                    sm:text-sm
                  "
                >
                  Nous contacter
                </Link>
              </div>
            </div>

            {/* VISUEL */}
            <div
              className="
                relative z-10
                mt-4 h-full min-h-0
                overflow-hidden
                rounded-[1.8rem]
                bg-timscare-brown

                sm:mt-5

                lg:mt-0
                lg:h-[min(68dvh,620px)]
                lg:rounded-[2.75rem]
              "
            >
              {/* Placeholder futur portrait / photo institut */}
              <div
                className="
                  absolute inset-0
                  bg-[radial-gradient(circle_at_68%_24%,#fef7ef_0%,#f2d7b8_27%,#af561e_59%,#482412_100%)]
                "
              />

              <div
                className="
                  absolute
                  right-[10%] top-[10%]
                  h-[38%] w-[42%]
                  rounded-full
                  bg-white/15
                  blur-3xl
                "
              />

              <div
                className="
                  absolute inset-3
                  rounded-[1.4rem]
                  border
                  border-timscare-cream/15

                  sm:inset-4

                  lg:inset-5
                  lg:rounded-[2.25rem]
                "
              />

              <div
                className="
                  absolute inset-x-0 bottom-0
                  bg-gradient-to-t
                  from-timscare-brown/80
                  via-timscare-brown/25
                  to-transparent
                  px-6 pb-6 pt-20

                  sm:px-8 sm:pb-8
                "
              >
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.35em]
                    text-timscare-beige/70
                  "
                >
                  Timscare Institut
                </p>

                <p
                  className="
                    mt-2 max-w-sm
                    text-xl font-medium
                    leading-tight
                    text-timscare-cream

                    sm:text-2xl
                  "
                >
                  La peau au centre de l’expérience.
                </p>
              </div>
            </div>
          </div>

          {/* INDICATION SCROLL */}
          <div
            className="
              pointer-events-none
              absolute bottom-5 left-1/2 z-20
              hidden -translate-x-1/2

              lg:flex
              lg:flex-col
              lg:items-center
              lg:gap-2
            "
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-timscare-brown/40
              "
            >
              Découvrir
            </span>

            <ArrowDown
              size={15}
              strokeWidth={1.4}
              className="text-timscare-terracotta"
            />
          </div>
        </section>

        {/* =====================================================
            INTRO / PHILOSOPHIE
            ===================================================== */}

        <section className="bg-[#fffaf5]">
          <div
            className="
              mx-auto grid max-w-7xl
              gap-10
              px-5 py-20

              sm:px-6

              md:px-8 md:py-28

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
                  mt-5 max-w-lg
                  text-4xl font-medium
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
                flex flex-col justify-center
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
                  text-lg leading-8
                  text-timscare-brown/75

                  md:text-xl
                  md:leading-9
                "
              >
                Chaque peau possède ses propres besoins, son histoire et son
                équilibre. L’approche Timscare privilégie des soins choisis
                selon vos attentes, dans un environnement chaleureux et
                apaisant.
              </p>

              <p
                className="
                  mt-6 max-w-2xl
                  text-sm leading-7
                  text-timscare-brown/55

                  sm:text-base
                "
              >
                L’objectif est simple : prendre le temps de comprendre votre
                peau, proposer un moment adapté et vous permettre de repartir
                avec une sensation de bien-être et de confiance.
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
              mx-auto max-w-7xl
              px-5 py-20

              sm:px-6

              md:px-8 md:py-28
            "
          >
            <div
              className="
                grid gap-7

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
                    text-4xl font-medium
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
                  text-sm leading-7
                  text-timscare-brown/60

                  sm:text-base

                  lg:ml-auto
                "
              >
                Une expérience pensée autour de la personne, de sa peau et du
                moment qu’elle vient s’accorder.
              </p>
            </div>

            <div
              className="
                mt-12 grid gap-3

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
                      group relative overflow-hidden
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
                    <div
                      className="
                        flex items-center
                        justify-between
                      "
                    >
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
                          flex h-11 w-11
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
                          text-sm leading-6
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
            relative overflow-hidden
            bg-timscare-brown
            text-timscare-cream
          "
        >
          <div
            className="
              pointer-events-none absolute
              -right-[35%] top-1/2
              aspect-square w-[95%]
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
              relative mx-auto grid
              max-w-7xl gap-12
              px-5 py-20

              sm:px-6

              md:px-8 md:py-28

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
                  mt-5 max-w-3xl
                  text-4xl font-medium
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
                  text-base leading-7
                  text-timscare-beige/75

                  lg:text-lg
                  lg:leading-8
                "
              >
                L’identité de Timscare s’inspire d’un univers chaleureux et
                pluriel. Les soins s’adressent à des peaux, des besoins et des
                profils différents.
              </p>

              <Link
                href="/prestations"
                className="
                  mt-8 inline-flex
                  min-h-13
                  items-center
                  justify-center gap-3
                  rounded-full
                  bg-timscare-terracotta
                  px-6
                  text-sm font-medium
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
            LOCALISATION / CTA
            ===================================================== */}

        <section className="bg-timscare-cream">
          <div
            className="
              mx-auto max-w-7xl
              px-5 py-20

              sm:px-6

              md:px-8 md:py-28
            "
          >
            <div
              className="
                relative overflow-hidden
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
                  absolute -right-20 -top-24
                  h-72 w-72
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
                    mt-5 max-w-3xl
                    text-3xl font-medium
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
                    mt-5 max-w-xl
                    text-sm leading-6
                    text-timscare-cream/70

                    sm:text-base
                    sm:leading-7
                  "
                >
                  Retrouvez Timscare à Bagnolet et découvrez le soin qui
                  correspond à vos besoins.
                </p>
              </div>

              <div
                className="
                  relative mt-8
                  flex flex-col gap-2

                  sm:flex-row

                  lg:mt-0
                "
              >
                <Link
                  href="/prestations"
                  className="
                    inline-flex min-h-14
                    items-center justify-center
                    rounded-full
                    bg-timscare-cream
                    px-7
                    text-sm font-medium
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
                    inline-flex min-h-14
                    items-center justify-center
                    rounded-full
                    border
                    border-timscare-cream/25
                    px-7
                    text-sm font-medium
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
    </>
  );
}