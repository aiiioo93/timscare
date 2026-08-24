import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

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

export default function PrestationsPage() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-x-clip bg-timscare-cream">
        {/* =====================================================
            HERO
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
          {/* GRAND CERCLE */}
          <div
            className="
              pointer-events-none
              absolute -right-[45%] -top-[12%]
              aspect-square w-[110%]
              rounded-full
              bg-timscare-beige/55

              sm:-right-[28%] sm:w-[78%]

              lg:-right-[12%] lg:w-[48%]
            "
          />

          {/* CERCLE BAS */}
          <div
            className="
              pointer-events-none
              absolute -bottom-[40%] -left-[45%]
              aspect-square w-[90%]
              rounded-full
              border border-timscare-brown/5

              lg:w-[42%]
            "
          />

          {/* PETIT ACCENT */}
          <div
            className="
              pointer-events-none
              absolute right-[16%] top-[25%]
              h-24 w-24
              rounded-full
              bg-timscare-terracotta/15
              blur-3xl

              lg:h-48 lg:w-48
            "
          />

          <div
            className="
              relative mx-auto
              flex h-full max-w-7xl
              flex-col justify-end
              px-5 pb-10

              sm:px-6 sm:pb-12

              md:px-8 md:pb-16

              lg:pb-20
            "
          >
            <div
              className="
                grid gap-8

                lg:grid-cols-[1.15fr_.85fr]
                lg:items-end
              "
            >
              <div>
                <div className="flex items-center gap-3">
                  <span
                    className="
                      flex h-9 w-9
                      items-center justify-center
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

                  <p
                    className="
                      text-[9px] font-medium
                      uppercase tracking-[0.32em]
                      text-timscare-terracotta

                      sm:text-[10px]
                    "
                  >
                    L’expérience Timscare
                  </p>
                </div>

                <h1
                  className="
                    mt-6 max-w-4xl
                    text-[clamp(3rem,14vw,5rem)]
                    font-medium
                    leading-[0.92]
                    tracking-[-0.05em]
                    text-timscare-brown

                    lg:text-[clamp(5rem,7vw,7rem)]
                  "
                >
                  Choisissez
                  <br />
                  votre univers.
                </h1>
              </div>

              <div className="lg:pb-2">
                <p
                  className="
                    max-w-lg
                    text-sm leading-6
                    text-timscare-brown/60

                    sm:text-base sm:leading-7

                    lg:text-lg lg:leading-8
                  "
                >
                  Visage, peelings, massages, corps ou rituels.
                  Explorez chaque univers et découvrez les soins
                  Timscare qui lui sont associés.
                </p>

                <a
                  href="#univers"
                  className="
                    mt-6 inline-flex
                    items-center gap-3
                    text-[10px] font-medium
                    uppercase tracking-[0.22em]
                    text-timscare-brown/45
                  "
                >
                  Explorer

                  <span
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-full
                      border border-timscare-brown/10
                    "
                  >
                    <ArrowDown
                      size={14}
                      strokeWidth={1.5}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CATÉGORIES
            ===================================================== */}

        <section
          id="univers"
          className="bg-[#fffaf5]"
        >
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
                mb-12 grid gap-5

                lg:grid-cols-[1fr_.8fr]
                lg:items-end
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    uppercase tracking-[0.32em]
                    text-timscare-terracotta

                    sm:text-[10px]
                  "
                >
                  Nos univers
                </p>

                <h2
                  className="
                    mt-4 max-w-2xl
                    text-3xl font-medium
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
                  max-w-lg text-sm
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

            {/* MOSAÏQUE */}
            <div className="grid gap-3 lg:grid-cols-12 lg:gap-4">
              {categories.map((category, index) => {
                const firstImage =
                  category.services.find(
                    (service) => service.image,
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
                      group relative
                      min-h-[260px]
                      overflow-hidden
                      rounded-[2rem]

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
                    {/* PHOTO FUTURE */}
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
                        absolute -right-[18%] -top-[35%]
                        aspect-square w-[70%]
                        rounded-full
                        border border-current
                        opacity-[0.07]

                        transition-transform
                        duration-1000
                        group-hover:scale-110
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute -bottom-[45%] right-[10%]
                        aspect-square w-[65%]
                        rounded-full
                        border border-current
                        opacity-[0.06]
                      "
                    />

                    {/* NUMÉRO GÉANT */}
                    <span
                      className="
                        pointer-events-none
                        absolute right-5 top-2
                        text-[7rem] font-medium
                        leading-none tracking-[-0.08em]
                        opacity-[0.045]

                        sm:text-[9rem]
                      "
                    >
                      {category.number}
                    </span>

                    <div
                      className="
                        relative z-10
                        flex h-full min-h-[260px]
                        flex-col justify-between
                        p-6

                        sm:min-h-[300px]
                        sm:p-8

                        lg:min-h-[360px]
                      "
                    >
                      {/* TOP */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span
                            className={`
                              text-[9px]
                              uppercase tracking-[0.3em]

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
                              mt-2 text-[10px]
                              uppercase tracking-[0.22em]

                              ${
                                dark
                                  ? "text-timscare-beige/35"
                                  : "text-timscare-brown/40"
                              }
                            `}
                          >
                            {category.services.length}{" "}
                            {category.services.length > 1
                              ? "soins"
                              : "soin"}
                          </p>
                        </div>

                        <span
                          className={`
                            flex h-11 w-11
                            items-center justify-center
                            rounded-full
                            border
                            transition-all duration-500

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

                      {/* BAS */}
                      <div>
                        <h3
                          className="
                            text-[2rem] font-medium
                            leading-[0.95]
                            tracking-[-0.045em]

                            sm:text-[2.7rem]
                          "
                        >
                          {category.shortTitle}
                        </h3>

                        <p
                          className={`
                            mt-4 max-w-md
                            text-sm leading-6

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
                            mt-6 h-px w-12
                            transition-all duration-500
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
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}