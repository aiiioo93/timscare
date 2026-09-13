export type TimscareVisual = {
  src: string;
  alt: string;
};

export const timscareVisuals = {
  home: {
    hero: {
      src: "/images/cliente/timscare-18.jpeg",
      alt: "Univers de l'institut Timscare",
    },
    experience: [
      {
        src: "/images/cliente/timscare-01.jpeg",
        alt: "Préparation d'un soin chez Timscare",
      },
      {
        src: "/images/cliente/timscare-08.jpeg",
        alt: "Chariot de produits et matériel Timscare",
      },
      {
        src: "/images/cliente/timscare-15.jpeg",
        alt: "Cabine et équipement de soin Timscare",
      },
    ],
  },
  timscare: {
    hero: {
      src: "/images/cliente/timscare-31.jpeg",
      alt: "Univers de soin et textile Timscare",
    },
    gallery: [
      {
        src: "/images/cliente/timscare-06.jpeg",
        alt: "Moment de soin chez Timscare",
      },
      {
        src: "/images/cliente/timscare-14.jpeg",
        alt: "Préparation d'un soin dans un bol chez Timscare",
      },
      {
        src: "/images/cliente/timscare-21.jpeg",
        alt: "Équipement lumineux de soin Timscare",
      },
    ],
  },
  prestations: {
    hero: {
      src: "/images/cliente/timscare-19.jpeg",
      alt: "Univers des prestations Timscare",
    },
  },
  categories: {
    visage: {
      hero: {
        src: "/images/cliente/timscare-13.jpeg",
        alt: "Moment de soin du visage chez Timscare",
      },
      gallery: [
        {
          src: "/images/cliente/timscare-05.jpeg",
          alt: "Geste de soin du visage chez Timscare",
        },
        {
          src: "/images/cliente/timscare-09.jpeg",
          alt: "Texture appliquée lors d'un soin Timscare",
        },
        {
          src: "/images/cliente/timscare-10.jpeg",
          alt: "Expérience de soin du visage chez Timscare",
        },
        {
          src: "/images/cliente/timscare-12.jpeg",
          alt: "Moment de détente pendant un soin Timscare",
        },
        {
          src: "/images/cliente/timscare-16.jpeg",
          alt: "Geste professionnel dans l'univers Timscare",
        },
        {
          src: "/images/cliente/timscare-17.jpeg",
          alt: "Équipement utilisé dans l'univers visage Timscare",
        },
        {
          src: "/images/cliente/timscare-22.jpeg",
          alt: "Technologie de soin du visage Timscare",
        },
      ],
    },
    peelings: {
      hero: {
        src: "/images/cliente/timscare-03.jpeg",
        alt: "Produits de peeling dans l'univers Timscare",
      },
    },
    corps: {
      hero: {
        src: "/images/cliente/timscare-20.jpeg",
        alt: "Préparation d'un soin du corps chez Timscare",
      },
    },
    pieds: {
      hero: {
        src: "/images/cliente/timscare-28.jpeg",
        alt: "Soin des pieds chez Timscare",
      },
      gallery: [
        {
          src: "/images/cliente/timscare-24.jpeg",
          alt: "Expérience de soin des pieds chez Timscare",
        },
        {
          src: "/images/cliente/timscare-26.jpeg",
          alt: "Geste de soin des pieds chez Timscare",
        },
        {
          src: "/images/cliente/timscare-27.jpeg",
          alt: "Soin des pieds dans l'univers Timscare",
        },
        {
          src: "/images/cliente/timscare-29.jpeg",
          alt: "Résultat d'un soin des pieds chez Timscare",
        },
      ],
    },
  },
  services: {
    "soin-complet": {
      src: "/images/cliente/timscare-07.jpeg",
      alt: "Vapeur lors d'un soin complet chez Timscare",
    },
    "instant-timscare": {
      src: "/images/cliente/timscare-30.jpeg",
      alt: "Peau lumineuse dans l'univers Timscare",
    },
    "soin-peau-grasse-acne": {
      src: "/images/cliente/timscare-11.jpeg",
      alt: "Masque appliqué pendant un soin du visage Timscare",
    },
    "hydro-glow": {
      src: "/images/cliente/timscare-23.jpeg",
      alt: "Équipement de soin Timscare",
    },
    "peeling-azea": {
      src: "/images/cliente/timscare-02.jpeg",
      alt: "Produit Azelaic Peel chez Timscare",
    },
    "exfoliant-gourmand": {
      src: "/images/cliente/timscare-04.jpeg",
      alt: "Protocole d'exfoliation du corps chez Timscare",
    },
    "callus-peel": {
      src: "/images/cliente/timscare-25.jpeg",
      alt: "Pieds après un soin chez Timscare",
    },
  },
} as const;

export const categoryVisuals = {
  visage: timscareVisuals.categories.visage,
  peelings: timscareVisuals.categories.peelings,
  corps: timscareVisuals.categories.corps,
  pieds: timscareVisuals.categories.pieds,
} as const;

export type CategoryVisualId = keyof typeof categoryVisuals;
export type ServiceVisualId = keyof typeof timscareVisuals.services;
