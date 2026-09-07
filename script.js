const credits = [
  {year:2025,type:'stunt',title:'Supergirl'},
  {year:2025,type:'wirecam',title:'Star Wars: Starfighter'},
  {year:2025,type:'stunt',title:'Marvel: Vision Quest'},
  {year:2024,type:'stunt',title:'Fountain of Youth'},
  {year:2022,type:'wirecam',title:'The Flash'},
  {year:2022,type:'wirecam',title:'Bridgerton'},
  {year:2021,type:'stunt',title:'Black Widow'},
  {year:2021,type:'stunt',title:'Aquaman 2'},
  {year:2021,type:'wirecam',title:"Marvel's Secret Invasion"},
  {year:2021,type:'wirecam',title:'Jurassic World: Dominion'},
  {year:2020,type:'stunt',title:'The Batman'},
  {year:2019,type:'wirecam',title:'Mission Impossible'},
  {year:2019,type:'wirecam',title:'Eurovision'},
  {year:2018,type:'wirecam',title:'Wonder Woman 2'},
  {year:2017,type:'stunt',title:'Mary Poppins Returns'},
  {year:2017,type:'stunt',title:'Jurassic World'},
  {year:2016,type:'stunt',title:'Star Wars VIII'},
  {year:2015,type:'stunt',title:'The Martian'},
  {year:2013,type:'wirecam',title:'Jupiter Ascending'},
  {year:2010,type:'wirecam',title:'Sherlock Holmes 2'},
  {year:2007,type:'wirecam',title:'Harry Potter'}
];

const btsVideos = [
  ['sLq4S3F4kac','Wonder Woman 1984','Wirecam / production coverage'],
  ['I5BgSN-VISU','Heart of Stone','Behind the scenes'],
  ['_LK8sy59A0c','Mary Poppins Returns','Aerial adventures'],
  ['kHyUC_rW4hs','The Martian','Stunts & action'],
  ['kOLkdKPpkPU','The Batman','Vengeance stunts'],
  ['GNZXZRvMg4o','Fountain of Youth','Stunts'],
  ['dbRqAnimogg','Murder Mystery 2','Behind the stunts']
];

const galleryImages = [
  'https://static.wixstatic.com/media/5e11b3_818731a87e774fd8acb4ebc5cdbcd932~mv2.jpg',
  'https://static.wixstatic.com/media/5e11b3_5f96ccebb8644d2a9e9ff30c64b12424~mv2.jpg',
  'https://static.wixstatic.com/media/5e11b3_416510a0d5f04ce496cb204913144dc4~mv2.jpg',
  'https://static.wixstatic.com/media/5e11b3_45214ccc7cc5433bb1efe1f82bc3f79a~mv2.png',
  'https://static.wixstatic.com/media/5e11b3_70349058d8b2406a9af5f9b0682b6150~mv2.jpg',
  'https://static.wixstatic.com/media/5e11b3_8757ee2c62484b69acf5828d8540859d~mv2.png',
  'https://static.wixstatic.com/media/5e11b3_b60d631a41f845219901546584245dd9~mv2.png',
  'https://static.wixstatic.com/media/5e11b3_8ec4ad3a0e764a249b048caf0db4c4d4~mv2.jpg',
  'https://static.wixstatic.com/media/5e11b3_d10e8373fa9d497bb02ee0e7194510c0~mv2.jpg',
  'https://static.wixstatic.com/media/5e11b3_79ac70c999774099b0ad1ee5ba3629fc~mv2.jpg',
  'https://static.wixstatic.com/media/5e11b3_48ff8dbe4a1b460583b3da2159ffc443~mv2.jpg',
  'https://static.wixstatic.com/media/5e11b3_77f04a0bd18d4d45828d58ceb0e436e8~mv2.jpg'
];

const reels = {
  stunt:{title:'STUNT REEL',external:'https://www.winches.design/general-5',poster:'https://static.wixstatic.com/media/5e11b3_6ea3c1dd90834584b6b30de2baad34e3~mv2.jpg',chapters:[4,5,2,3,1]},
  wirecam:{title:'WIRECAM REEL',external:'https://www.winches.design/copy-of-stunt-page',poster:'https://static.wixstatic.com/media/5e11b3_31e186b7677f4e6cbd4a339dcb812aa7~mv2.jpg',chapters:[0,2,4]}
};

