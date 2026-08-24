import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[100dvh] overflow-hidden bg-timscare-cream pt-20 md:pt-24">
      {/* Formes décoratives */}
      <div className="absolute -right-40 -top-32 h-[550px] w-[550px] rounded-full bg-timscare-beige/60" />

      <div className="absolute -bottom-56 -left-44 h-[500px] w-[500px] rounded-full bg-timscare-beige/40" />

      <div
        className="
          relative mx-auto flex h-full w-full max-w-7xl
          flex-col justify-center px-5 pb-4
          sm:px-6
          md:grid md:grid-cols-[1.08fr_.92fr] md:items-center md:gap-8 md:px-8 md:py-4
          lg:grid-cols-2 lg:gap-12
        "
      >
        {/* Texte */}
        <div className="relative z-10 max-w-2xl">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-timscare-terracotta sm:text-xs md:mb-4 md:text-sm">
            Institut de beauté · Bagnolet
          </p>

          <h1
            className="
              max-w-xl font-medium leading-[1.03] tracking-tight
              text-timscare-brown
              text-[clamp(2.35rem,10vw,3.5rem)]
              md:text-5xl
              lg:text-[clamp(3rem,4.5vw,4.5rem)]
            "
          >
            Révélez l&apos;éclat naturel de votre peau.
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-timscare-brown/70 sm:text-base md:mt-5 md:text-base md:leading-7 lg:text-lg lg:leading-8">
            Des soins du visage, du corps et des rituels bien-être pensés
            pour prendre soin de votre peau avec douceur, expertise et
            attention.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2 sm:flex sm:gap-3 md:mt-6 lg:mt-7">
            <Link
              href="#prestations"
              className="
                inline-flex min-h-12 items-center justify-center
                rounded-full bg-timscare-terracotta px-4
                text-center text-xs font-medium text-timscare-cream
                transition hover:opacity-90
                sm:px-6 sm:text-sm
              "
            >
              Découvrir les soins
            </Link>

            <Link
              href="#contact"
              className="
                inline-flex min-h-12 items-center justify-center
                rounded-full border border-timscare-brown/20 px-4
                text-center text-xs font-medium text-timscare-brown
                transition hover:bg-timscare-beige/40
                sm:px-6 sm:text-sm
              "
            >
              <span className="sm:hidden">Contacter</span>
              <span className="hidden sm:inline">Contacter Timscare</span>
            </Link>
          </div>
        </div>

        {/* Partie visuelle */}
        <div
          className="
            relative z-10 mt-4 flex h-[160px] w-full
            items-center justify-center
            sm:h-[180px]
            md:mt-0 md:h-[min(54dvh,460px)]
            lg:h-[min(68dvh,600px)]
          "
        >
          <div
            className="
              relative h-full w-full overflow-hidden
              rounded-[1.75rem] bg-timscare-brown
              md:max-w-[380px] md:rounded-[2.25rem]
              lg:aspect-[4/5] lg:w-auto lg:max-w-none lg:rounded-[2.5rem]
            "
          >
            <div className="absolute inset-3 rounded-[1.4rem] border border-timscare-beige/20 md:inset-4 md:rounded-[1.8rem] lg:inset-5 lg:rounded-[2rem]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-timscare-cream">
              <span className="mb-3 text-[9px] uppercase tracking-[0.4em] text-timscare-beige md:mb-6 md:text-xs">
                Timscare
              </span>

              <p className="max-w-sm text-2xl font-medium leading-tight md:text-3xl lg:text-5xl">
                Prendre soin de votre peau.
              </p>

              <div className="mt-4 h-px w-12 bg-timscare-terracotta md:mt-6 md:w-16 lg:mt-10" />

              <p className="mt-3 max-w-xs text-[10px] leading-5 text-timscare-beige/80 md:mt-5 md:text-xs lg:mt-7 lg:text-sm">
                Visage · Corps · Peelings · Massages · Rituels
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}