"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";

import { SiteHeader } from "@/components/site-header";

type Service = {
  name: string;
  price: string;
  description: string;
  image?: string;
};

type Category = {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  intro: string;
  services: Service[];
};

const categories: Category[] = [
  {
    id: "visage",
    number: "01",
    shortTitle: "Visage",
    title: "Soins du visage",
    intro:
      "Des protocoles pensés pour nettoyer, hydrater, purifier et révéler l’éclat naturel de chaque peau.",
    services: [
      {
        name: "Soin complet",
        price: "55€",
        description:
          "Nettoyage, exfoliation, extraction et masque.",
      },
      {
        name: "L’Instant Timscare",
        price: "70€",
        description:
          "Le soin signature Timscare : purifie, hydrate et illumine la peau.",
      },
      {
        name: "Soin peau grasse & acné",
        price: "85€",
        description:
          "Purifie, régule le sébum et aide à réduire les imperfections.",
      },
      {
        name: "Microneedling",
        price: "80€",
        description:
          "Taches, pores dilatés, acné, hyperpigmentation, rides et ridules.",
      },
      {
        name: "Dermaplaning",
        price: "75€",
        description:
          "Retire le duvet, lisse la peau et apporte douceur et luminosité.",
      },
      {
        name: "L’Instant Duo Timscare",
        price: "120€",
        description:
          "Association d’un soin profond et d’un dermaplaning.",
      },
      {
        name: "Soin Hydro Glow by Timscare",
        price: "90€",
        description:
          "Nettoyage profond, hydratation intense et coup d’éclat immédiat.",
      },
    ],
  },
  {
    id: "peelings",
    number: "02",
    shortTitle: "Peelings",
    title: "Peelings",
    intro:
      "Des soins ciblés pour travailler les taches, les imperfections et les irrégularités du teint.",
    services: [
      {
        name: "Peeling Mandéa",
        price: "320€",
        description:
          "Cure de 4 séances. Un peeling doux destiné à raviver l’éclat.",
      },
      {
        name: "Peeling Azéa",
        price: "320€",
        description:
          "Cure de 4 séances pour les imperfections et les peaux sujettes aux boutons.",
      },
      {
        name: "Peeling aux algues visage",
        price: "120€",
        description:
          "Pour les taches, imperfections, pores dilatés et irrégularités.",
      },
      {
        name: "Peeling aux algues corps",
        price: "Dès 160€",
        description:
          "Soin ciblé pour les taches, imperfections, vergetures et irrégularités.",
      },
    ],
  },
  {
    id: "corps",
    number: "03",
    shortTitle: "Corps",
    title: "Soins du corps",
    intro:
      "Des soins sensoriels conçus pour retrouver douceur, confort et détente.",
    services: [
      {
        name: "Exfoliant gourmand",
        price: "85€",
        description:
          "Gommage du corps accompagné d’un massage.",
      },
      {
        name: "Évasion enveloppante",
        price: "90€",
        description:
          "Enveloppement aux algues suivi d’un massage.",
      },
    ],
  },
  {
    id: "massages",
    number: "04",
    shortTitle: "Massages",
    title: "Massages",
    intro:
      "Des instants dédiés au relâchement, à la détente et au bien-être du corps.",
    services: [
      {
        name: "Massage Full Body",
        price: "65€",
        description:
          "Massage relaxant du corps entier, fusion du lomi-lomi et du californien.",
      },
      {
        name: "Massage dos & nuque",
        price: "45€",
        description:
          "Massage relaxant du dos et de la nuque allié à la chaleur du sauna.",
      },
    ],
  },
  {
    id: "rituels",
    number: "05",
    shortTitle: "Rituels",
    title: "Rituels",
    intro:
      "Des expériences complètes associant plusieurs soins pour créer un véritable moment pour soi.",
    services: [
      {
        name: "Rituel Bien Être",
        price: "130€",
        description:
          "Soin visage, gommage corps et massage.",
      },
      {
        name: "Soin Renaissance by Timscare",
        price: "210€",
        description:
          "Soin visage, gommage, enveloppement et massage.",
      },
      {
        name: "Rituel Magno",
        price: "189€",
        description:
          "Rituel traditionnel pour future mariée ou mise en beauté avant un événement.",
      },
    ],
  },
  {
    id: "pieds",
    number: "06",
    shortTitle: "Pieds",
    title: "Beauté des pieds",
    intro:
      "Un soin ciblé pour retrouver des pieds plus doux et une finition soignée.",
    services: [
      {
        name: "Callus Peel",
        price: "50€",
        description:
          "Peeling des pieds conçu pour travailler les callosités.",
      },
      {
        name: "Option mise en beauté des ongles",
        price: "+15€",
        description:
          "Coupe, limage, pousse des cuticules et ponçage.",
      },
    ],
  },
];

