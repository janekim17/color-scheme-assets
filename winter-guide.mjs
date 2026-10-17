import {winterBody} from './winter-content.mjs';
export const winterPost={
  "slug": "snowy-berries-winter-color-palette",
  "title": "Winter muted color palette",
  "deck": "A quieter winter palette from snow-covered leaves and warm berries, with ideas for seasonal journals, gathering invitations, and botanical gifts.",
  "image": "snowy-berries-winter-color-palette.png",
  "imageWidth": 1200,
  "imageHeight": 1200,
  "labels": [
    "Winter",
    "Neutral",
    "Green",
    "Gray",
    "Red",
    "Brown"
  ],
  "palette": [
    [
      "Snow Veil",
      "D1D2D4"
    ],
    [
      "Winter Sage",
      "737E67"
    ],
    [
      "Deep Evergreen",
      "33462F"
    ],
    [
      "Frosted Berry",
      "BB5041"
    ],
    [
      "Amber Twig",
      "AD713B"
    ]
  ],
  "photoCredit": {
    "name": "John Price",
    "profileUrl": "https://unsplash.com/@johnprice",
    "source": "Unsplash",
    "photoUrl": "https://unsplash.com/photos/UdgvzNom0Xs"
  },
  "published": true,
  "datePublished": "2026-10-18",
  "sections": [
    [
      "A quieter take on winter color.",
      "In John Price’s photograph, the snow is a soft gray rather than a brilliant white. Green leaves hold the scene together, and the berries supply small pockets of warmth. Keep that relationship in the design: broad quiet surfaces, a dark green structure, and red used sparingly. This palette suits a seasonal project that should feel thoughtful rather than festive at full volume."
    ],
    [
      "Build the season around the quiet colors.",
      "Compare a journal page, a gathering invitation, and a botanical gift carton. Use the controls to test a light gray, deep green, or sage-led surface before choosing a direction. A photo-heavy journal benefits from space around the image; a short invitation can carry a larger field of green."
    ],
    [
      "Let snow and leaf colors do most of the work.",
      "Begin with Snow Veil 55%, Deep Evergreen 25%, Winter Sage 12%, Frosted Berry 6%, and Amber Twig 2%. The large gray area echoes the snow, while dark green supplies the visual weight of the leaves. Red marks a destination; amber adds a small natural detail. These are illustrative proportions, not measured coverage of the photograph."
    ],
    [
      "Pale snow needs a dark reading color.",
      "White text disappears into Snow Veil: the pair has a contrast ratio of 1.51:1. Deep Evergreen on the same surface reaches 6.75:1 and meets the WCAG AA 4.5:1 threshold for normal text. White on Frosted Berry reaches 4.84:1. White on Winter Sage reaches only 4.28:1, so do not extend the white-on-red treatment to sage buttons without checking it."
    ],
    [
      "Choose the surface for the message.",
      "For a photo-led journal, begin with the pale version and let the image provide much of the warmth. For a compact invitation, try the green-led version with light text. On a sage carton, use dark lettering and keep small information on a light label. Before printing, confirm the output profile and inspect a proof on the chosen stock; the CMYK values supplied here are approximate conversions."
    ]
  ]
};
export const winterCSS="/* Snowy berries: an sRGB starting palette. Print values need an output profile. */\n:root {\n  --winter-surface: #D1D2D4;\n  --winter-support: #737E67;\n  --winter-ink: #33462F;\n  --winter-accent: #BB5041;\n  --winter-detail: #AD713B;\n  --winter-on-accent: #FFFFFF;\n}\n.winter-card { background: var(--winter-surface); color: var(--winter-ink); }\n.winter-action { background: var(--winter-accent); color: var(--winter-on-accent); }\n";
export function winterGuide(){return winterBody(winterCSS)}
