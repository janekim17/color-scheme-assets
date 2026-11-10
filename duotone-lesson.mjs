const ramp = (title, colors, note) => `
  <figure class="duotone-ramp"><figcaption>${title}</figcaption>
    <div>${colors.map(color => `<i style="background:${color}"></i>`).join('')}</div>
    <p>${note}</p>
  </figure>`;

export const duotoneLesson = {
  slug: 'monochrome-vs-duotone',
  title: 'Monochrome vs duotone: one hue, two inks, different results',
  description: 'Compare a single-hue colour range with a two-endpoint digital tone map. Learn how monochromatic design and duotone printing describe different decisions.',
  image: 'color-101-duotone.svg',
  category: '24 / Colour and reproduction',
  datePublished: '2026-11-10',
  article: () => `<article class="learn-article">
    <a class="post-back" href="color-101.html">← All Color 101 guides</a>
    <header class="learn-heading"><p class="eyebrow">Color 101 / Colour and reproduction</p>
      <h1>Monochrome vs duotone: one hue, two inks, different results</h1>
      <p class="learn-deck">A page full of blue shades and a photograph printed with two inks answer different colour questions.</p>
      <p class="learn-byline">By Color Scheme Studio · November 10, 2026</p>
    </header>
    <nav class="learn-toc" aria-label="In this guide"><a href="#monochrome">One hue</a><a href="#duotone">Two inks</a><a href="#digital">A digital treatment</a><a href="#brief">Writing a clear brief</a></nav>
    <section id="monochrome"><h2>A monochromatic scheme stays with one hue family</h2>
      <p>A monochromatic colour scheme develops one hue through lighter, darker or more muted variations. A blue design can contain many distinct blue values and still read as monochromatic. The term describes the relationship within that set, rather than a fixed number of swatches.</p>
      ${ramp('One blue family', ['#17334d','#2a5274','#6387a6','#a9bfd1','#e0e8ef'], 'Five authored blue samples, arranged from dark to light. These are selected sRGB values, rather than equal perceptual steps.')}
      <p>Look at the middle samples before the endpoints. Their hue relationship keeps the sequence connected, while the changes in depth give separate areas room to stand apart. A monochromatic design still needs differences that are visible at the size at which it will be used.</p>
      <p>For example, a publication could use pale blue pages, a medium blue section marker and dark blue headings. The arrangement can feel consistent even though each element has its own value. A two-colour icon on an otherwise unrelated multicolour page tells you much less about the page’s overall scheme.</p>
    </section>
    <section id="duotone"><h2>In printing, duotone describes a two-ink reproduction</h2>
      <p>A duotone print uses two inks to reproduce tonal information. Photoshop’s Duotone workflow starts from a grayscale image and uses a separate distribution curve for each ink. The curves determine how much each ink contributes across the source tones. Two inks can produce a range of visible tones where their coverage and overlap change.</p>
      <p>The ink count concerns production. A file that looks purple and orange on screen may be reproduced with process inks, spot inks or another workflow. Ask the printer about the intended separations and proof the result using the actual production conditions.</p>
    </section>
    <section id="digital"><h2>A two-endpoint tone map shows a related screen effect</h2>
      <p>For the next comparison, we assigned dark teal to the dark end of a five-step ramp and warm cream to the light end. Each middle sample is a straight interpolation of their encoded sRGB channels. This small calculation makes the transformation reproducible.</p>
      ${ramp('A digital dark-to-light mapping', ['#173b43','#4b6365','#7e8a88','#b2b2aa','#e5d9cc'], 'Dark endpoint #173B43 → light endpoint #E5D9CC. The middle samples use 25%, 50% and 75% interpolation, rounded to 8-bit RGB.')}
      <p>Notice how the middle samples lose much of the teal’s intensity before reaching cream. Changing just the light endpoint would change those middle colours as well. A pale warm endpoint therefore affects more than the brightest patch.</p>
      <p>Use this kind of comparison when choosing a digital colour treatment. Check a face, a small object or a type edge in the actual artwork, since a clean ramp cannot show which details a photograph will retain. Keep the unmodified source so you can revise the treatment.</p>
      <p>For a print brief, take the colour treatment to the print provider and specify the desired ink workflow. These digital samples describe RGB results. A production proof establishes how the chosen inks and paper reproduce the image.</p>
    </section>
    <section id="brief"><h2>Describe both the appearance and the output</h2>
      <p>“Use one blue hue family with three depths” gives a designer a clear palette direction. “Prepare a two-spot-ink duotone with approved ink colours” gives a print provider a production requirement. A request for “a dark teal to cream digital tone map for the website” identifies a screen treatment.</p>
      <p>Choose the description that fits your deliverable, then attach the relevant values or ink references. For a team handoff, include one small comparison at the final size. It helps the next person judge whether the intended separation survived export.</p>
    </section>
    <section class="learn-sources"><h2>Sources and further reading</h2><ul>
      <li><a href="https://www.w3.org/wiki/Colour_theory">W3C Web Standards Curriculum — monochromatic colour schemes</a></li>
      <li><a href="https://helpx.adobe.com/photoshop/desktop/adjust-color/color-effects-techniques/create-and-edit-duotone-images.html">Adobe Photoshop — duotone inks, curves and separations</a></li>
    </ul><p>The two ramps are original examples. The second uses the stated RGB calculation.</p></section>
  </article>`
};