/* =========================================================
   CARTE D'UN SOIN
   ========================================================= */

function ServiceCard({
  service,
  highlighted = false,
}: {
  service: Service;
  highlighted?: boolean;
}) {
  const curvedImageMask =
    "radial-gradient(ellipse 96% 98% at 108% 50%, black 0%, black 48%, rgba(0,0,0,0.97) 58%, rgba(0,0,0,0.78) 68%, rgba(0,0,0,0.48) 78%, rgba(0,0,0,0.20) 88%, rgba(0,0,0,0.06) 95%, transparent 100%)";

  return (
    <article
      className={`
        group relative isolate min-h-[190px] overflow-hidden
        rounded-[1.75rem] border
        sm:min-h-[210px]
        md:min-h-[230px]
        ${
          highlighted
            ? "border-timscare-brown bg-timscare-brown text-timscare-cream"
            : "border-timscare-brown/10 bg-[#fffaf5] text-timscare-brown"
        }
      `}
    >
      {/* HALO DE TRANSITION */}
      <div
        className="
          pointer-events-none absolute
          right-[17%] top-1/2
          h-[145%] w-[34%]
          -translate-y-1/2
          rounded-[50%]
          blur-3xl
          sm:right-[19%] sm:w-[30%]
          md:right-[20%] md:w-[28%]
        "
        style={{
          background: highlighted
            ? `
              radial-gradient(
                ellipse at center,
                rgba(175,86,30,0.22) 0%,
                rgba(175,86,30,0.13) 35%,
                rgba(72,36,18,0.08) 58%,
                transparent 80%
              )
            `
            : `
              radial-gradient(
                ellipse at center,
                rgba(242,215,184,0.52) 0%,
                rgba(242,215,184,0.34) 34%,
                rgba(175,86,30,0.13) 57%,
                transparent 81%
              )
            `,
        }}
      />

      {/* IMAGE EN ARC */}
      <div
        className="
          pointer-events-none absolute
          -right-[8%] top-1/2
          h-[165%] w-[47%]
          -translate-y-1/2

          sm:-right-[7%] sm:h-[160%] sm:w-[44%]

          md:-right-[6%] md:h-[155%] md:w-[41%]
        "
      >
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            borderRadius: "68% 0 0 68%",
            WebkitMaskImage: curvedImageMask,
            maskImage: curvedImageMask,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        >
          {service.image ? (
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="
                (max-width: 640px) 47vw,
                (max-width: 768px) 44vw,
                (max-width: 1024px) 41vw,
                360px
              "
              className="
                object-cover
                transition-transform duration-700
                group-hover:scale-[1.035]
              "
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: highlighted
                  ? `
                    radial-gradient(
                      circle at 76% 40%,
                      #fef7ef 0%,
                      #f2d7b8 23%,
                      #af561e 55%,
                      #482412 100%
                    )
                  `
                  : `
                    radial-gradient(
                      circle at 76% 40%,
                      #fffaf5 0%,
                      #f2d7b8 29%,
                      rgba(175,86,30,0.72) 63%,
                      rgba(72,36,18,0.30) 100%
                    )
                  `,
              }}
            />
          )}

          {/* LUMIÈRE */}
          <div
            className="
              absolute right-[7%] top-[17%]
              h-[35%] w-[44%]
              rounded-full
              bg-white/20
              blur-3xl
            "
          />

          {/* PROFONDEUR */}
          <div
            className={`
              absolute inset-0
              bg-gradient-to-t
              ${
                highlighted
                  ? "from-timscare-brown/30 via-transparent to-transparent"
                  : "from-timscare-brown/10 via-transparent to-transparent"
              }
            `}
          />
        </div>
      </div>

      {/* DEUXIÈME FUSION */}
      <div
        className="
          pointer-events-none absolute
          right-[27%] top-1/2
          h-[120%] w-[18%]
          -translate-y-1/2
          rounded-full
          blur-[28px]

          sm:right-[26%] sm:w-[16%]
          md:right-[25%] md:w-[14%]
        "
        style={{
          background: highlighted
            ? "rgba(175,86,30,0.10)"
            : "rgba(242,215,184,0.22)",
        }}
      />

      {/* TEXTE */}
      <div
        className="
          relative z-10
          flex min-h-[190px]
          w-[74%] flex-col justify-center
          p-5 pr-2

          sm:min-h-[210px] sm:w-[72%] sm:p-6 sm:pr-3

          md:min-h-[230px] md:w-[70%] md:p-8
        "
      >
        <span
          className={`
            text-[9px] uppercase tracking-[0.28em]
            sm:text-[10px]
            ${
              highlighted
                ? "text-timscare-beige/65"
                : "text-timscare-terracotta"
            }
          `}
        >
          Timscare
        </span>

        <h3
          className="
            mt-2 max-w-md
            text-[1.05rem] font-medium
            leading-[1.12] tracking-tight
            sm:text-xl
            md:text-2xl
          "
        >
          {service.name}
        </h3>

        <p
          className={`
            mt-3 max-w-md
            text-[12px] leading-[1.55]
            sm:mt-4 sm:text-sm sm:leading-6
            ${
              highlighted
                ? "text-timscare-beige/65"
                : "text-timscare-brown/60"
            }
          `}
        >
          {service.description}
        </p>
      </div>

      {/* PRIX */}
      <span
        className={`
          absolute bottom-4 right-4 z-20
          max-w-[34%]
          whitespace-nowrap
          rounded-full
          px-3.5 py-2
          text-[11px] font-medium
          shadow-[0_8px_30px_rgba(72,36,18,0.18)]
          backdrop-blur-md

          sm:bottom-5 sm:right-5
          sm:px-4 sm:text-xs

          md:px-5 md:py-2.5 md:text-sm

          ${
            highlighted
              ? "bg-timscare-cream/95 text-timscare-brown"
              : "bg-timscare-brown/95 text-timscare-cream"
          }
        `}
      >
        {service.price}
      </span>
    </article>
  );
}

