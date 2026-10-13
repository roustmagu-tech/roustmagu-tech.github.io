(function(){
const P=[
{id:'sofi-martin',t:'Sofi & Martín',s:'El Dok',sec:'eventos',ext:'jpg',cover:1,n:64},
{id:'nico-lulu',t:'Nico & Lulú',s:'Sheraton',sec:'eventos',ext:'png',cover:1,n:32},
{id:'anto-rulo',t:'Anto & Rulo',s:'El Dok',sec:'eventos',ext:'jpg',cover:1,n:15},
{id:'joti-beltran',t:'Joti & Beltrán',s:'Cañuelas',sec:'eventos',ext:'png',cover:1,n:28},
{id:'maia-brian',t:'Maia & Brian',s:'El Central',sec:'eventos',ext:'jpg',cover:1,n:25},
{id:'mili-brian',t:'Mili & Brian',s:'La Rural',sec:'eventos',ext:'jpeg',cover:1,n:20},
{id:'ceci-gus',t:'Ceci & Gus',s:'El Dok',sec:'eventos',ext:'jpg',cover:1,n:19},
{id:'romi-javi',t:'Romi & Javi',s:'El Cubo',sec:'eventos',ext:'jpg',cover:1,n:20},
{id:'sol-guido',t:'Sol & Guido',s:'Pabellón 8',sec:'eventos',ext:'jpg',cover:1,n:12},
{id:'arenas',t:'Pita Arenas',s:'Buenos Aires',sec:'eventos',ext:'jpg',cover:1,n:19},
{id:'brahma',t:'Brahma',s:'Comercial',sec:'publicidad',ext:'jpg',cover:0,n:8,yt:'kOHjnT7d-6A'},
{id:'fernet',t:'Fernet',s:'Comercial',sec:'publicidad',ext:'jpeg',cover:0,n:4,yt:'jANSQkUgVjU'},
{id:'budweiser',t:'Budweiser',s:'Comercial',sec:'publicidad',ext:'jpg',cover:0,n:2,yt:'cT9xpG2q0w0'},
{id:'dgo',t:'DGO',s:'Comercial',sec:'publicidad',ext:'png',cover:0,n:5,yt:'MSQ9yBTuJVI'}];
const DGO={1:'png',2:'png',3:'png',4:'jpeg',5:'jpg'};
function photos(p){const l=[];if(p.cover)l.push(`assets/projects/${p.id}/cover.${p.ext}`);for(let i=1;i<=p.n;i++){const n=String(i).padStart(2,'0');l.push(`assets/projects/${p.id}/${n}.${p.id==='dgo'?DGO[i]:p.ext}`);}return l;}
function cover(p){if(p.cover)return `assets/projects/${p.id}/cover.${p.ext}`;return `https://i.ytimg.com/vi/${p.yt}/maxresdefault.jpg`;}
function mb(src,alt){return `<img src="${src}" alt="${alt||''}" loading="lazy"><img class="g" src="${src}" alt="" aria-hidden="true" loading="lazy">`;}
const lbHTML=`<div id="lb" aria-hidden="true"><div class="lb-h"><span id="lb-t"></span><span id="lb-c"></span><button id="lb-x">Cerrar ×</button></div><div class="lb-b"><button class="lb-a" id="lb-p">←</button><img id="lb-i" alt=""><div id="lb-v"><iframe id="lb-f" allow="autoplay; encrypted-media" allowfullscreen></iframe></div><button class="lb-a" id="lb-n">→</button></div></div>`;
let items=[],idx=0;
function $(id){return document.getElementById(id);}
function open(id){const p=P.find(x=>x.id===id);if(!p)return;const ph=photos(p).map(s=>({k:'i',s}));items=p.yt?[{k:'v',s:p.yt},...ph]:ph;idx=0;$('lb-t').textContent=`${p.t} — ${p.s}`;$('lb').classList.add('on');document.body.style.overflow='hidden';draw();}
function close(){$('lb').classList.remove('on');document.body.style.overflow='';$('lb-f').src='';}
function nav(d){idx=(idx+d+items.length)%items.length;draw();}
function draw(){const it=items[idx];$('lb-c').textContent=`${String(idx+1).padStart(2,'0')} / ${String(items.length).padStart(2,'0')}`;const im=$('lb-i'),v=$('lb-v');if(it.k==='v'){im.style.display='none';v.style.display='flex';$('lb-f').src=`https://www.youtube.com/embed/${it.s}?autoplay=1&rel=0`;}else{$('lb-f').src='';v.style.display='none';im.style.display='block';im.style.opacity=0;im.onload=()=>im.style.opacity=1;im.src=it.s;}}
function render(sel,sec,tpl){const el=document.querySelector(sel);if(!el)return;const list=P.filter(p=>p.sec===sec);el.innerHTML=list.map((p,i)=>tpl(p,i,cover(p))).join('');el.querySelectorAll('[data-id]').forEach(c=>c.addEventListener('click',()=>open(c.dataset.id)));}
document.addEventListener('DOMContentLoaded',()=>{document.body.insertAdjacentHTML('beforeend',lbHTML);$('lb-x').onclick=close;$('lb-p').onclick=()=>nav(-1);$('lb-n').onclick=()=>nav(1);$('lb').addEventListener('click',e=>{if(e.target.classList.contains('lb-b'))close();});document.addEventListener('keydown',e=>{if(!$('lb').classList.contains('on'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')nav(1);if(e.key==='ArrowLeft')nav(-1);});let x=0;$('lb').addEventListener('touchstart',e=>x=e.touches[0].clientX,{passive:true});$('lb').addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-x;if(Math.abs(d)>60)nav(d>0?-1:1);},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.1});document.querySelectorAll('.rv').forEach(el=>io.observe(el));});
window.PF={P,photos,cover,mb,open,render,
contact:{mail:'errestudio10@gmail.com',wa:'https://wa.me/5491151597750',waTxt:'+54 9 11 5159 7750',ig:'https://instagram.com/errestudio__',igTxt:'@errestudio__'}};
})();