// Hero native video: hide cleanly until the original MP4 is dropped into assets/home-hero.mp4.
const heroVideo = document.getElementById('heroVideo');
if(heroVideo){
  const hide = ()=> document.getElementById('heroVideoWrap')?.remove();
  heroVideo.addEventListener('error', hide);
  heroVideo.querySelector('source')?.addEventListener('error', hide);
  heroVideo.play().catch(()=>{});
}

// Header scroll state + progress
const topbar = document.getElementById('topbar');
const progress = document.getElementById('scrollProgress');
function updateScroll(){
  topbar?.classList.toggle('scrolled', scrollY > 30);
  const max = document.documentElement.scrollHeight - innerHeight;
  if(progress) progress.style.width = `${max ? scrollY/max*100 : 0}%`;
}
addEventListener('scroll', updateScroll, {passive:true}); updateScroll();

// reveal
const io = new IntersectionObserver(entries=>entries.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}
}),{threshold:.09,rootMargin:'0px 0px -5% 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// active nav section
const navLinks = [...document.querySelectorAll('.tabs a')];
const sections = [...document.querySelectorAll('[data-section]')];
const spy = new IntersectionObserver(entries=>{
  const visible = entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!visible) return;
  const id = visible.target.dataset.section;
  navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${id}`));
},{threshold:[.2,.35,.5],rootMargin:'-15% 0px -55% 0px'});
sections.forEach(s=>spy.observe(s));

// mobile nav
const menuButton=document.getElementById('menuButton'), mobileMenu=document.getElementById('mobileMenu');
menuButton?.addEventListener('click',()=>{
  const open=!mobileMenu.classList.contains('open');
  mobileMenu.classList.toggle('open',open);document.body.classList.toggle('locked',open);menuButton.setAttribute('aria-expanded',String(open));mobileMenu.setAttribute('aria-hidden',String(!open));
});
mobileMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');document.body.classList.remove('locked')}));

// credits
let creditFilter='all';
const creditList=document.getElementById('creditList');
function renderCredits(){
  const data=credits.filter(c=>creditFilter==='all'||c.type===creditFilter).sort((a,b)=>b.year-a.year);
  creditList.innerHTML=data.map(c=>`<article class="credit-row"><span class="year">${c.year}</span><span class="type">${c.type==='stunt'?'Stunts':'Wirecam'}</span><h3>${c.title}</h3><span class="arrow">↗</span></article>`).join('');
}
renderCredits();
document.querySelectorAll('[data-credit-filter]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-credit-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');creditFilter=btn.dataset.creditFilter;renderCredits();
}));

// BTS grid
const videoGrid=document.getElementById('videoGrid');
videoGrid.innerHTML=btsVideos.map(([id,title,type])=>`<article class="video-card reveal"><div class="video-thumb" style="background-image:url('https://i.ytimg.com/vi/${id}/maxresdefault.jpg')"><button type="button" data-video="${id}" aria-label="Play ${title}"></button><span class="video-play">▶</span></div><div class="video-info"><h3>${title}</h3><p>${type}</p></div></article>`).join('');
videoGrid.querySelectorAll('.reveal').forEach(el=>io.observe(el));
videoGrid.addEventListener('click',e=>{
  const b=e.target.closest('[data-video]'); if(!b)return; const t=b.closest('.video-thumb');
  t.innerHTML=`<iframe src="https://www.youtube.com/embed/${b.dataset.video}?autoplay=1&rel=0" title="Behind the scenes video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
});

// gallery + lightbox
const gallery=document.getElementById('galleryGrid');
gallery.innerHTML=galleryImages.map((src,i)=>`<figure class="gallery-item reveal"><img src="${src}" alt="Winches & Wirecams production image ${i+1}" loading="lazy"></figure>`).join('');
gallery.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const lightbox=document.getElementById('lightbox'),lightboxImage=document.getElementById('lightboxImage');
gallery.addEventListener('click',e=>{const img=e.target.closest('img');if(!img)return;lightboxImage.src=img.currentSrc||img.src;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.classList.add('locked')});
document.querySelector('[data-close-lightbox]')?.addEventListener('click',()=>{lightbox.classList.remove('open');document.body.classList.remove('locked')});

