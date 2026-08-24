import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Grid2X2,
} from "lucide-react";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import {
  categories,
  type Service,
} from "@/data/services";

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
        group relative block
        overflow-hidden
        rounded-[1.8rem]
        border border-timscare-brown/10
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
            absolute left-5 top-5
            z-10
            text-[9px]
            tracking-[0.3em]
            text-timscare-terracotta

            sm:left-7 sm:top-7
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* IMAGE */}
        <div
          className="
            pointer-events-none
            absolute -right-[8%] top-1/2
            h-[170%] w-[48%]
            -translate-y-1/2

            sm:w-[44%]

            md:-right-[6%] md:w-[40%]
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
                transition-transform duration-1000
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
            absolute right-[21%] top-1/2
            h-[130%] w-[24%]
            -translate-y-1/2
            rounded-full
            bg-timscare-beige/30
            blur-3xl
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative z-10
            flex min-h-[190px]
            w-[74%]
            flex-col justify-end
            px-5 pb-5 pt-14

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
              text-xl font-medium
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
              mt-3 max-w-lg
              text-[12px] leading-5
              text-timscare-brown/55

              sm:text-sm sm:leading-6
            "
          >
            {service.description}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <span
              className="
                rounded-full
                bg-timscare-brown
                px-4 py-2
                text-[11px] font-medium
                text-timscare-cream
              "
            >
              {service.price}
            </span>

            <span
              className="
                inline-flex items-center gap-1.5
                text-[10px] font-medium
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

export function CategoryDetailPage({
  categoryId,
}: {
  categoryId: string;
}) {
  const categoryIndex = categories.findIndex(
    (category) => category.id === categoryId,
  );

  if (categoryIndex === -1) {
    notFound();
  }

  const category = categories[categoryIndex];

  const previous =
    categories[
      (categoryIndex - 1 + categories.length) %
        categories.length
    ];

  const next =
    categories[
      (categoryIndex + 1) % categories.length
    ];

  return (
    <>
      <SiteHeader />

      <main className="overflow-x-clip bg-timscare-cream">
        {/* =====================================================
            HERO CATÉGORIE
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
          {/* GRAND NUMÉRO */}
          <span
            className="
              pointer-events-none
              absolute -right-[8%] top-[18%]
              text-[13rem] font-medium
              leading-none
              tracking-[-0.1em]
              text-timscare-brown/[0.035]

              sm:text-[18rem]

              lg:right-[3%]
              lg:text-[28rem]
            "
          >
            {category.number}
          </span>

          {/* CERCLE */}
          <div
            className="
              pointer-events-none
              absolute -right-[40%] top-[8%]
              aspect-square w-[100%]
              rounded-full
              bg-timscare-beige/50

              sm:-right-[25%] sm:w-[70%]

              lg:-right-[10%] lg:w-[45%]
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
            "
          >
            <Link
              href="/prestations"
              className="
                absolute left-5 top-7
                inline-flex items-center gap-2
                text-[10px] font-medium
                text-timscare-brown/50

                sm:left-6

                md:left-8
              "
            >
              <ArrowLeft
                size={13}
                strokeWidth={1.5}
              />

              Toutes les catégories
            </Link>

            <div
              className="
                relative z-10
                grid gap-7

                lg:grid-cols-[1fr_.75fr]
                lg:items-end
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    uppercase tracking-[0.32em]
                    text-timscare-terracotta
                  "
                >
                  Univers {category.number}
                </p>

                <h1
                  className="
                    mt-5
                    max-w-4xl
                    text-[clamp(3.3rem,16vw,5.8rem)]
                    font-medium
                    leading-[0.88]
                    tracking-[-0.055em]
                    text-timscare-brown

                    lg:text-[clamp(5rem,8vw,8rem)]
                  "
                >
                  {category.title}
                </h1>
              </div>

              <div>
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-timscare-brown/10
                    bg-[#fffaf5]/70
                    px-4 py-2
                    backdrop-blur-sm
                  "
                >
                  <span
                    className="
                      h-1.5 w-1.5
                      rounded-full
                      bg-timscare-terracotta
                    "
                  />

                  <span
                    className="
                      text-[10px] font-medium
                      text-timscare-brown/55
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
                    mt-5 max-w-lg
                    text-sm leading-6
                    text-timscare-brown/60

                    sm:text-base sm:leading-7

                    lg:text-lg lg:leading-8
                  "
                >
                  {category.intro}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SOINS
            ===================================================== */}

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
                mb-10
                flex items-end
                justify-between gap-5

                md:mb-14
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    uppercase tracking-[0.3em]
                    text-timscare-terracotta
                  "
                >
                  Les soins
                </p>

                <h2
                  className="
                    mt-3
                    text-3xl font-medium
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
                  hidden h-12 w-12
                  items-center justify-center
                  rounded-full
                  border border-timscare-brown/10
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
              mx-auto max-w-7xl
              px-5 py-16

              sm:px-6

              md:px-8 md:py-20
            "
          >
            <div className="text-center">
              <Link
                href="/prestations"
                className="
                  inline-flex items-center gap-2
                  text-[10px] font-medium
                  uppercase tracking-[0.22em]
                  text-timscare-brown/50
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
                mt-8 grid grid-cols-2 gap-2

                sm:gap-4
              "
            >
              {/* PRÉCÉDENT */}
              <Link
                href={`/prestations/${previous.id}`}
                className="
                  group
                  flex min-h-[140px]
                  flex-col justify-between
                  rounded-[1.75rem]
                  bg-timscare-cream
                  p-5

                  sm:min-h-[170px]
                  sm:p-6
                "
              >
                <span
                  className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    border border-timscare-brown/10
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
                      uppercase tracking-[0.25em]
                      text-timscare-brown/35
                    "
                  >
                    Précédent
                  </p>

                  <p
                    className="
                      mt-2 text-lg font-medium
                      leading-none tracking-[-0.035em]
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
                  flex min-h-[140px]
                  flex-col items-end
                  justify-between
                  rounded-[1.75rem]
                  bg-timscare-brown
                  p-5
                  text-right
                  text-timscare-cream

                  sm:min-h-[170px]
                  sm:p-6
                "
              >
                <span
                  className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    border border-timscare-cream/15
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
                      uppercase tracking-[0.25em]
                      text-timscare-beige/40
                    "
                  >
                    Suivant
                  </p>

                  <p
                    className="
                      mt-2 text-lg font-medium
                      leading-none tracking-[-0.035em]

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
    </>
  );
}