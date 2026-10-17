import {roseGuide,contrast} from './rose-guide.mjs';
export const winterPost={
  "slug": "snowy-berries-winter-color-palette",
  "title": "Snowy berries winter color palette",
  "deck": "Five colors, three design directions. Compare the applications, check contrast, and take the CSS into your own project.",
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
      "A palette is a starting point. Here is what to make with it.",
      "Try this snow-and-evergreen combination on three different formats, compare the balance, and take away a usable set of color roles—not just five swatches."
    ],
    [
      "Same five colors. Three ways to use them.",
      "Change the dominant color and see how the mood shifts. Start neutral-led for a quiet reading surface, green-led for stronger structure, or sage-led for a softer botanical direction."
    ],
    [
      "Give every color a job.",
      "Start with Snow Veil 55%, Deep Evergreen 25%, Winter Sage 12%, Frosted Berry 6%, and Amber Twig 2%. Use the gray for surfaces, green for structure and reading text, and berry red for one important action. These proportions are a starting point, not a rule."
    ],
    [
      "A pretty pairing can still be hard to read.",
      "White on Snow Veil falls below the 4.5:1 threshold for normal text. Deep Evergreen on the same gray reaches 6.75:1. White on the berry action color reaches 4.84:1. Check each exact text and background pair in context."
    ],
    [
      "Choose the version that fits the job.",
      "Start neutral-led when reading content matters most, green-led for a more graphic winter identity, or sage-led for a softer botanical feel. Keep berry red selective. For print, ask for a proof on the actual stock; the CMYK values here are mathematical estimates, not a printer-specific conversion."
    ]
  ]
};
export const winterCSS="/* Snowy berries: an sRGB starting palette. Print values need an output profile. */\n:root {\n  --winter-surface: #D1D2D4;\n  --winter-support: #737E67;\n  --winter-ink: #33462F;\n  --winter-accent: #BB5041;\n  --winter-detail: #AD713B;\n  --winter-on-accent: #FFFFFF;\n}\n.winter-card { background: var(--winter-surface); color: var(--winter-ink); }\n.winter-action { background: var(--winter-accent); color: var(--winter-on-accent); }\n";

