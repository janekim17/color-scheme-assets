import {posts,seasons,tones,colors,info} from './content.mjs?v=20261030-daily';
import {listing,esc,matches,card} from './render.mjs?v=20261030-daily';
const main=document.querySelector('main'), panel=document.querySelector('.panel'), toggle=document.querySelector('.menu-toggle');
const params=new URLSearchParams(location.search);
let filter=params.get('filter')||'', query=params.get('q')||'', page=Number(params.get('page'))||1;
const isHome=/\/$|\/index\.html$/.test(location.pathname);
const slug=location.pathname.split('/').pop().replace(/\.html$/,'');
const currentPost=posts.find(p=>p.slug===slug);
const filterButton=(name,cls='pill')=>`<button class="${cls}${filter===name?' active':''}" data-filter="${name}" aria-pressed="${filter===name}">${colors[name]&&cls.includes('pill')?`<span class="filter-dot" style="background:${colors[name]}" aria-hidden="true"></span>`:''}<span>${name}</span></button>`;
const seasonButton=n=>`<button class="season" data-filter="${n}" aria-pressed="false"><span class="season-icon" style="--icon:url('studio-css-${n.toLowerCase()}.svg')" aria-hidden="true"></span>${n}</button>`;
document.querySelector('.sidebar').innerHTML=`<section class="filter-section"><h2 class="filter-heading">Seasons</h2><div class="seasons">${seasons.map(seasonButton).join('')}</div></section><section class="filter-section"><h2 class="filter-heading">Mood & tone</h2><div class="pills tone-pills">${tones.map(n=>filterButton(n)).join('')}</div></section><section class="filter-section"><h2 class="filter-heading">Colors</h2><div class="pills color-pills">${Object.keys(colors).map(n=>filterButton(n)).join('')}</div></section>`;
document.querySelector('.panel-body').innerHTML=`<section class="panel-group"><h2>Mood</h2><div class="panel-links">${seasons.map(seasonButton).join('')}</div></section><section class="panel-group"><h2>Tone</h2><div class="panel-links">${tones.map(n=>filterButton(n,'')).join('')}</div></section><section class="panel-group"><h2>Colors</h2><div class="chips">${Object.entries(colors).map(([n,v])=>`<button class="chip" style="background:${v}" data-filter="${n}" aria-label="${n} palettes" title="${n}" aria-pressed="false"></button>`).join('')}</div></section><a class="panel-about" href="about.html">About</a><a href="color-101.html">Color 101</a><a href="image-color-picker.html">Color Picker</a><a href="contact.html">Contact</a>`;
const toneColors={Vivid:'#DE4F62',Pastel:'#A078B5',Neutral:'#748477',Vintage:'#A2744D'};
for(const [name,value] of Object.entries({...colors,...toneColors})){document.querySelectorAll(`[data-filter="${name}"]`).forEach(b=>{b.style.setProperty('--filter-color',value);b.style.setProperty('--filter-ink',name==='White'?'#888888':value)})}
document.querySelectorAll('a[href^="?info="]').forEach(a=>a.href=a.getAttribute('href').slice(6)+'.html');
function syncFilters(){document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===filter;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))})}
function updateURL(){const p=new URLSearchParams();if(filter)p.set('filter',filter);if(query)p.set('q',query);if(page>1)p.set('page',page);history.replaceState(null,'',location.pathname+(p.size?'?'+p:''))}
function render(){const terms=query.toLowerCase().split(/\s+/).filter(Boolean);const items=posts.filter(p=>(!filter||p.labels.includes(filter))&&terms.every(t=>`${p.title} ${p.labels.join(' ')} ${p.sections.flat().join(' ')}`.toLowerCase().includes(t)));page=Math.min(Math.max(1,page),Math.max(1,Math.ceil(items.length/6)));main.innerHTML=(filter||query?`<div class="filter-status"><span>${items.length} palette${items.length===1?'':'s'}${filter?' · '+esc(filter):''}${query?' · “'+esc(query)+'”':''}</span><button data-clear>Clear filters</button></div>`:'')+listing(items,page);syncFilters();updateURL()}
if(isHome)render();else syncFilters();
if(info[slug])document.querySelectorAll(`a[href="${slug}.html"]`).forEach(a=>a.classList.add('active'));
// Randomize equal-priority matches; retain the single-label fallback priority.
if(currentPost&&document.querySelector('#recommendations')){let others=posts.filter(p=>p.slug!==currentPost.slug).map(p=>({p,n:p.labels.filter(x=>currentPost.labels.includes(x)).length,r:Math.random()}));let recommended=others.filter(p=>p.n>=2).sort((a,b)=>a.r-b.r);recommended.push(...others.filter(p=>p.n===1));document.querySelector('#recommendations').innerHTML=recommended.slice(0,4).map(x=>card(x.p)).join('')}
let closing=false;
function closePanel(){if(closing)return;closing=true;panel.classList.add('closing');setTimeout(()=>{panel.close();panel.classList.remove('closing');toggle.setAttribute('aria-expanded','false');document.body.style.overflow='';toggle.focus();closing=false},300)}
toggle.addEventListener('click',()=>{panel.showModal();panel.querySelector('.close').focus({preventScroll:true});toggle.setAttribute('aria-expanded','true');document.body.style.overflow='hidden'});
document.querySelector('.close').addEventListener('click',closePanel);
panel.addEventListener('cancel',e=>{e.preventDefault();closePanel()});
panel.addEventListener('click',e=>{const r=panel.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right)closePanel()});
document.querySelectorAll('.search input').forEach(input=>{input.value=query;input.addEventListener('input',()=>{query=input.value;document.querySelectorAll('.search input').forEach(x=>{if(x!==input)x.value=query});if(isHome){page=1;render()}})});
document.querySelectorAll('.search').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();query=form.querySelector('input').value;if(isHome){page=1;render();if(panel.open)closePanel()}else location.href='index.html?q='+encodeURIComponent(query)}));
let toastTimer;function toast(message){const t=document.querySelector('.toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2500)}
document.addEventListener('click',async e=>{const f=e.target.closest('[data-filter]');if(f){filter=filter===f.dataset.filter?'':f.dataset.filter;if(isHome){page=1;render();if(panel.open)closePanel();window.scrollTo(0,0)}else location.href='index.html?filter='+encodeURIComponent(filter)}
const clear=e.target.closest('[data-clear]');if(clear){filter=query='';page=1;document.querySelectorAll('.search input').forEach(i=>i.value='');render()}
const p=e.target.closest('[data-page]');if(p&&!p.disabled){page=Number(p.dataset.page);render();window.scrollTo({top:0,behavior:'smooth'})}
const codeButton=e.target.closest('[data-copy-code]');if(codeButton){try{await navigator.clipboard.writeText(document.getElementById(codeButton.dataset.copyCode).textContent);codeButton.textContent='Copied';toast('Starter CSS copied');setTimeout(()=>codeButton.textContent='Copy CSS',2000)}catch{toast('Select the CSS below to copy it')}}
const copy=e.target.closest('[data-hex]');if(copy){try{await navigator.clipboard.writeText(copy.dataset.hex);document.querySelectorAll('.copy').forEach(b=>{b.querySelector('img').src='studio-css-copy.svg';b.querySelector('span').textContent=b.dataset.label||'Copy Hex'});copy.querySelector('img').src='studio-css-copied.svg';copy.querySelector('span').textContent='Copied';toast('Copied '+copy.dataset.hex)}catch{toast('Copy this hex: '+copy.dataset.hex)}}});

