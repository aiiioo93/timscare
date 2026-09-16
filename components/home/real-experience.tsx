import Image from "next/image";

import { timscareVisuals } from "@/data/timscare-visuals";

const images = timscareVisuals.home.experience;

export function RealExperience() {
  return (
    <section
      className="
        overflow-hidden
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
        {/* =====================================================
            INTRO
            ===================================================== */}

        <div
          className="
            grid
            gap-8

            lg:grid-cols-[.8fr_1.2fr]
            lg:items-end
            lg:gap-20
          "
        >
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
              L&apos;univers Timscare
            </p>

            <h2
              className="
                mt-5
                max-w-xl

                text-4xl
                font-medium
                leading-[0.98]
                tracking-[-0.045em]

                text-timscare-brown

                sm:text-5xl

                lg:text-6xl
              "
            >
              Un lieu pensé
              <br />
              pour prendre soin
              <br />
              de vous.
            </h2>
          </div>

          <div
            className="
              lg:pb-2
            "
          >
            <p
              className="
                max-w-xl

                text-sm
                leading-7

                text-timscare-brown/60

                sm:text-base
                sm:leading-8

                lg:ml-auto
              "
            >
              Chaque soin se déroule dans un univers chaleureux,
              professionnel et entièrement consacré à votre moment.
            </p>

          
          </div>
        </div>

        {/* =====================================================
            PHOTOS
            ===================================================== */}

        <div
          className="
            mt-12

            grid
            grid-cols-2
            gap-3

            sm:gap-4

            lg:mt-16
            lg:grid-cols-12
          "
        >
          {/* GRANDE PHOTO */}

          <div
            className="
              relative

              col-span-2

              aspect-[4/5]

              overflow-hidden

              rounded-[2rem]

              bg-timscare-beige

              sm:aspect-[5/4]

              lg:col-span-6
              lg:aspect-[4/5]
              lg:rounded-[2.5rem]
            "
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              sizes="
                (max-width: 1024px) 100vw,
                50vw
              "
              className="
                object-cover
                object-center
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-timscare-brown/25
                via-transparent
                to-transparent
              "
            />

            <div
              className="
                absolute
                bottom-5
                left-5

                rounded-full

                border
                border-white/20

                bg-timscare-brown/35

                px-4
                py-2

                backdrop-blur-md
              "
            >
              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.28em]
                  text-white
                "
              >
                Les soins
              </span>
            </div>
          </div>

          {/* COLONNE DROITE */}

          <div
            className="
              col-span-2

              grid
              grid-cols-2
              gap-3

              sm:gap-4

              lg:col-span-6
              lg:grid-cols-1
            "
          >
            {images.slice(1).map((image, index) => (
              <div
                key={image.src}
                className={`
                  relative
                  overflow-hidden

                  bg-timscare-beige

                  ${
                    index === 0
                      ? "aspect-[3/4] rounded-[1.5rem_1.5rem_3.5rem_1.5rem] lg:aspect-auto"
                      : "aspect-[3/4] rounded-[1.5rem_3.5rem_1.5rem_1.5rem] lg:aspect-auto"
                  }

                  lg:min-h-[280px]
                  lg:flex-1
                  lg:rounded-[2rem]
                `}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="
                    (max-width: 1024px) 50vw,
                    50vw
                  "
                  className="object-cover"
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-timscare-brown/15
                    via-transparent
                    to-transparent
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