export function winterGuide(){
  // Use the first rose article as the shared palette-post template.
  let html=roseGuide();
  const colorMap={'CCD9D7':'D1D2D4','348ABF':'33462F','D9A3A3':'737E67','BF3F34':'BB5041','3498BF':'AD713B'};
  html=html.replace(/CCD9D7|348ABF|D9A3A3|BF3F34|3498BF/g,h=>colorMap[h]);
  const replacements=[
    ['journal-body field-guide','journal-body field-guide winter-guide'],
    ['class="mix-lab"','class="mix-lab winter-mix"'],
    ['rose-and-sky','snow-and-evergreen'],
    ['Blue-led','Green-led'],['Rose-led','Sage-led'],
    ['name="rose-mix"','name="winter-mix"'],
    ['A quieter<br>kind of everyday.','A quieter<br>kind of winter.'],
    ['Example website: neutral or colored background, blue illustration, and vermilion action','Example website: gray or green background, botanical illustration, and berry-red action'],
    ['Let the surface do the quiet work. Use red for one important action, rather than every link.','Let the gray surface do the quiet work. Use berry red for one important action, rather than every link.'],
    ['Example art poster: large serif title and overlapping floral shapes using the rose palette','Example winter invitation: large serif title and overlapping botanical shapes using the winter palette'],
    ['SLOW<br>BLOOM','WINTER<br>GATHER'],['JUNE — AUGUST','A WINTER GATHERING'],
    ['02 / A typographic poster','02 / A winter invitation'],
    ['Use blue as a large graphic field. Repeat the warm red in one focal shape and let type stay simple.','Use deep green as a large graphic field. Repeat berry red in one focal shape and let type stay simple.'],
    ['Example packaging: dusty rose carton with blue sides and restrained vermilion detail','Example packaging: sage carton with deep green sides and a restrained berry-red detail'],
    ['ROSE<br>STUDY','WINTER<br>STUDY'],['BLUE / ROSE / VERMILION','SAGE / GREEN / BERRY'],
    ['Put a soft shade on the broad face and use blue for the side panel. Test the colors on your actual stock.','Put sage on the broad face and use deep green for the side panel. Test the colors on your actual stock.'],
    ['mist gray gives content room; blue supplies identity; vermilion draws the eye to one action.','snow gray gives content room; evergreen supplies structure; berry red draws the eye to one action.'],
    ['the result feels more graphic. Keep the smaller reading areas light and the warm accents sparse.','the result feels more graphic. Keep the smaller reading areas light and the berry accents sparse.'],
    ['the same palette becomes warmer. Dark text keeps the soft surfaces useful, not just decorative.','the same palette becomes softer. Dark text keeps the muted surfaces useful, not just decorative.']
  ];
  for(const [from,to]of replacements)html=html.replaceAll(from,to);
  const roles=[['D1D2D4','Snow Veil','55%','Base surfaces','Page backgrounds, quiet panels, and breathing room.'],['33462F','Deep Evergreen','25%','Structure & reading','Headings, body text on gray, and a broad graphic field.'],['737E67','Winter Sage','12%','Soft support','Botanical shapes, packaging faces, and supporting panels.'],['BB5041','Frosted Berry','6%','Focused action','One call to action or one warm focal detail.'],['AD713B','Amber Twig','2%','Small detail','A fine rule or a small warm echo.']];
  const roleRows=roles.map(([hex,name,ratio,role,note])=>'<div class="role-row"><i style="background:#'+hex+'"></i><div><b>'+name+'</b><code>#'+hex+'</code></div><strong>'+ratio+'</strong><div><b>'+role+'</b><p>'+note+'</p></div></div>').join('');
  html=html.replace(/<section id="color-roles">[\s\S]*?<\/section>/,'<section id="color-roles"><div class="guide-section-heading"><span class="guide-number">02</span><div><h2>Give every color a job.</h2><p>A balanced starting point—not a rule for every project.</p></div></div><div class="role-ratio" aria-label="Example distribution: Snow Veil 55%, Deep Evergreen 25%, Winter Sage 12%, Frosted Berry 6%, Amber Twig 2%">'+roles.map(([hex,,ratio])=>'<span style="flex:'+parseInt(ratio)+';background:#'+hex+'"></span>').join('')+'</div><div class="roles-list">'+roleRows+'</div><p class="guide-note">Use Deep Evergreen for reading text on Snow Veil. The five inspiration colors do not have to do every job.</p></section>');
  const low=contrast('#FFFFFF','#D1D2D4').toFixed(2),high=contrast('#33462F','#D1D2D4').toFixed(2),action=contrast('#FFFFFF','#BB5041').toFixed(2);
  html=html.replace(/<section id="contrast-check">[\s\S]*?<\/section>/,'<section id="contrast-check"><div class="guide-section-heading"><span class="guide-number">03</span><div><h2>A pretty pairing can still be hard to read.</h2><p>Keep the background. Change the text color.</p></div></div><div class="contrast-grid"><div class="contrast-example"><div class="contrast-sample contrast-faint">Small details matter.</div><div class="contrast-caption"><b>White on Snow Veil</b><strong>'+low+':1</strong><p>Below the 4.5:1 threshold for normal text.</p></div></div><div class="contrast-example"><div class="contrast-sample contrast-clear">Small details matter.</div><div class="contrast-caption"><b>Deep Evergreen on Snow Veil</b><strong>'+high+':1</strong><p>Meets the 4.5:1 normal-text contrast threshold.</p></div></div></div><p class="guide-note">White on the berry action color is '+action+':1. These checks cover the stated solid-color pairs, not every element of a finished design. <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer">WCAG contrast guidance ↗</a></p></section>');
  html=html.replaceAll('vintage-rose-palette.css','snowy-berries-palette.css').replaceAll('rose-starter-css','winter-starter-css');
  html=html.replace(/<pre id="winter-starter-css">[\s\S]*?<\/pre>/,'<pre id="winter-starter-css"><code>'+winterCSS.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</code></pre>');
  html=html.replace('Start neutral-led when reading content matters most, blue-led when you need a stronger graphic identity, or rose-led for a softer material direction. Keep red selective. For print, ask for a proof on the actual paper; the CMYK values here are mathematical estimates, not a printer-specific conversion.',winterPost.sections[4][1]);
  return html;
}
