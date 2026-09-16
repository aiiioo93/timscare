import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Flower2,
  Sparkles,
  Waves,
} from "lucide-react";

export function ServicesPreview() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-timscare-cream
      "
    >
      {/* =====================================================
          DÉCOR GÉNÉRAL
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10

          h-[320px]
          w-[320px]

          rounded-full

          bg-timscare-beige/30

          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-10

          h-[420px]
          w-[420px]

          rounded-full

          bg-timscare-terracotta/[0.06]

          blur-3xl
        "
      />

      <div
        className="
          relative

          mx-auto
          max-w-7xl

          px-5

          pt-10
          pb-20

          sm:px-6
          sm:pt-12
          sm:pb-24

          md:px-8
          md:pt-14
          md:pb-28

          lg:pt-16
          lg:pb-32
        "
      >
        {/* =====================================================
            INTRO
            ===================================================== */}

        <div
          className="
            grid
            gap-7

            lg:grid-cols-[1.05fr_.75fr]
            lg:items-end
            lg:gap-16
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-medium

                uppercase

                tracking-[0.34em]

                text-timscare-terracotta

                sm:text-[10px]
              "
            >
              Les soins Timscare
            </p>

            <h2
              className="
                mt-4

                max-w-2xl

                text-[clamp(2.5rem,10vw,4rem)]

                font-medium

                leading-[0.98]

                tracking-[-0.05em]

                text-timscare-brown

                sm:text-5xl

                lg:text-[3.7rem]
              "
            >
              Des instants pensés
              <br />
              pour votre peau.
            </h2>
          </div>

          <div
            className="
              lg:pb-1
            "
          >
            <p
              className="
                max-w-lg

                text-sm
                leading-7

                text-timscare-brown/55

                sm:text-base
                sm:leading-8

                lg:ml-auto
              "
            >
              Découvrez quelques-uns des univers Timscare,
              chacun pensé comme une expérience à part entière.
            </p>
          </div>
        </div>

        {/* =====================================================
            CARTES
            ===================================================== */}

        <div
          className="
            mt-10

            grid
            gap-4

            sm:mt-12

            lg:mt-16
            lg:grid-cols-12
            lg:items-stretch
          "
        >
          {/* ===================================================
              VISAGE
              =================================================== */}

          <Link
            href="/prestations/visage"
            className="
              group
              relative

              min-h-[310px]

              overflow-hidden

              rounded-[2rem_2rem_4.5rem_2rem]

              bg-timscare-brown

              p-6

              text-timscare-cream

              shadow-[0_22px_60px_rgba(72,36,18,0.12)]

              transition-all
              duration-500

              hover:-translate-y-2
              hover:shadow-[0_30px_80px_rgba(72,36,18,0.20)]

              sm:min-h-[350px]
              sm:p-8

              lg:col-span-5
              lg:min-h-[400px]
              lg:rounded-[2.5rem_2.5rem_6rem_2.5rem]
              lg:p-9
            "
          >
            {/* ICÔNE GÉANTE */}

            <Sparkles
              aria-hidden="true"
              strokeWidth={0.7}
              className="
                pointer-events-none
                absolute

                -right-8
                -top-8

                h-48
                w-48

                text-timscare-beige/[0.07]

                transition-all
                duration-700

                group-hover:rotate-12
                group-hover:scale-110

                sm:h-56
                sm:w-56

                lg:h-64
                lg:w-64
              "
            />

            {/* ORBITE */}

            <div
              className="
                pointer-events-none
                absolute

                -right-12
                top-8

                h-44
                w-44

                rounded-full

                border
                border-dashed
                border-timscare-cream/[0.07]

                animate-[spin_18s_linear_infinite]
              "
            />

            <div
              className="
                relative

                flex
                h-full
                min-h-[258px]

                flex-col

                sm:min-h-[286px]

                lg:min-h-[328px]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
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

                  <span
                    className="
                      text-[9px]

                      uppercase

                      tracking-[0.3em]

                      text-timscare-beige/65
                    "
                  >
                    Éclat & équilibre
                  </span>
                </div>

                <span
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-timscare-cream/15

                    transition-all
                    duration-300

                    group-hover:rotate-45
                    group-hover:bg-timscare-cream
                    group-hover:text-timscare-brown
                  "
                >
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                  />
                </span>
              </div>

              <div className="mt-auto pt-14">
                <h3
                  className="
                    text-[clamp(3.2rem,14vw,4.8rem)]

                    font-medium

                    leading-[0.9]

                    tracking-[-0.055em]
                  "
                >
                  Visage
                </h3>

                <p
                  className="
                    mt-4

                    max-w-sm

                    text-sm
                    leading-6

                    text-timscare-beige/65
                  "
                >
                  Nettoyer, hydrater, purifier et révéler
                  naturellement l&apos;éclat de votre peau.
                </p>

                <div
                  className="
                    mt-6

                    flex
                    items-center
                    gap-2

                    text-[9px]
                    font-medium

                    uppercase

                    tracking-[0.2em]

                    text-timscare-beige
                  "
                >
                  Explorer

                  <ArrowRight
                    size={13}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1.5
                    "
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* ===================================================
              CORPS
              =================================================== */}

          <Link
            href="/prestations/corps"
            className="
              group
              relative

              min-h-[280px]

              overflow-hidden

              rounded-[2rem_4.5rem_2rem_2rem]

              border
              border-timscare-brown/[0.07]

              bg-timscare-beige

              p-6

              text-timscare-brown

              shadow-[0_20px_50px_rgba(72,36,18,0.07)]

              transition-all
              duration-500

              hover:-translate-y-2
              hover:shadow-[0_28px_70px_rgba(72,36,18,0.12)]

              sm:min-h-[320px]
              sm:p-8

              lg:col-span-3
              lg:min-h-[400px]
              lg:rounded-[2.5rem_5rem_2.5rem_2.5rem]
              lg:p-8
            "
          >
            <Waves
              aria-hidden="true"
              strokeWidth={0.55}
              className="
                pointer-events-none
                absolute

                -right-10
                top-8

                h-44
                w-44

                text-timscare-brown/[0.06]

                transition-all
                duration-700

                group-hover:translate-x-2
                group-hover:translate-y-2

                lg:h-52
                lg:w-52
              "
            />

            <div
              className="
                pointer-events-none
                absolute

                -left-10
                -bottom-10

                h-36
                w-36

                rounded-full

                bg-timscare-cream/50

                blur-xl
              "
            />

            <div
              className="
                relative

                flex
                h-full
                min-h-[228px]

                flex-col

                sm:min-h-[256px]

                lg:min-h-[328px]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
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

                    bg-timscare-cream/80

                    text-timscare-terracotta
                  "
                >
                  <Waves
                    size={15}
                    strokeWidth={1.5}
                  />
                </span>

                <span
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-timscare-brown/10

                    transition-all
                    duration-300

                    group-hover:rotate-45
                    group-hover:bg-timscare-brown
                    group-hover:text-timscare-cream
                  "
                >
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                  />
                </span>
              </div>

              <div className="mt-auto pt-12">
                <p
                  className="
                    mb-3

                    text-[8px]

                    uppercase

                    tracking-[0.28em]

                    text-timscare-terracotta
                  "
                >
                  Douceur & confort
                </p>

                <h3
                  className="
                    text-[clamp(2.9rem,13vw,4.2rem)]

                    font-medium

                    leading-none

                    tracking-[-0.05em]
                  "
                >
                  Corps
                </h3>

                <p
                  className="
                    mt-4

                    max-w-xs

                    text-sm
                    leading-6

                    text-timscare-brown/55
                  "
                >
                  Des soins pour retrouver douceur,
                  confort et sensation de légèreté.
                </p>
              </div>
            </div>
          </Link>

          {/* ===================================================
              RITUELS
              =================================================== */}

          <Link
            href="/prestations/rituels"
            className="
              group
              relative

              min-h-[280px]

              overflow-hidden

              rounded-[4.5rem_2rem_2rem_2rem]

              bg-timscare-terracotta

              p-6

              text-timscare-cream

              shadow-[0_20px_55px_rgba(175,86,30,0.10)]

              transition-all
              duration-500

              hover:-translate-y-2
              hover:shadow-[0_30px_75px_rgba(175,86,30,0.18)]

              sm:min-h-[320px]
              sm:p-8

              lg:col-span-4
              lg:min-h-[400px]
              lg:rounded-[5rem_2.5rem_2.5rem_2.5rem]
              lg:p-8
            "
          >
            <Flower2
              aria-hidden="true"
              strokeWidth={0.55}
              className="
                pointer-events-none
                absolute

                -right-8
                -bottom-8

                h-52
                w-52

                text-white/[0.07]

                transition-all
                duration-700

                group-hover:-rotate-12
                group-hover:scale-110

                lg:h-60
                lg:w-60
              "
            />

            <div
              className="
                pointer-events-none
                absolute

                right-[15%]
                top-[15%]

                h-24
                w-24

                rounded-full

                border
                border-dashed
                border-white/[0.10]

                animate-[spin_22s_linear_infinite]
              "
            />

            <div
              className="
                relative

                flex
                h-full
                min-h-[228px]

                flex-col

                sm:min-h-[256px]

                lg:min-h-[328px]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
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

                    bg-timscare-brown/25

                    text-timscare-beige
                  "
                >
                  <Flower2
                    size={15}
                    strokeWidth={1.5}
                  />
                </span>

                <span
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/20

                    transition-all
                    duration-300

                    group-hover:rotate-45
                    group-hover:bg-timscare-cream
                    group-hover:text-timscare-terracotta
                  "
                >
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                  />
                </span>
              </div>

              <div className="mt-auto pt-12">
                <p
                  className="
                    mb-3

                    text-[8px]

                    uppercase

                    tracking-[0.28em]

                    text-timscare-beige/65
                  "
                >
                  Évasion & bien-être
                </p>

                <h3
                  className="
                    text-[clamp(2.9rem,13vw,4.2rem)]

                    font-medium

                    leading-none

                    tracking-[-0.05em]
                  "
                >
                  Rituels
                </h3>

                <p
                  className="
                    mt-4

                    max-w-xs

                    text-sm
                    leading-6

                    text-timscare-cream/70
                  "
                >
                  Des expériences complètes pensées comme
                  une véritable parenthèse pour soi.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* =====================================================
            CTA FINAL
            ===================================================== */}

        <div
          className="
            mt-8

            flex
            flex-col

            gap-5

            rounded-[1.75rem]

            bg-[#fffaf5]

            p-5

            shadow-[0_18px_50px_rgba(72,36,18,0.04)]

            sm:p-6

            md:flex-row
            md:items-center
            md:justify-between
            md:gap-8

            lg:mt-10
            lg:px-7
          "
        >
          <p
            className="
              max-w-xl

              text-sm
              leading-6

              text-timscare-brown/55
            "
          >
            Peelings, massages, soins des pieds et d&apos;autres
            expériences Timscare sont également à découvrir.
          </p>

          <Link
            href="/prestations"
            className="
              group

              inline-flex
              min-h-12
              w-full

              items-center
              justify-center
              gap-3

              rounded-full

              bg-timscare-brown

              px-7

              text-sm
              font-medium

              text-timscare-cream

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:bg-timscare-terracotta
              hover:shadow-[0_14px_35px_rgba(72,36,18,0.14)]

              md:w-auto
              md:shrink-0
            "
          >
            Voir toutes les catégories

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
  );
}