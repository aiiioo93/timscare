import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { timscareVisuals } from "@/data/timscare-visuals";

export function Hero() {
  return (
    <section
      className="
        relative
        h-[100dvh]
        overflow-hidden
        bg-timscare-cream
      "
    >
      {/* =====================================================
          DÉCOR
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-32
          h-[550px]
          w-[550px]
          rounded-full
          bg-timscare-beige/55
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-56
          -left-44
          h-[500px]
          w-[500px]
          rounded-full
          bg-timscare-beige/35
        "
      />

      {/* =====================================================
          CONTENU
          ===================================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          h-full
          w-full
          max-w-7xl
          flex-col

          px-5
          pb-5
          pt-24

          sm:px-6
          sm:pb-6
          sm:pt-28

          md:grid
          md:grid-cols-[1fr_.92fr]
          md:items-center
          md:gap-8
          md:px-8
          md:pb-8
          md:pt-28

          lg:grid-cols-[.9fr_1.1fr]
          lg:gap-14
        "
      >
        {/* ===================================================
            TEXTE
            =================================================== */}

        <div
          className="
            relative
            z-20
            shrink-0
          "
        >
          <p
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.32em]
              text-timscare-terracotta

              sm:text-[10px]
              md:text-xs
            "
          >
            Institut de beauté · Bagnolet
          </p>

          <h1
            className="
              mt-4
              max-w-xl

              text-[clamp(2.6rem,11vw,4rem)]
              font-medium
              leading-[0.94]
              tracking-[-0.05em]

              text-timscare-brown

              sm:text-[clamp(3.3rem,9vw,5rem)]

              lg:text-[clamp(4rem,5.2vw,6.2rem)]
              lg:leading-[0.92]
            "
          >
            Révélez
            <br />
            l&apos;éclat naturel
            <br />
            de votre peau.
          </h1>

          <p
            className="
              mt-5
              max-w-lg

              text-[12px]
              leading-5

              text-timscare-brown/60

              sm:text-sm
              sm:leading-6

              lg:text-base
              lg:leading-7
            "
          >
            Des soins du visage, du corps et des rituels bien-être pensés
            pour prendre soin de votre peau avec douceur, expertise et
            attention.
          </p>

          {/* CTA */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-3

              lg:mt-8
            "
          >
            <Link
              href="/prestations"
              className="
                group
                inline-flex
                min-h-12
                items-center
                justify-center
                gap-3

                rounded-full
                bg-timscare-terracotta

                px-6

                text-xs
                font-medium
                text-timscare-cream

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:shadow-[0_14px_35px_rgba(175,86,30,0.20)]

                sm:text-sm
              "
            >
              Découvrir les soins

              <ArrowUpRight
                size={15}
                strokeWidth={1.6}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              />
            </Link>

            <Link
              href="/timscare"
              className="
                inline-flex
                min-h-12
                items-center
                justify-center

                rounded-full
                border
                border-timscare-brown/15

                px-6

                text-xs
                font-medium
                text-timscare-brown

                transition-colors

                hover:bg-timscare-beige/45

                sm:text-sm
              "
            >
              Découvrir Timscare
            </Link>
          </div>
        </div>

        {/* ===================================================
            PHOTO
            =================================================== */}

        <div
          className="
            relative
            z-10

            mt-5
            min-h-0
            flex-1

            sm:mt-6

            md:mt-0
            md:h-[min(66dvh,650px)]
            md:flex-none
          "
        >
          {/* TEXTE DÉCORATIF */}

          <span
            className="
              pointer-events-none

              absolute
              -left-4
              top-[10%]

              z-20

              hidden

              text-[8px]
              uppercase
              tracking-[0.35em]

              text-timscare-brown/35

              lg:block
            "
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Timscare · Institut
          </span>

          {/* PHOTO PRINCIPALE */}

          <div
            className="
              relative
              h-full
              min-h-[180px]
              w-full

              overflow-hidden

              rounded-[2rem_2rem_4rem_2rem]

              bg-timscare-beige

              shadow-[0_30px_90px_rgba(72,36,18,0.13)]

              sm:min-h-[230px]
              sm:rounded-[2.5rem_2.5rem_5rem_2.5rem]

              md:min-h-0

              lg:rounded-[3rem_3rem_7rem_3rem]
            "
          >
            <Image
              src={timscareVisuals.home.hero.src}
              alt={timscareVisuals.home.hero.alt}
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
              className="
                object-cover
                object-[50%_70%]
              "
            />

            {/* LÉGER VOILE */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-timscare-brown/20
                via-transparent
                to-white/5
              "
            />

            {/* CONTOUR */}

            <div
              className="
                pointer-events-none
                absolute
                inset-3

                rounded-[1.5rem_1.5rem_3.3rem_1.5rem]

                border
                border-white/30

                sm:inset-4
                sm:rounded-[2rem_2rem_4.2rem_2rem]

                lg:inset-5
                lg:rounded-[2.5rem_2.5rem_6rem_2.5rem]
              "
            />

            {/* PETIT LABEL */}

            <div
              className="
                absolute
                bottom-4
                left-4

                rounded-full

                border
                border-white/20

                bg-timscare-brown/35

                px-4
                py-2

                backdrop-blur-md

                sm:bottom-5
                sm:left-5
              "
            >
              <p
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.28em]
                  text-timscare-cream/85

                  sm:text-[8px]
                "
              >
                Le soin au naturel
              </p>
            </div>
          </div>

          {/* LIGNE TERRACOTTA */}

          <div
            className="
              pointer-events-none

              absolute

              -right-3
              top-[15%]

              z-20

              h-[28%]
              w-px

              bg-timscare-terracotta/70

              sm:-right-5
            "
          />

          <span
            className="
              pointer-events-none

              absolute

              -right-[15px]
              top-[15%]

              z-20

              h-1.5
              w-1.5

              rounded-full

              bg-timscare-terracotta

              sm:-right-[23px]
            "
          />
        </div>
      </div>
    </section>
  );
}