/* =========================================================
   BOUTON RETOUR EN HAUT
   ========================================================= */

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 550);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Revenir en haut de la page"
      title="Revenir en haut"
      className={`
        fixed bottom-5 right-5 z-40
        flex h-12 w-12 items-center justify-center
        rounded-full
        border border-timscare-cream/30
        bg-timscare-brown/95
        text-timscare-cream
        shadow-[0_12px_35px_rgba(72,36,18,0.24)]
        backdrop-blur-md
        transition-all duration-300

        hover:-translate-y-1
        hover:bg-timscare-terracotta

        sm:bottom-6 sm:right-6
        sm:h-13 sm:w-13

        lg:bottom-8 lg:right-8
        lg:h-14 lg:w-14

        ${
          visible
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
    >
      <ArrowUp
        size={19}
        strokeWidth={1.7}
        className="lg:h-5 lg:w-5"
      />
    </button>
  );
}

/* =========================================================
   PAGE PRESTATIONS
   ========================================================= */

export default function PrestationsPage() {
  return (
    <>
      <SiteHeader />

      <main className="overflow-x-clip">
        {/* HERO */}
        <section
          className="
            relative flex min-h-[440px] overflow-hidden
            bg-timscare-cream pt-20

            md:min-h-[500px] md:pt-24

            lg:h-[min(68dvh,640px)]
          "
        >
          <div
            className="
              absolute -right-[45%] -top-[20%]
              aspect-square w-[95%]
              rounded-full bg-timscare-beige/55

              sm:-right-[25%] sm:w-[65%]

              lg:-right-[15%] lg:w-[45%]
            "
          />

          <div
            className="
              absolute -bottom-[45%] -left-[35%]
              aspect-square w-[90%]
              rounded-full bg-timscare-beige/25

              sm:w-[65%]

              lg:w-[40%]
            "
          />

          <div
            className="
              relative mx-auto
              flex w-full max-w-7xl items-end
              px-5 pb-12

              sm:px-6

              md:px-8 md:pb-16

              lg:pb-20
            "
          >
            <div className="grid w-full gap-7 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-timscare-terracotta sm:text-xs">
                  Timscare Institut
                </p>

                <h1
                  className="
                    mt-5 max-w-3xl
                    text-[clamp(3rem,14vw,4.5rem)]
                    font-medium leading-[0.95]
                    tracking-tight
                    text-timscare-brown

                    lg:text-7xl
                  "
                >
                  Nos soins,
                  <br />
                  votre moment.
                </h1>
              </div>

              <p
                className="
                  max-w-xl
                  text-sm leading-6
                  text-timscare-brown/65

                  sm:text-base sm:leading-7

                  lg:ml-auto lg:text-lg lg:leading-8
                "
              >
                Découvrez les soins Timscare et trouvez le rituel qui
                correspond à votre peau, vos besoins et votre moment.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            EXPLORER LES SOINS
            ===================================================== */}

        <section
          id="categories"
          className="
            relative
            border-y border-timscare-brown/10
            bg-[#fffaf5]
          "
        >
          <div
            className="
              mx-auto max-w-7xl
              px-5 py-10

              sm:px-6

              md:px-8 md:py-12
            "
          >
            <div className="mb-6 flex items-end justify-between gap-5">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-timscare-terracotta sm:text-[10px]">
                  Navigation
                </p>

                <h2 className="mt-2 text-xl font-medium tracking-tight text-timscare-brown sm:text-2xl">
                  Explorer les soins
                </h2>
              </div>

              <ArrowDown
                size={20}
                strokeWidth={1.4}
                className="mb-1 text-timscare-terracotta"
              />
            </div>

            {/* PAS DE SCROLL HORIZONTAL */}
            <nav
              aria-label="Catégories de prestations"
              className="
                grid w-full
                grid-cols-2 gap-2

                sm:grid-cols-3 sm:gap-3

                lg:grid-cols-6
              "
            >
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="
                    group flex min-h-[76px] min-w-0
                    items-center justify-between gap-2
                    rounded-[1.25rem]
                    border border-timscare-brown/10
                    bg-timscare-cream
                    px-3.5 py-3
                    transition

                    hover:border-timscare-brown
                    hover:bg-timscare-brown
                    hover:text-timscare-cream

                    sm:min-h-[82px] sm:px-4
                  "
                >
                  <div className="min-w-0">
                    <span className="text-[9px] tracking-[0.25em] text-timscare-terracotta">
                      {category.number}
                    </span>

                    <p className="mt-1 break-words text-[12px] font-medium leading-tight sm:text-sm">
                      {category.shortTitle}
                    </p>
                  </div>

                  <ArrowDown
                    size={14}
                    strokeWidth={1.4}
                    className="
                      shrink-0 opacity-50
                      transition
                      group-hover:opacity-100
                    "
                  />
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* =====================================================
            LISTE DES PRESTATIONS
            ===================================================== */}

        <section className="bg-timscare-cream">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
            {categories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                className="
                  scroll-mt-6
                  border-b border-timscare-brown/10
                  py-16

                  md:py-24

                  lg:py-28
                "
              >
                <div
                  className="
                    grid gap-9

                    lg:grid-cols-[0.68fr_1.32fr]
                    lg:gap-16
                  "
                >
                  {/* TITRE DE CATÉGORIE */}
                  <div className="lg:sticky lg:top-12 lg:self-start">
                    <span className="text-[10px] tracking-[0.3em] text-timscare-terracotta sm:text-xs">
                      {category.number}
                    </span>

                    <h2
                      className="
                        mt-4
                        text-3xl font-medium
                        leading-[1.02] tracking-tight
                        text-timscare-brown

                        sm:text-4xl

                        md:text-5xl
                      "
                    >
                      {category.title}
                    </h2>

                    <p
                      className="
                        mt-5 max-w-md
                        text-sm leading-6
                        text-timscare-brown/60

                        sm:text-base sm:leading-7
                      "
                    >
                      {category.intro}
                    </p>

                    {/* RETOUR AUX CATÉGORIES SUR MOBILE */}
                    <a
                      href="#categories"
                      className="
                        mt-6 inline-flex items-center gap-2
                        text-[11px] font-medium
                        text-timscare-terracotta
                        lg:hidden
                      "
                    >
                      <ArrowUp
                        size={13}
                        strokeWidth={1.5}
                      />

                      Toutes les catégories
                    </a>

                    <div className="mt-8 hidden h-px w-20 bg-timscare-terracotta lg:block" />
                  </div>

                  {/* CARTES */}
                  <div className="grid gap-3 sm:gap-4">
                    {category.services.map(
                      (service, index) => (
                        <ServiceCard
                          key={service.name}
                          service={service}
                          highlighted={
                            category.id === "rituels" &&
                            index === 1
                          }
                        />
                      ),
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* =====================================================
            CTA FINAL
            ===================================================== */}

        <section className="relative overflow-hidden bg-timscare-terracotta">
          <div
            className="
              absolute
              -right-[35%] -top-[50%]
              aspect-square w-[85%]
              rounded-full
              border border-timscare-cream/10

              sm:w-[55%]

              lg:w-[38%]
            "
          />

          <div
            className="
              relative mx-auto
              flex max-w-7xl flex-col
              gap-8
              px-5 py-16
              text-timscare-cream

              sm:px-6

              md:px-8 md:py-20

              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:py-24
            "
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-timscare-cream/65 sm:text-xs">
                Votre moment Timscare
              </p>

              <h2
                className="
                  mt-5 max-w-3xl
                  text-3xl font-medium
                  leading-[1.03] tracking-tight

                  sm:text-4xl

                  md:text-5xl
                "
              >
                Vous ne savez pas quel soin choisir ?
              </h2>

              <p
                className="
                  mt-5 max-w-2xl
                  text-sm leading-6
                  text-timscare-cream/70

                  sm:text-base sm:leading-7
                "
              >
                Timscare peut vous orienter vers la prestation la plus adaptée
                à vos besoins.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                inline-flex min-h-14
                shrink-0 items-center justify-center
                gap-3
                rounded-full
                bg-timscare-cream
                px-7
                text-sm font-medium
                text-timscare-brown
                transition
                hover:opacity-90
              "
            >
              Contacter Timscare

              <ArrowUpRight
                size={17}
                strokeWidth={1.6}
              />
            </Link>
          </div>
        </section>
      </main>

      {/* BOUTON FLOTTANT RETOUR EN HAUT */}
      <BackToTopButton />
    </>
  );
}