export type Service = {
  slug: string;
  name: string;
  price: string;
  description: string;
  longDescription?: string;
  image?: string;
  duration?: string;
  details?: string[];
};

export type Category = {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  intro: string;
  services: Service[];
};

export const categories: Category[] = [
  {
    id: "visage",
    number: "01",
    shortTitle: "Visage",
    title: "Soins du visage",
    intro:
      "Des protocoles pensés pour nettoyer, hydrater, purifier et révéler l’éclat naturel de chaque peau.",
    services: [
      {
        slug: "soin-complet",
        name: "Soin complet",
        price: "55€",
        description:
          "Nettoyage, exfoliation, extraction et masque.",
        details: [
          "Nettoyage",
          "Exfoliation",
          "Extraction",
          "Masque",
        ],
      },
      {
        slug: "instant-timscare",
        name: "L’Instant Timscare",
        price: "70€",
        description:
          "Le soin signature Timscare : purifie, hydrate et illumine la peau.",
        details: [
          "Soin profond",
          "Purification",
          "Hydratation",
          "Éclat",
        ],
      },
      {
        slug: "soin-peau-grasse-acne",
        name: "Soin peau grasse & acné",
        price: "85€",
        description:
          "Purifie, régule le sébum et aide à réduire les imperfections.",
        details: [
          "Peaux grasses",
          "Imperfections",
          "Régulation du sébum",
        ],
      },
      {
        slug: "microneedling",
        name: "Microneedling",
        price: "80€",
        description:
          "Taches, pores dilatés, acné, hyperpigmentation, rides et ridules.",
        details: [
          "Taches",
          "Pores dilatés",
          "Acné",
          "Hyperpigmentation",
          "Rides et ridules",
        ],
      },
      {
        slug: "dermaplaning",
        name: "Dermaplaning",
        price: "75€",
        description:
          "Retire le duvet, lisse la peau et apporte douceur et luminosité.",
        details: [
          "Lissage",
          "Douceur",
          "Luminosité",
          "Retrait du duvet",
        ],
      },
      {
        slug: "instant-duo-timscare",
        name: "L’Instant Duo Timscare",
        price: "120€",
        description:
          "Association d’un soin profond et d’un dermaplaning.",
        details: [
          "Soin profond",
          "Dermaplaning",
        ],
      },
      {
        slug: "hydro-glow",
        name: "Soin Hydro Glow by Timscare",
        price: "90€",
        description:
          "Nettoyage profond, hydratation intense et coup d’éclat immédiat.",
        details: [
          "Nettoyage profond",
          "Hydratation intense",
          "Coup d’éclat",
        ],
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
        slug: "peeling-mandea",
        name: "Peeling Mandéa",
        price: "320€",
        description:
          "Cure de 4 séances. Un peeling doux destiné à raviver l’éclat.",
        details: [
          "Cure de 4 séances",
          "Une séance tous les 15 jours",
          "Éclat",
        ],
      },
      {
        slug: "peeling-azea",
        name: "Peeling Azéa",
        price: "320€",
        description:
          "Cure de 4 séances pour les imperfections et les peaux sujettes aux boutons.",
        details: [
          "Cure de 4 séances",
          "Une séance tous les 15 jours",
          "Imperfections",
          "Peaux sujettes aux boutons",
        ],
      },
      {
        slug: "peeling-algues-visage",
        name: "Peeling aux algues visage",
        price: "120€",
        description:
          "Pour les taches, imperfections, pores dilatés et irrégularités.",
        details: [
          "Taches",
          "Imperfections",
          "Pores dilatés",
          "Irrégularités",
        ],
      },
      {
        slug: "peeling-algues-corps",
        name: "Peeling aux algues corps",
        price: "Dès 160€",
        description:
          "Soin ciblé pour les taches, imperfections, vergetures et irrégularités.",
        details: [
          "Zone ciblée",
          "Taches",
          "Imperfections",
          "Vergetures",
          "Irrégularités",
        ],
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
        slug: "exfoliant-gourmand",
        name: "Exfoliant gourmand",
        price: "85€",
        description:
          "Gommage du corps accompagné d’un massage.",
        details: [
          "Gommage corps",
          "Massage",
        ],
      },
      {
        slug: "evasion-enveloppante",
        name: "Évasion enveloppante",
        price: "90€",
        description:
          "Enveloppement aux algues suivi d’un massage.",
        details: [
          "Enveloppement aux algues",
          "Massage",
        ],
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
        slug: "massage-full-body",
        name: "Massage Full Body",
        price: "65€",
        description:
          "Massage relaxant du corps entier, fusion du lomi-lomi et du californien.",
        details: [
          "Corps entier",
          "Lomi-lomi",
          "Massage californien",
        ],
      },
      {
        slug: "massage-dos-nuque",
        name: "Massage dos & nuque",
        price: "45€",
        description:
          "Massage relaxant du dos et de la nuque allié à la chaleur du sauna.",
        details: [
          "Dos",
          "Nuque",
          "Chaleur du sauna",
        ],
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
        slug: "rituel-bien-etre",
        name: "Rituel Bien Être",
        price: "130€",
        description:
          "Soin visage, gommage corps et massage.",
        details: [
          "Soin visage",
          "Gommage corps",
          "Massage",
        ],
      },
      {
        slug: "soin-renaissance",
        name: "Soin Renaissance by Timscare",
        price: "210€",
        description:
          "Soin visage, gommage, enveloppement et massage.",
        details: [
          "Soin visage",
          "Gommage",
          "Enveloppement",
          "Massage",
        ],
      },
      {
        slug: "rituel-magno",
        name: "Rituel Magno",
        price: "189€",
        description:
          "Rituel traditionnel pour future mariée ou mise en beauté avant un événement.",
        details: [
          "Soin visage",
          "Gommage corps",
          "Enveloppement",
          "Massage",
          "Mise en beauté avant événement",
        ],
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
        slug: "callus-peel",
        name: "Callus Peel",
        price: "50€",
        description:
          "Peeling des pieds conçu pour travailler les callosités.",
        details: [
          "Peeling des pieds",
          "Callosités",
        ],
      },
      {
        slug: "mise-en-beaute-ongles",
        name: "Option mise en beauté des ongles",
        price: "+15€",
        description:
          "Coupe, limage, pousse des cuticules et ponçage.",
        details: [
          "Coupe",
          "Limage",
          "Cuticules",
          "Ponçage",
        ],
      },
    ],
  },
];

export const services = categories.flatMap((category) =>
  category.services.map((service) => ({
    ...service,
    categoryId: category.id,
    categoryTitle: category.title,
  })),
);

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}