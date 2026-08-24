const serviceCategories = [
  {
    number: "01",
    title: "Soins du visage",
    description:
      "Des soins ciblés pour nettoyer, hydrater, purifier et révéler l’éclat naturel de votre peau.",
    services: [
      ["Soin complet", "55€"],
      ["L’Instant Timscare", "70€"],
      ["Microneedling", "80€"],
      ["Soin Hydro Glow", "90€"],
    ],
  },
  {
    number: "02",
    title: "Peelings",
    description:
      "Des protocoles adaptés aux taches, imperfections, pores dilatés et irrégularités du teint.",
    services: [
      ["Peeling Mandéa · cure", "320€"],
      ["Peeling Azéa · cure", "320€"],
      ["Peeling aux algues visage", "120€"],
      ["Peeling aux algues corps", "dès 160€"],
    ],
  },
  {
    number: "03",
    title: "Soins du corps",
    description:
      "Des instants de détente pour prendre soin du corps et retrouver une sensation de douceur.",
    services: [
      ["Exfoliant gourmand", "85€"],
      ["Évasion enveloppante", "90€"],
    ],
  },
  {
    number: "04",
    title: "Massages",
    description:
      "Des massages relaxants pensés pour relâcher les tensions et vous offrir une véritable pause.",
    services: [
      ["Massage Full Body", "65€"],
      ["Massage dos & nuque", "45€"],
    ],
  },
  {
    number: "05",
    title: "Rituels & beauté",
    description:
      "Des expériences complètes pour associer soins, détente et mise en beauté.",
    services: [
      ["Rituel Bien Être", "130€"],
      ["Soin Renaissance", "210€"],
      ["Rituel Magno", "189€"],
      ["Callus Peel", "50€"],
    ],
  },
];

export function Services() {
  return (
    <section
      id="prestations"
      className="relative overflow-hidden bg-timscare-beige"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-8 md:py-28 lg:py-32">
        {/* INTRO */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-timscare-terracotta">
              Nos prestations
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-timscare-brown sm:text-5xl lg:text-6xl">
              Un soin pensé pour chaque peau.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-base leading-7 text-timscare-brown/70 lg:ml-auto lg:text-lg lg:leading-8">
              Timscare vous accompagne avec une sélection de soins du visage,
              du corps, de peelings, de massages et de rituels adaptés à vos
              besoins.
            </p>
          </div>
        </div>

        {/* LISTE */}
        <div className="mt-16 border-t border-timscare-brown/15 md:mt-20">
          {serviceCategories.map((category) => (
            <article
              key={category.number}
              className="
                grid gap-7 border-b border-timscare-brown/15
                py-9
                md:grid-cols-[90px_1fr]
                md:gap-8 md:py-12
                lg:grid-cols-[100px_0.8fr_1.2fr]
                lg:items-start lg:gap-12
              "
            >
              {/* NUMÉRO */}
              <span className="text-xs tracking-[0.25em] text-timscare-terracotta">
                {category.number}
              </span>

              {/* TITRE */}
              <div>
                <h3 className="text-2xl font-medium tracking-tight text-timscare-brown md:text-3xl lg:text-4xl">
                  {category.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-timscare-brown/65 md:text-base md:leading-7">
                  {category.description}
                </p>
              </div>

              {/* PRESTATIONS */}
              <div className="md:col-start-2 lg:col-start-3">
                {category.services.map(([name, price]) => (
                  <div
                    key={name}
                    className="
                      flex items-center justify-between gap-5
                      border-b border-timscare-brown/10
                      py-3.5 last:border-b-0
                    "
                  >
                    <span className="text-sm text-timscare-brown/80 md:text-base">
                      {name}
                    </span>

                    <span className="shrink-0 text-sm font-medium text-timscare-brown md:text-base">
                      {price}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* BAS */}
        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-6 text-timscare-brown/60">
            Certaines prestations sont proposées sous forme de cures ou avec
            des options complémentaires.
          </p>

          <a
            href="#contact"
            className="
              inline-flex min-h-12 items-center justify-center
              rounded-full bg-timscare-terracotta
              px-7 text-sm font-medium text-timscare-cream
              transition hover:opacity-90
            "
          >
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
}