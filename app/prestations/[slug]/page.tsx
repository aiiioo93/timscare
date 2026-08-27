import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { notFound } from "next/navigation";

import { BackToTopButton } from "@/components/presentation/back-to-top-button";
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

  const categoryServices = services.filter(
    (item) =>
      item.categoryId === service.categoryId,
  );

  const serviceIndex =
    categoryServices.findIndex(
      (item) => item.slug === service.slug,
    ) + 1;

  const serviceNumber = String(
    serviceIndex,
  ).padStart(2, "0");

  return (
    <>
      <SiteHeader />

      <main className="overflow-x-clip bg-timscare-cream">
        {/* =====================================================
            HERO
            Toujours entièrement visible au chargement
            ===================================================== */}

        <section
          id="hero"
          className="
            relative
            h-[100dvh]
            overflow-hidden
            bg-timscare-cream
          "
        >
          {/* GRAND NUMÉRO DÉCORATIF */}

          <span
            className="
              pointer-events-none
              absolute
              -right-[8%]
              top-[13%]

              text-[9rem]
              font-medium
              leading-none
              tracking-[-0.1em]

              text-timscare-brown/[0.025]

              sm:text-[13rem]

              lg:right-[2%]
              lg:top-[8%]
              lg:text-[21rem]
            "
          >
            {serviceNumber}
          </span>

          {/* CERCLE DÉCORATIF */}

          <div
            className="
              pointer-events-none
              absolute

              -left-[48%]
              bottom-[-30%]

              aspect-square
              w-[95%]

              rounded-full

              border
              border-timscare-brown/[0.04]

              sm:w-[70%]

              lg:-bottom-[42%]
              lg:-left-[16%]
              lg:w-[42%]
            "
          />

          {/* ===================================================
              COMPOSITION HERO
              =================================================== */}

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

              md:px-8
              md:pb-8

              lg:grid
              lg:grid-cols-[0.88fr_1.12fr]
              lg:items-center
              lg:gap-16
              lg:pt-28
            "
          >
            {/* =================================================
                TEXTE
                ================================================= */}

            <div
              className="
                relative
                z-20
                shrink-0

                lg:pr-4
              "
            >
              {/* RETOUR */}

              <Link
                href={`/prestations/${service.categoryId}`}
                className="
                  inline-flex
                  items-center
                  gap-2

                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.18em]

                  text-timscare-brown/45

                  transition-colors

                  hover:text-timscare-terracotta

                  sm:text-[10px]
                "
              >
                <ArrowLeft
                  size={13}
                  strokeWidth={1.5}
                />

                Retour à {service.categoryTitle}
              </Link>

              {/* LABEL */}

              <div
                className="
                  mt-5

                  flex
                  items-center
                  gap-3

                  sm:mt-6
                "
              >
                <span
                  className="
                    flex
                    h-8
                    w-8

                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-timscare-terracotta

                    text-timscare-cream
                  "
                >
                  <Sparkles
                    size={12}
                    strokeWidth={1.5}
                  />
                </span>

                <div>
                  <p
                    className="
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[0.28em]

                      text-timscare-terracotta

                      sm:text-[9px]
                    "
                  >
                    {service.categoryTitle} · Soin{" "}
                    {serviceNumber}
                  </p>

                  <div
                    className="
                      mt-2
                      h-px
                      w-9

                      bg-timscare-terracotta/35
                    "
                  />
                </div>
              </div>

              {/* TITRE */}

              <h1
                className="
                  mt-4

                  max-w-[22rem]

                  text-[clamp(2.5rem,11vw,3.9rem)]

                  font-medium

                  leading-[0.9]

                  tracking-[-0.055em]

                  text-timscare-brown

                  sm:mt-5
                  sm:max-w-xl
                  sm:text-[clamp(3.4rem,8vw,5rem)]

                  lg:max-w-2xl
                  lg:text-[clamp(4.3rem,5.7vw,6.4rem)]
                  lg:leading-[0.9]
                "
              >
                {service.name}
              </h1>

              {/* DESCRIPTION COURTE */}

              <p
                className="
                  mt-4
                  max-w-lg

                  text-[12px]
                  leading-5

                  text-timscare-brown/55

                  sm:mt-5
                  sm:text-sm
                  sm:leading-6

                  lg:text-base
                  lg:leading-7
                "
              >
                {service.description}
              </p>

              {/* TARIF / DURÉE */}

              <div
                className="
                  mt-5

                  flex
                  max-w-lg
                  items-center

                  gap-6

                  border-t
                  border-timscare-brown/10

                  pt-4

                  sm:mt-6
                  sm:gap-8
                  sm:pt-5
                "
              >
                <div>
                  <p
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.24em]

                      text-timscare-brown/35
                    "
                  >
                    Tarif
                  </p>

                  <p
                    className="
                      mt-1

                      text-xl

                      font-medium

                      tracking-[-0.04em]

                      text-timscare-brown

                      sm:text-2xl
                    "
                  >
                    {service.price}
                  </p>
                </div>

                {service.duration && (
                  <div
                    className="
                      border-l
                      border-timscare-brown/10

                      pl-6

                      sm:pl-8
                    "
                  >
                    <p
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.24em]

                        text-timscare-brown/35
                      "
                    >
                      Durée
                    </p>

                    <p
                      className="
                        mt-1

                        text-sm

                        font-medium

                        text-timscare-brown

                        sm:text-base
                      "
                    >
                      {service.duration}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* =================================================
                IMAGE

                Sur smartphone :
                elle prend uniquement l'espace restant.
                Elle ne peut donc pas allonger le Hero.
                ================================================= */}

            <div
              className="
                relative
                z-10

                mt-5

                min-h-0
                flex-1

                sm:mt-6

                lg:mt-0
                lg:h-[min(69dvh,680px)]
                lg:min-h-[430px]
                lg:flex-none
              "
            >
              <div
                className="
                  relative

                  h-full
                  min-h-[170px]
                  w-full

                  overflow-hidden

                  rounded-[1.8rem_1.8rem_3.8rem_1.8rem]

                  bg-timscare-beige

                  shadow-[0_26px_70px_rgba(72,36,18,0.12)]

                  sm:min-h-[220px]
                  sm:rounded-[2.2rem_2.2rem_5rem_2.2rem]

                  lg:rounded-[2.75rem_2.75rem_7rem_2.75rem]
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
                  <div
                    className="
                      absolute inset-0

                      bg-[radial-gradient(circle_at_68%_28%,#fffaf5_0%,#f2d7b8_28%,rgba(175,86,30,.82)_62%,#482412_105%)]
                    "
                  />
                )}

                {/* LUMIÈRE */}

                <div
                  className="
                    pointer-events-none

                    absolute

                    right-[8%]
                    top-[8%]

                    h-[34%]
                    w-[36%]

                    rounded-full

                    bg-white/20

                    blur-3xl
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    pointer-events-none

                    absolute inset-0

                    bg-gradient-to-t

                    from-timscare-brown/22
                    via-transparent
                    to-white/5
                  "
                />

                {/* CONTOUR INTÉRIEUR */}

                <div
                  className="
                    pointer-events-none

                    absolute inset-3

                    rounded-[1.35rem_1.35rem_3.25rem_1.35rem]

                    border
                    border-white/20

                    sm:inset-4
                    sm:rounded-[1.8rem_1.8rem_4.25rem_1.8rem]

                    lg:inset-5
                    lg:rounded-[2.25rem_2.25rem_6rem_2.25rem]
                  "
                />

                {/* PETIT LABEL */}

                <div
                  className="
                    absolute

                    bottom-4
                    left-4

                    z-10

                    rounded-full

                    border
                    border-white/20

                    bg-timscare-brown/30

                    px-3
                    py-2

                    backdrop-blur-md

                    sm:bottom-5
                    sm:left-5
                    sm:px-4
                  "
                >
                  <p
                    className="
                      text-[7px]
                      font-medium
                      uppercase
                      tracking-[0.26em]

                      text-timscare-cream/80
                    "
                  >
                    Timscare Institut
                  </p>
                </div>
              </div>

              {/* LIGNE TERRACOTTA */}

              <div
                className="
                  pointer-events-none

                  absolute

                  -left-3
                  top-[16%]

                  z-20

                  h-[30%]
                  w-px

                  bg-timscare-terracotta/60

                  sm:-left-5

                  lg:-left-8
                "
              />

              {/* POINT */}

              <span
                className="
                  pointer-events-none

                  absolute

                  -left-[15px]
                  top-[16%]

                  z-20

                  h-1.5
                  w-1.5

                  rounded-full

                  bg-timscare-terracotta

                  sm:-left-[23px]

                  lg:-left-[35px]
                "
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            À PROPOS
            ===================================================== */}

        <section className="bg-[#fffaf5]">
          <div
            className="
              mx-auto

              grid
              max-w-7xl
              gap-10

              px-5
              py-20

              sm:px-6

              md:px-8
              md:py-28

              lg:grid-cols-[0.72fr_1.28fr]
              lg:gap-24
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]

                  text-timscare-terracotta
                "
              >
                À propos du soin
              </p>

              <h2
                className="
                  mt-4

                  max-w-md

                  text-4xl

                  font-medium

                  leading-[0.98]

                  tracking-[-0.045em]

                  text-timscare-brown

                  sm:text-5xl

                  lg:text-6xl
                "
              >
                Une attention pensée pour votre peau.
              </h2>
            </div>

            <div
              className="
                flex
                items-center

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

                  text-lg
                  leading-8

                  text-timscare-brown/70

                  sm:text-xl
                  sm:leading-9
                "
              >
                {service.longDescription ??
                  service.description}
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            DÉTAILS DU SOIN
            ===================================================== */}

        {service.details &&
          service.details.length > 0 && (
            <section
              className="
                overflow-hidden
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
                {/* TITRE */}

                <div className="max-w-2xl">
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.3em]

                      text-timscare-terracotta
                    "
                  >
                    Le soin
                  </p>

                  <h2
                    className="
                      mt-4

                      text-4xl

                      font-medium

                      leading-[1]

                      tracking-[-0.045em]

                      text-timscare-brown

                      sm:text-5xl
                    "
                  >
                    Ce soin comprend.
                  </h2>
                </div>

                {/* LISTE */}

                <div
                  className="
                    mt-14
                    space-y-3

                    sm:mt-16

                    lg:mt-20
                    lg:space-y-5
                  "
                >
                  {service.details.map(
                    (detail, index) => {
                      const number = String(
                        index + 1,
                      ).padStart(2, "0");

                      const alignRight =
                        index % 2 === 1;

                      return (
                        <div
                          key={`${detail}-${index}`}
                          className={`
                            relative

                            overflow-hidden

                            border-b
                            border-timscare-brown/10

                            py-7

                            sm:py-9

                            lg:min-h-[150px]

                            ${
                              alignRight
                                ? "lg:ml-[22%]"
                                : "lg:mr-[22%]"
                            }
                          `}
                        >
                          {/* GRAND NUMÉRO */}

                          <span
                            className="
                              pointer-events-none

                              absolute

                              -bottom-5
                              left-0

                              text-[6rem]

                              font-medium

                              leading-none

                              tracking-[-0.08em]

                              text-timscare-brown/[0.035]

                              sm:text-[8rem]

                              lg:text-[10rem]
                            "
                          >
                            {number}
                          </span>

                          {/* CONTENU */}

                          <div
                            className="
                              relative
                              z-10

                              flex

                              items-start
                              gap-5
                            "
                          >
                            <span
                              className="
                                mt-1

                                shrink-0

                                text-[9px]
                                font-medium

                                tracking-[0.25em]

                                text-timscare-terracotta
                              "
                            >
                              {number}
                            </span>

                            <div className="flex-1">
                              <p
                                className="
                                  max-w-xl

                                  text-xl

                                  font-medium

                                  leading-tight

                                  tracking-[-0.03em]

                                  text-timscare-brown

                                  sm:text-2xl

                                  lg:text-3xl
                                "
                              >
                                {detail}
                              </p>

                              <div
                                className="
                                  mt-5

                                  h-px
                                  w-12

                                  bg-timscare-terracotta/50
                                "
                              />
                            </div>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </section>
          )}

        {/* =====================================================
            RESPIRATION TIMSCARE
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

              -right-[45%]
              top-1/2

              aspect-square
              w-[95%]

              -translate-y-1/2

              rounded-full

              border
              border-timscare-beige/10

              sm:w-[65%]

              lg:-right-[15%]
              lg:w-[42%]
            "
          />

          <div
            className="
              relative

              mx-auto
              max-w-7xl

              px-5
              py-20

              sm:px-6

              md:px-8
              md:py-28
            "
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.35em]

                text-timscare-beige/50
              "
            >
              Timscare
            </p>

            <p
              className="
                mt-7

                max-w-4xl

                text-[clamp(2.5rem,11vw,4rem)]

                font-medium

                leading-[0.98]

                tracking-[-0.05em]

                sm:text-5xl

                lg:text-6xl
              "
            >
              Prendre le temps.
              <br />

              Écouter votre peau.
              <br />

              <span className="text-timscare-beige/45">
                Révéler son éclat.
              </span>
            </p>
          </div>
        </section>

        {/* =====================================================
            CTA FINAL
            UN SEUL BOUTON RENDEZ-VOUS
            ===================================================== */}

        <section className="bg-[#fffaf5]">
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

                border
                border-timscare-brown/10

                bg-timscare-cream

                p-7

                sm:p-10

                md:rounded-[2.75rem]
                md:p-12

                lg:grid
                lg:grid-cols-[1fr_auto]
                lg:items-end
                lg:gap-14
                lg:p-14
              "
            >
              {/* NUMÉRO */}

              <span
                className="
                  pointer-events-none

                  absolute

                  -right-3
                  -top-8

                  text-[9rem]

                  font-medium

                  leading-none

                  tracking-[-0.08em]

                  text-timscare-brown/[0.025]

                  sm:text-[12rem]
                "
              >
                {serviceNumber}
              </span>

              {/* CONTENU */}

              <div
                className="
                  relative
                  z-10
                "
              >
                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]

                    text-timscare-terracotta
                  "
                >
                  Votre moment
                </p>

                <h2
                  className="
                    mt-4

                    max-w-2xl

                    text-4xl

                    font-medium

                    leading-[0.98]

                    tracking-[-0.05em]

                    text-timscare-brown

                    sm:text-5xl

                    lg:text-6xl
                  "
                >
                  {service.name}
                </h2>

                <div
                  className="
                    mt-8

                    flex
                    items-end
                    gap-3
                  "
                >
                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]

                      text-timscare-brown/35
                    "
                  >
                    Tarif
                  </span>

                  <span
                    className="
                      text-2xl

                      font-medium

                      leading-none

                      tracking-[-0.04em]

                      text-timscare-brown

                      sm:text-3xl
                    "
                  >
                    {service.price}
                  </span>
                </div>
              </div>

              {/* =================================================
                  UNIQUE CTA
                  ================================================= */}

              <div
                className="
                  relative
                  z-10

                  mt-10

                  lg:mt-0
                "
              >
                <button
                  type="button"
                  className="
                    group

                    inline-flex

                    min-h-14
                    w-full

                    items-center
                    justify-center

                    gap-4

                    rounded-full

                    bg-timscare-terracotta

                    px-7

                    text-sm
                    font-medium

                    text-timscare-cream

                    shadow-[0_15px_40px_rgba(175,86,30,0.18)]

                    transition-all
                    duration-300

                    hover:-translate-y-1

                    hover:shadow-[0_20px_50px_rgba(175,86,30,0.25)]

                    sm:w-auto
                    sm:min-w-[230px]
                  "
                >
                  Prendre rendez-vous

                  <ArrowRight
                    size={16}
                    strokeWidth={1.6}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-1
                    "
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BackToTopButton />
    </>
  );
}