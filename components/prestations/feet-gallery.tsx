import Image from "next/image";

import { timscareVisuals } from "@/data/timscare-visuals";

export function FeetGallery() {
  const images = timscareVisuals.categories.pieds.gallery;

  return (
    <section id="univers-pieds" className="scroll-mt-0 overflow-hidden bg-[#fffaf5]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.32em] text-timscare-terracotta">L&apos;expérience pieds</p>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.045em] text-timscare-brown sm:text-5xl lg:text-6xl">Le soin jusque<br />dans les détails.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-timscare-brown/60 sm:text-base sm:leading-8 lg:ml-auto">Des gestes attentifs et une expérience consacrée au soin et à la beauté des pieds.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-16 lg:grid-cols-12">
          {images.map((image, index) => (
            <figure key={image.src} className={`relative overflow-hidden bg-timscare-beige shadow-[0_20px_55px_rgba(72,36,18,0.08)] ${index === 0 ? "col-span-2 aspect-[5/4] rounded-[2rem_2rem_5rem_2rem] lg:col-span-7 lg:row-span-2 lg:aspect-[5/6] lg:rounded-[2.75rem_2.75rem_7rem_2.75rem]" : index === 3 ? "col-span-2 aspect-[16/9] rounded-[1.5rem_3.5rem_1.5rem_1.5rem] lg:col-span-5 lg:aspect-auto lg:min-h-[230px] lg:rounded-[2rem_4.5rem_2rem_2rem]" : "aspect-[3/4] rounded-[1.5rem] lg:col-span-5 lg:aspect-auto lg:min-h-[230px] lg:rounded-[2rem]"}`}>
              <Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 1024px) 50vw, 42vw"} className="object-cover object-center" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-timscare-brown/15 via-transparent to-transparent" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