// reel modal
const reelModal=document.getElementById('reelModal'),reelMain=document.getElementById('reelMain'),reelChapters=document.getElementById('reelChapters');
function openReel(mode='stunt'){
  const reel=reels[mode]||reels.stunt;
  reelMain.innerHTML=`<div class="reel-placeholder" style="background-image:url('${reel.poster}')"><div><p class="micro">ORIGINAL SHOWREEL</p><h2>${reel.title}</h2><p>The master reel can be placed directly inside this viewer when the original video file is supplied. For now, open the original reel or choose one of the production films alongside it.</p><a href="${reel.external}" target="_blank" rel="noopener">Open original reel ↗</a></div></div>`;
  reelChapters.innerHTML=reel.chapters.map(i=>{const [id,title,type]=btsVideos[i];return `<button class="chapter" type="button" data-chapter="${id}"><img src="https://i.ytimg.com/vi/${id}/mqdefault.jpg" alt=""><span><strong>${title}</strong><small>${type}</small></span></button>`}).join('');
  reelModal.classList.add('open');reelModal.setAttribute('aria-hidden','false');document.body.classList.add('locked');
}
document.querySelectorAll('[data-open-reel]').forEach(b=>b.addEventListener('click',()=>openReel(b.dataset.reel||'stunt')));
reelChapters.addEventListener('click',e=>{const b=e.target.closest('[data-chapter]');if(!b)return;reelMain.innerHTML=`<iframe src="https://www.youtube.com/embed/${b.dataset.chapter}?autoplay=1&rel=0" title="Production film" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`});
document.querySelector('[data-close-modal]')?.addEventListener('click',()=>{reelModal.classList.remove('open');reelMain.innerHTML='';document.body.classList.remove('locked')});

// project drawer
const drawer=document.getElementById('projectDrawer');
function openProject(){drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');document.body.classList.add('locked')}
function closeProject(){drawer.classList.remove('open');drawer.setAttribute('aria-hidden','true');document.body.classList.remove('locked')}
document.querySelectorAll('[data-open-project]').forEach(b=>b.addEventListener('click',openProject));
document.querySelector('[data-close-project]')?.addEventListener('click',closeProject);
const quickForm=document.getElementById('quickForm');
quickForm.addEventListener('submit',e=>{
  e.preventDefault();if(!quickForm.reportValidity())return;
  const d=Object.fromEntries(new FormData(quickForm).entries());sessionStorage.setItem('wwBrief',JSON.stringify(d));closeProject();document.getElementById('contact').scrollIntoView({behavior:'smooth'});setTimeout(prefillBrief,500);
});
function prefillBrief(){
  let d;try{d=JSON.parse(sessionStorage.getItem('wwBrief')||'null')}catch{} if(!d)return;
  const f=document.getElementById('briefForm');['name','email','shot'].forEach(k=>{if(d[k]&&f.elements[k])f.elements[k].value=d[k]});if(d.requirement&&f.elements.requirement)f.elements.requirement.value=d.requirement;sessionStorage.removeItem('wwBrief');
}
prefillBrief();

// full brief -> email
const briefForm=document.getElementById('briefForm'),status=document.getElementById('formStatus');
briefForm.addEventListener('submit',e=>{
  e.preventDefault();if(!briefForm.reportValidity())return;const d=new FormData(briefForm);
  const body=`WINCHES & WIRECAMS — PRODUCTION ENQUIRY\n\nProduction: ${d.get('production')||'Not specified'}\nName: ${d.get('name')}\nEmail: ${d.get('email')}\nRequirement: ${d.get('requirement')}\nLocation / Dates: ${d.get('location')||'Not specified'}\n\nSHOT / SEQUENCE\n${d.get('shot')}\n\nSTORYBOARD / PREVIS\n${d.get('reference')||'None provided'}`;
  const subject=`Production enquiry${d.get('production')?` — ${d.get('production')}`:''}`;
  location.href=`mailto:winchesandwirecams@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent='Production brief created in your email application.';
});

addEventListener('keydown',e=>{if(e.key==='Escape'){reelModal.classList.remove('open');lightbox.classList.remove('open');closeProject();document.body.classList.remove('locked')}});
