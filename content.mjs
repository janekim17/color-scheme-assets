import {siteInformation} from './site-information.mjs';
import {seasonalPosts} from './seasonal-guides.mjs';
import {winterPost} from './winter-guide.mjs';
export const seasons = [
  "Spring",
  "Summer",
  "Autumn",
  "Winter"
];

export const tones = [
  "Vivid",
  "Pastel",
  "Neutral",
  "Vintage"
];

export const colors = {
  "Red": "#FF4336",
  "Orange": "#FF9800",
  "Yellow": "#FFEB3B",
  "Green": "#4CAF50",
  "Teal": "#009688",
  "Blue": "#2496F3",
  "Pink": "#E91E63",
  "Purple": "#9C27B0",
  "Brown": "#795548",
  "Gray": "#9E9E9E",
  "White": "#FFFFFF",
  "Black": "#000000"
};

export const posts = [...seasonalPosts, winterPost,
  {
    "slug": "vintage-muted-color-palette",
    "title": "Vintage muted color palette",
    "deck": "Five colors, three design directions. Compare the applications, check contrast, and take the CSS into your own project.",
    "image": "rose.png",
    "labels": [
      "Summer",
      "Vintage",
      "Blue",
      "Pink",
      "Red",
      "Gray"
    ],
    "palette": [
      [
        "Clear Sky",
        "348ABF"
      ],
      [
        "Lagoon Blue",
        "3498BF"
      ],
      [
        "Mist Gray",
        "CCD9D7"
      ],
      [
        "Faded Vermilion",
        "BF3F34"
      ],
      [
        "Dusty Rose",
        "D9A3A3"
      ]
    ],
    "sections": [
      [
        "About the palette",
        "A coral rose against a blue sky brings warm and cool colors into one frame. The two blues give the palette its open, airy character. Pale gray creates a quiet interval between them and the stronger vermilion, while dusty pink echoes the lighter edges of the petals. The result feels sun-washed rather than highly polished: a useful starting point when you want color with a little nostalgia."
      ],
      [
        "Where it works best",
        "For a personal portfolio, try mist gray as the page background, dark charcoal for reading text, and clear sky blue for navigation. Save vermilion for a small number of important actions. Dusty rose can soften supporting panels or illustrations. In print, this combination suits a floral postcard or a travel journal; leave generous unprinted space so the stronger red does not compete with every other element."
      ],
      [
        "How to balance the colors",
        "Begin with one dominant blue and let the second blue occupy a smaller area. Keep pink and red unequal in size so that they read as accents instead of competing focal points. These swatches describe a mood, not an accessible interface by themselves: check each text and background pairing at its actual size. Use a darker text color when the pale gray and pink do not provide enough contrast."
      ]
    ],
    "photoCredit": {"name":"Aleksandar Kyng","profileUrl":"https://unsplash.com/@aleksandarkyng","source":"Unsplash","photoUrl":"https://unsplash.com/photos/pink-rose-in-close-up-photography-KJGBY76mmS4"},
    "published": true,
    "datePublished": "2026-10-17"
  }
];

export const info = {
  about:siteInformation.about,
  "color-101":{
  "title": "Color 101",
  "body": "<h2>Start with a role for each color</h2><p>A palette becomes useful when each color has a job. Choose a broad background, a readable text color, a supporting surface, and an accent. You do not need to use every swatch in equal amounts, or even use all five in the same design.</p><h2>Hue, saturation, and lightness</h2><p>Hue describes the color family, such as green or blue. Saturation describes how vivid or muted a color appears. Lightness helps separate elements: two different hues with similar lightness may still be difficult to distinguish in small text or a chart.</p><h2>Hex, RGB, and CMYK</h2><p>Hex is a compact way to write RGB values for a screen. RGB mixes red, green, and blue light. CMYK describes cyan, magenta, yellow, and black ink. The CMYK numbers shown on this site are approximate conversions; a printer’s color profile and paper choice affect the final result.</p><h2>Check contrast in context</h2><p>An attractive photograph does not automatically produce accessible text colors. Test foreground and background pairs at the font size and weight you will use. For normal text, WCAG AA uses a contrast ratio of at least 4.5:1; large text uses 3:1. Do not communicate an important state with color alone.</p><h2>Try a small layout first</h2><p>Make one card, one invitation, or one sample page before extending a palette across a project. A small test reveals whether the accent is too strong, the neutrals are too similar, or the background competes with the image.</p>"
},
  contact:siteInformation.contact,
  privacy:siteInformation.privacy
};
