for(const lab of document.querySelectorAll('[data-hsl-lab]')){
  const controls=Object.fromEntries(['h','s','l'].map(k=>[k,lab.querySelector(`[data-hsl-input="${k}"]`)]));
  function update(){const {h,s,l}=Object.fromEntries(Object.entries(controls).map(([k,input])=>[k,Number(input.value)]));for(const [key,value] of Object.entries({h,s,l}))lab.querySelector(`[data-hsl-value="${key}"]`).textContent=value+(key==='h'?'°':'%');const color=`hsl(${h} ${s}% ${l}%)`;const swatch=lab.querySelector('[data-hsl-swatch]');swatch.style.backgroundColor=color;swatch.setAttribute('aria-label',`Colour sample: hue ${h} degrees, saturation ${s} percent, lightness ${l} percent`);lab.querySelector('[data-hsl-code]').textContent=color;}
  for(const input of Object.values(controls))input.addEventListener('input',update);
  lab.querySelector('[data-hsl-reset]').addEventListener('click',()=>{controls.h.value=210;controls.s.value=70;controls.l.value=50;update();});update();
}
