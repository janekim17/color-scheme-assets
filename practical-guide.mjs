import {tonalStudy} from './tonal-studies.mjs';
import {paletteNotes} from './palette-notes.mjs?v=20261112-daily';
import {roseClearBody} from './rose-tabs-preview.mjs';
import {contrast} from './color-roles.mjs';
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function revisePost(p){const [heading,intro]=paletteNotes[p.slug];return {...p,deck:p.palette.map(([name])=>name).join(', ')+'. Explore five colours and copy their HEX values.',sections:[[heading,intro]]};}
export function practicalGuide(p){if(p.slug==='summer-balanced-color-palette'){const [heading,intro]=paletteNotes[p.slug];return cyanOchreStudy(p,heading,intro);}if(['spring-hushed-color-palette','vintage-soft-color-palette'].includes(p.slug)){const [heading,intro]=paletteNotes[p.slug];return tonalStudy(p,heading,intro);}const [heading,intro,order]=paletteNotes[p.slug];const c=order.map(i=>'#'+p.palette[i][1]);const vars=c.map((hex,i)=>'--sample-'+i+':'+hex).join(';');const ink=contrast(c[3],'#ffffff')>=4.5?'#ffffff':'#18232a';const titleInk=contrast(c[0],'#ffffff')>=3?c[0]:'#283d42';const cardInk=contrast(c[2],'#283d42')>=4.5?'#283d42':'#18232a';const cardTitle=contrast(c[2],c[0])>=3?c[0]:cardInk;const fieldInk=contrast(c[2],'#283d42')>=4.5?'#283d42':'#18232a';const body=p.slug==='summer-spirited-color-palette'?roseClearBody.replace(/<section id="finished-example"[\s\S]*?<\/section>/,amberContrastStudy(c)):roseClearBody;return body.replace(/<section id="palette-notes"[\s\S]*?<\/section>/,'<section id="palette-notes" class="rose-palette-notes" aria-label="About this palette"><h2>'+escape(heading)+'</h2><p>'+escape(intro)+'</p></section>').replace('class="journal-body rose-simple rose-tabbed"','class="journal-body rose-simple rose-tabbed" style="'+vars+';--sample-action-ink:'+ink+';--sample-title-ink:'+titleInk+';--sample-card-ink:'+cardInk+';--sample-card-title:'+cardTitle+';--sample-field-ink:'+fieldInk+'" data-palette="'+p.slug+'"');}

function amberContrastStudy(colors){
  const [indigo,orange,amber,violet,green]=colors;
  const sample=(label,background)=>`<div style="background:${background};color:${indigo};padding:1rem"><strong>Studio notes</strong><p>${label} · ${contrast(indigo,background).toFixed(2)}:1</p></div>`;
  return `<section id="finished-example" class="rose-use-preview"><div class="rose-use-heading"><h2>One ink, two warm backgrounds</h2><p>Both labels use Deep Indigo at the same size.</p></div><figure style="margin-top:1rem"><div style="display:flex;flex-wrap:wrap;gap:1rem;padding:1rem;border-top:5px solid ${violet};border-bottom:5px solid ${green}">${sample('Warm Amber',amber)}${sample('Lively Orange',orange)}</div><figcaption>Warm Amber leaves more separation between the letters and their background. Use it for the label and reserve Lively Orange for a nearby shape. The ratios compare the exact solid colors shown.</figcaption></figure></section>`;
}

function cyanOchreStudy(post, heading, intro) {
  const [chalk,ecru,cyan,ochre,gold]=post.palette.map(([,hex])=>'#'+hex);
  const sample=(label,lead,support)=>`<figure style="margin:0;flex:1 1 220px;min-width:0">
    <div style="padding:24px;background:${chalk};color:${gold};border-bottom:8px solid ${ecru}">
      <strong style="font:26px Georgia,serif">Field notes</strong>
      <div style="display:flex;gap:10px;height:68px;margin-top:14px" aria-hidden="true">
        <i style="flex:3;background:${lead}"></i><i style="flex:1;background:${support}"></i>
      </div>
    </div><figcaption style="padding-top:8px">${label}</figcaption>
  </figure>`;
  return `<div class="journal-body rose-simple">
    <section id="palette-notes" class="rose-palette-notes"><h2>${escape(heading)}</h2><p>${escape(intro)}</p></section>
    <section id="finished-example" class="rose-use-preview"><div class="rose-use-heading"><h2>Let cyan or ochre lead</h2>
    <p>Swap the large and small colour fields to compare the overall balance.</p></div>
    <div style="display:flex;flex-wrap:wrap;gap:20px;margin-top:20px">${sample('Cyan leads with a small ochre accent.',cyan,ochre)}${sample('Ochre leads with a small cyan accent.',ochre,cyan)}</div></section>
    <aside class="rose-learn-link">Explore colour basics in <a href="color-101.html">Color 101 →</a></aside></div>`;
}
