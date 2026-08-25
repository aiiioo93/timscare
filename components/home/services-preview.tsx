import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-timscare-cream">
      {/* DÉCOR */}
      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-timscare-beige/45" />
      <div className="pointer-events-none absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-timscare-beige/30" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-28 lg:py-32">
        {/* =====================================================
            INTRO
            ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-timscare-terracotta">
              Les soins Timscare
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-[1.02] tracking-tight text-timscare-brown sm:text-5xl lg:text-6xl">
              Des instants pensés
              <br />
              pour votre peau.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-lg text-base leading-7 text-timscare-brown/65 lg:ml-auto lg:text-lg lg:leading-8">
              Choisissez un univers et découvrez directement les soins
              Timscare qui lui sont associés.
            </p>
          </div>
        </div>

        {/* =====================================================
            COMPOSITION
            ===================================================== */}

        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-12">
          {/* ===================================================
              VISAGE — CARTE PRINCIPALE
              =================================================== */}

          <Link
            href="/prestations/visage"
            className="
              group relative min-h-[430px] overflow-hidden
              rounded-[2rem] bg-timscare-brown
              p-7 text-timscare-cream
              transition-transform duration-500
              hover:-translate-y-1
              md:p-10
              lg:col-span-7 lg:row-span-2 lg:min-h-[650px]
            "
          >
            <div className="absolute -right-12 -top-16 text-[15rem] font-medium leading-none text-timscare-cream/[0.035] md:text-[22rem]">
              01
            </div>

            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.35em] text-timscare-beige">
                  01 · Visage
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-timscare-cream/20 transition duration-300 group-hover:rotate-45 group-hover:bg-timscare-cream group-hover:text-timscare-brown">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.6}
                  />
                </span>
              </div>

              <div className="mt-auto pt-20">
                <p className="max-w-lg text-sm leading-6 text-timscare-beige/70">
                  Nettoyer, hydrater, purifier et révéler l&apos;éclat naturel
                  de votre peau.
                </p>

                <h3 className="mt-5 max-w-xl text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                  Soins du
                  <br />
                  visage
                </h3>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Soin complet",
                    "Hydro Glow",
                    "Microneedling",
                    "Dermaplaning",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-timscare-cream/15 px-4 py-2 text-xs text-timscare-beige"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>

          {/* ===================================================
              PEELINGS
              =================================================== */}

          <Link
            href="/prestations/peelings"
            className="
              group relative min-h-[280px] overflow-hidden
              rounded-[2rem] bg-timscare-terracotta
              p-7 text-timscare-cream
              transition-transform duration-500
              hover:-translate-y-1
              md:p-9
              lg:col-span-5
            "
          >
            <div className="absolute -bottom-12 -right-4 text-[11rem] font-medium leading-none text-white/[0.05]">
              02
            </div>

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.34em] text-timscare-cream/70">
                  02 · Peelings
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition duration-300 group-hover:rotate-45">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                  />
                </span>
              </div>

              <div className="pt-16">
                <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
                  Peelings
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-timscare-cream/70">
                  Taches, imperfections, pores dilatés et irrégularités du
                  teint.
                </p>
              </div>
            </div>
          </Link>

          {/* ===================================================
              CORPS
              =================================================== */}

          <Link
            href="/prestations/corps"
            className="
              group relative min-h-[280px] overflow-hidden
              rounded-[2rem]
              border border-timscare-brown/10
              bg-timscare-beige
              p-7 text-timscare-brown
              transition-transform duration-500
              hover:-translate-y-1
              md:p-9
              lg:col-span-5
            "
          >
            <div className="absolute -bottom-12 -right-4 text-[11rem] font-medium leading-none text-timscare-brown/[0.035]">
              03
            </div>

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.34em] text-timscare-terracotta">
                  03 · Corps
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-timscare-brown/10 transition duration-300 group-hover:rotate-45">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                  />
                </span>
              </div>

              <div className="pt-16">
                <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
                  Soins du corps
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-timscare-brown/60">
                  Exfoliation et enveloppement pour retrouver douceur,
                  confort et détente.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* =====================================================
            MASSAGES + RITUELS
            ===================================================== */}

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {/* MASSAGES */}

          <Link
            href="/prestations/massages"
            className="
              group relative min-h-[300px]
              overflow-hidden rounded-[2rem]
              bg-[#fffaf5]
              p-7
              text-timscare-brown
              transition-transform duration-500
              hover:-translate-y-1
              md:p-9
            "
          >
            <div className="absolute -right-10 -top-16 aspect-square w-56 rounded-full border border-timscare-brown/[0.06]" />

            <div className="absolute -right-16 -top-8 aspect-square w-40 rounded-full bg-timscare-beige/35" />

            <div className="relative flex h-full min-h-[245px] flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.34em] text-timscare-terracotta">
                  04 · Massages
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-timscare-brown/10 transition duration-300 group-hover:rotate-45 group-hover:bg-timscare-brown group-hover:text-timscare-cream">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                  />
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
                  Massages
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-timscare-brown/60">
                  Des instants dédiés au relâchement, à la détente et au
                  bien-être du corps.
                </p>
              </div>
            </div>
          </Link>

          {/* RITUELS */}

          <Link
            href="/prestations/rituels"
            className="
              group relative min-h-[300px]
              overflow-hidden rounded-[2rem]
              bg-timscare-brown
              p-7
              text-timscare-cream
              transition-transform duration-500
              hover:-translate-y-1
              md:p-9
            "
          >
            <div className="absolute -bottom-24 -right-14 aspect-square w-72 rounded-full border border-timscare-cream/[0.08]" />

            <div className="relative flex h-full min-h-[245px] flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.34em] text-timscare-beige/60">
                  05 · Rituels
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-timscare-cream/15 transition duration-300 group-hover:rotate-45 group-hover:bg-timscare-cream group-hover:text-timscare-brown">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                  />
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-medium tracking-tight md:text-4xl">
                  Rituels bien-être
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-timscare-beige/60">
                  Des expériences complètes associant plusieurs soins pour
                  créer un véritable moment pour soi.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* =====================================================
            CTA VERS TOUTES LES CATÉGORIES
            ===================================================== */}

        <div className="mt-12 flex flex-col gap-5 border-t border-timscare-brown/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-6 text-timscare-brown/55">
            Vous souhaitez découvrir tous les univers Timscare ? Retrouvez
            l&apos;ensemble des catégories sur la page dédiée.
          </p>

          <Link
            href="/prestations"
            className="
              inline-flex min-h-12
              items-center justify-center gap-3
              rounded-full
              bg-timscare-brown
              px-7
              text-sm font-medium
              text-timscare-cream
              transition
              hover:opacity-90
            "
          >
            Voir toutes les prestations

            <ArrowUpRight
              size={16}
              strokeWidth={1.6}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}