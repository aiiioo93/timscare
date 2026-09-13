import Image from "next/image";

import { timscareVisuals } from "@/data/timscare-visuals";

export function TimscareEditorialGallery() {
  const images = timscareVisuals.timscare.gallery;

  return (
    <section className="overflow-hidden bg-[#fffaf5]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.32em] text-timscare-terracotta">
              Dans l&apos;institut
            </p>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.045em] text-timscare-brown sm:text-5xl lg:text-6xl">
              Des gestes précis,
              <br />
              une attention
              <br />
              à chaque détail.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-timscare-brown/60 sm:text-base sm:leading-8 lg:ml-auto">
            De la préparation aux technologies de l&apos;institut, découvrez
            quelques fragments de l&apos;univers Timscare.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-16 lg:grid-cols-12">
          <figure className="relative col-span-2 aspect-[4/5] overflow-hidden rounded-[2rem_2rem_5rem_2rem] bg-timscare-beige shadow-[0_25px_70px_rgba(72,36,18,0.10)] sm:aspect-[5/4] lg:col-span-7 lg:row-span-2 lg:aspect-[5/6] lg:rounded-[2.75rem_2.75rem_7rem_2.75rem]">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-timscare-brown/25 via-transparent to-transparent" />
            <figcaption className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-timscare-brown/35 px-4 py-2 text-[8px] uppercase tracking-[0.28em] text-white backdrop-blur-md">
              Les gestes
            </figcaption>
          </figure>

          {images.slice(1).map((image, index) => (
            <figure
              key={image.src}
              className={`relative aspect-[3/4] overflow-hidden bg-timscare-beige lg:col-span-5 lg:aspect-auto lg:min-h-[280px] ${
                index === 0
                  ? "rounded-[1.5rem_1.5rem_3.5rem_1.5rem] lg:rounded-[2rem_2rem_4.5rem_2rem]"
                  : "rounded-[1.5rem_3.5rem_1.5rem_1.5rem] lg:rounded-[2rem_4.5rem_2rem_2rem]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 42vw"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-timscare-brown/15 via-transparent to-transparent" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
