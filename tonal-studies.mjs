const studyFrame = (heading, intro, body) => `
  <div class="journal-body rose-simple tonal-studies">
    <section id="palette-notes" class="rose-palette-notes" aria-label="About this palette">
      <h2>${heading}</h2><p>${intro}</p>
    </section>
    <section id="finished-example" class="rose-use-preview">
      ${body}
    </section>
    <aside class="rose-learn-link">Explore colour basics in <a href="color-101.html">Color 101 →</a></aside>
  </div>`;

export function tonalStudy(post, heading, intro) {
  if (post.slug === 'spring-hushed-color-palette') {
    return studyFrame(heading, intro, `
      <div class="rose-use-heading"><h2>One palette, two different weights</h2>
      <p>All five colours appear in each small composition.</p></div>
      <div class="tonal-pair lilac-pair">
        <figure><div class="tonal-print lilac-light"><small>COLOUR STUDY</small>
          <strong>Softly<br><em>spoken.</em></strong><div class="tonal-arch"></div>
          <span class="tonal-line"></span><span class="tonal-dot"></span>
        </div><figcaption><b>Light and open</b>Chalk White gives the lilac shape room. Grey Rose forms the small circle, Warm Ecru makes the dividing line, and Soft Cocoa holds the lettering.</figcaption></figure>
        <figure><div class="tonal-print lilac-deep"><small>COLOUR STUDY</small>
          <strong>A quieter<br><em>depth.</em></strong><div class="tonal-arch"></div>
          <span class="tonal-line"></span><span class="tonal-dot"></span>
        </div><figcaption><b>Deep and enclosed</b>Soft Cocoa becomes the broad field. Chalk White carries the lettering. Lilac, rose and ecru stay visible as separate graphic details.</figcaption></figure>
      </div>`);
  }

  return studyFrame(heading, intro, `
    <div class="rose-use-heading"><h2>Warm rhythm, muted rhythm</h2>
    <p>Two small label compositions with the same five colours.</p></div>
    <div class="tonal-pair vintage-pair">
      <figure><div class="tonal-label vintage-gold"><small>STUDIO COLLECTION</small>
        <strong>Everyday<br><em>editions.</em></strong><div class="tonal-bands"><i></i><i></i><i></i></div>
      </div><figcaption><b>Gold takes the larger area</b>Soft Gold makes the label feel warmer and more emphatic. Ink Navy keeps the title distinct. Linen, blush and sage divide the lower edge into three quieter bands.</figcaption></figure>
      <figure><div class="tonal-label vintage-sage"><small>STUDIO COLLECTION</small>
        <strong>Collected<br><em>moments.</em></strong><div class="tonal-bands"><i></i><i></i><i></i></div>
      </div><figcaption><b>Sage sets a gentler pace</b>The larger sage field softens the overall colour. Ink Navy carries the same-sized title, linen and blush widen the pale base, and gold becomes a narrow mark.</figcaption></figure>
    </div>`);
}
