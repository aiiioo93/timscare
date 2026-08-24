import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import {
  getServiceBySlug,
  services,
} from "@/data/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Soin introuvable",
    };
  }

  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SiteHeader />

      <main className="overflow-x-clip bg-timscare-cream">
        {/* =====================================================
            HERO DU SOIN
            ===================================================== */}

        <section
          className="
            relative flex min-h-[100dvh]
            items-center overflow-hidden
            bg-timscare-cream
            px-5 pb-10 pt-24

            sm:px-6

            md:px-8 md:pb-12

            lg:pt-28
          "
        >
          {/* DÉCORS */}
          <div
            className="
              pointer-events-none absolute
              -right-[45%] -top-[15%]
              aspect-square w-[100%]
              rounded-full
              bg-timscare-beige/45

              sm:-right-[30%] sm:w-[75%]

              lg:-right-[15%] lg:w-[48%]
            "
          />

          <div
            className="
              pointer-events-none absolute
              -bottom-[30%] -left-[45%]
              aspect-square w-[90%]
              rounded-full
              bg-timscare-beige/25

              lg:w-[48%]
            "
          />

          <div
            className="
              relative mx-auto grid
              w-full max-w-7xl
              gap-8

              lg:grid-cols-[0.9fr_1.1fr]
              lg:items-center
              lg:gap-14
            "
          >
            {/* =================================================
                CONTENU
                ================================================= */}

            <div className="relative z-10">
              <Link
                href={`/prestations/${service.categoryId}`}
                className="
                  inline-flex items-center gap-2
                  text-[11px] font-medium
                  text-timscare-brown/60
                  transition
                  hover:text-timscare-terracotta
                "
              >
                <ArrowLeft
                  size={14}
                  strokeWidth={1.5}
                />

                Retour à {service.categoryTitle}
              </Link>

              <p
                className="
                  mt-8
                  text-[10px] font-medium
                  uppercase tracking-[0.32em]
                  text-timscare-terracotta

                  sm:text-xs
                "
              >
                {service.categoryTitle}
              </p>

              <h1
                className="
                  mt-4 max-w-2xl
                  text-[clamp(2.6rem,12vw,4.2rem)]
                  font-medium
                  leading-[0.98]
                  tracking-tight
                  text-timscare-brown

                  lg:text-[clamp(3.5rem,5vw,5.2rem)]
                "
              >
                {service.name}
              </h1>

              <p
                className="
                  mt-5 max-w-xl
                  text-sm leading-6
                  text-timscare-brown/65

                  sm:text-base sm:leading-7

                  lg:text-lg lg:leading-8
                "
              >
                {service.longDescription ??
                  service.description}
              </p>

              {/* MÉTADONNÉES */}
              <div
                className="
                  mt-7 grid max-w-xl
                  grid-cols-2 gap-2

                  sm:gap-3
                "
              >
                {/* PRIX */}
                <div
                  className="
                    rounded-[1.4rem]
                    border border-timscare-brown/10
                    bg-[#fffaf5]
                    p-4

                    sm:p-5
                  "
                >
                  <p
                    className="
                      text-[9px] uppercase
                      tracking-[0.25em]
                      text-timscare-brown/45
                    "
                  >
                    Tarif
                  </p>

                  <p
                    className="
                      mt-2 text-xl
                      font-medium
                      text-timscare-brown

                      sm:text-2xl
                    "
                  >
                    {service.price}
                  </p>
                </div>

                {/* CATÉGORIE */}
                <div
                  className="
                    rounded-[1.4rem]
                    border border-timscare-brown/10
                    bg-[#fffaf5]
                    p-4

                    sm:p-5
                  "
                >
                  <p
                    className="
                      text-[9px] uppercase
                      tracking-[0.25em]
                      text-timscare-brown/45
                    "
                  >
                    Catégorie
                  </p>

                  <p
                    className="
                      mt-2 text-sm
                      font-medium
                      leading-tight
                      text-timscare-brown

                      sm:text-base
                    "
                  >
                    {service.categoryTitle}
                  </p>
                </div>

                {/* DURÉE — apparaît uniquement quand elle existe */}
                {service.duration && (
                  <div
                    className="
                      col-span-2
                      rounded-[1.4rem]
                      border border-timscare-brown/10
                      bg-[#fffaf5]
                      p-4

                      sm:p-5
                    "
                  >
                    <p
                      className="
                        text-[9px] uppercase
                        tracking-[0.25em]
                        text-timscare-brown/45
                      "
                    >
                      Durée
                    </p>

                    <p className="mt-2 font-medium text-timscare-brown">
                      {service.duration}
                    </p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <button
                type="button"
                className="
                  mt-6 inline-flex
                  min-h-14 items-center
                  justify-center gap-3
                  rounded-full
                  bg-timscare-terracotta
                  px-7
                  text-sm font-medium
                  text-timscare-cream
                  shadow-[0_12px_35px_rgba(175,86,30,0.18)]
                  transition

                  hover:-translate-y-0.5
                  hover:opacity-90
                "
              >
                Réserver ce soin

                <ArrowRight
                  size={16}
                  strokeWidth={1.6}
                />
              </button>
            </div>

            {/* =================================================
                IMAGE PRINCIPALE
                ================================================= */}

            <div
              className="
                relative z-10
                mx-auto
                h-[34dvh]
                min-h-[240px]
                w-full
                max-w-[620px]
                overflow-hidden
                rounded-[2rem]

                sm:h-[40dvh]
                sm:min-h-[300px]

                lg:h-[min(68dvh,650px)]
                lg:min-h-[520px]
                lg:rounded-[2.75rem]
              "
            >
              {service.image ? (
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  priority
                  sizes="
                    (max-width: 1024px) 100vw,
                    55vw
                  "
                  className="object-cover"
                />
              ) : (
                /* PLACEHOLDER EN ATTENDANT LES PHOTOS */
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      radial-gradient(
                        circle at 68% 30%,
                        #fffaf5 0%,
                        #f2d7b8 28%,
                        rgba(175,86,30,0.82) 62%,
                        #482412 100%
                      )
                    `,
                  }}
                />
              )}

              {/* LUMIÈRE */}
              <div
                className="
                  pointer-events-none absolute
                  right-[10%] top-[10%]
                  h-[35%] w-[38%]
                  rounded-full
                  bg-white/20
                  blur-3xl
                "
              />

              {/* CONTOUR INTERNE */}
              <div
                className="
                  pointer-events-none absolute
                  inset-3 rounded-[1.5rem]
                  border border-white/20

                  sm:inset-4

                  lg:inset-5
                  lg:rounded-[2.2rem]
                "
              />

              {/* NOM SUR IMAGE */}
              <div
                className="
                  absolute inset-x-0 bottom-0
                  bg-gradient-to-t
                  from-timscare-brown/65
                  via-timscare-brown/20
                  to-transparent
                  px-6 pb-6 pt-20
                  text-timscare-cream

                  sm:px-8 sm:pb-8
                "
              >
                <p
                  className="
                    text-[9px] uppercase
                    tracking-[0.32em]
                    text-timscare-beige/80
                  "
                >
                  Timscare Institut
                </p>

                <p
                  className="
                    mt-2 text-xl
                    font-medium

                    sm:text-2xl
                  "
                >
                  {service.name}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DÉTAILS
            ===================================================== */}

        {service.details &&
          service.details.length > 0 && (
            <section className="bg-[#fffaf5]">
              <div
                className="
                  mx-auto max-w-7xl
                  px-5 py-16

                  sm:px-6

                  md:px-8 md:py-24
                "
              >
                <div
                  className="
                    grid gap-10

                    lg:grid-cols-[0.8fr_1.2fr]
                    lg:gap-20
                  "
                >
                  <div>
                    <p
                      className="
                        text-[10px] uppercase
                        tracking-[0.3em]
                        text-timscare-terracotta
                      "
                    >
                      Le soin
                    </p>

                    <h2
                      className="
                        mt-4 max-w-lg
                        text-3xl font-medium
                        leading-[1.04]
                        tracking-tight
                        text-timscare-brown

                        sm:text-4xl

                        md:text-5xl
                      "
                    >
                      Ce soin en quelques mots.
                    </h2>
                  </div>

                  <div className="grid gap-2">
                    {service.details.map(
                      (detail, index) => (
                        <div
                          key={detail}
                          className="
                            flex items-center
                            justify-between gap-5
                            rounded-[1.25rem]
                            border border-timscare-brown/10
                            bg-timscare-cream
                            px-5 py-4

                            sm:px-6 sm:py-5
                          "
                        >
                          <div className="flex items-center gap-4">
                            <span
                              className="
                                text-[9px]
                                tracking-[0.25em]
                                text-timscare-terracotta
                              "
                            >
                              {String(index + 1).padStart(
                                2,
                                "0",
                              )}
                            </span>

                            <p
                              className="
                                text-sm font-medium
                                text-timscare-brown

                                sm:text-base
                              "
                            >
                              {detail}
                            </p>
                          </div>

                          <div
                            className="
                              h-2 w-2 shrink-0
                              rounded-full
                              bg-timscare-terracotta
                            "
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

        {/* =====================================================
            CTA FINAL
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
              -right-[35%] -top-[80%]
              aspect-square w-[90%]
              rounded-full
              border border-timscare-cream/10

              sm:w-[60%]

              lg:w-[40%]
            "
          />

          <div
            className="
              relative mx-auto
              flex max-w-7xl
              flex-col gap-8
              px-5 py-16

              sm:px-6

              md:px-8 md:py-20

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[10px] uppercase
                  tracking-[0.3em]
                  text-timscare-beige/60
                "
              >
                Votre moment
              </p>

              <h2
                className="
                  mt-4 max-w-2xl
                  text-3xl font-medium
                  leading-[1.03]
                  tracking-tight

                  sm:text-4xl

                  md:text-5xl
                "
              >
                Envie de découvrir ce soin ?
              </h2>
            </div>

            <button
              type="button"
              className="
                inline-flex min-h-14
                shrink-0 items-center
                justify-center gap-3
                rounded-full
                bg-timscare-terracotta
                px-7
                text-sm font-medium
                text-timscare-cream
                transition
                hover:opacity-90
              "
            >
              Réserver ce soin

              <ArrowRight
                size={16}
                strokeWidth={1.6}
              />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}