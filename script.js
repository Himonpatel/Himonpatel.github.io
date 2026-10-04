const CONFIG={
  linkedin:"https://linkedin.com/in/himon-patel-49b174358", // public LinkedIn profile
  github:"https://github.com/Himonpatel",   // paste your GitHub profile URL here
  email:"himon.atlas@gmail.com",    // recruiter contact email
  smartcampusGithub:"https://github.com/Himonpatel/SmartCampus", // paste the public SmartCampus repository URL here
  make10Github:"https://github.com/Himonpatel/make10" // paste the public Make 10 repository URL here
};

const projects=[
  {id:"smartcampus",index:"01",type:"SYSTEM / BUILD",status:"WORKING PROTOTYPE",meta:"Engineering Project-II · Team project",title:"SmartCampus",short:"A multi-role campus operations prototype connecting backend workflows, schedules, room changes, analytics and indoor-navigation logic.",accent:"#7dd3fc",rgb:"125,211,252",visual:"campus",href:"smartcampus.html"},
  {id:"atlas",index:"02",type:"PRODUCT / SYSTEM",status:"RESEARCH + ARCHITECTURE",meta:"Independent product initiative",title:"Project Atlas",short:"A long-term exploration of learning, progression, student identity and institutional participation.",accent:"#aa92ff",rgb:"170,146,255",visual:"atlas",href:"atlas.html"},
  {id:"grab-research",index:"03",type:"RESEARCH / PRODUCT",status:"7-PART SERIES",meta:"Independent company & product research",title:"Understanding Grab",short:"A structured investigation into Grab's evolution, business model, products, GrabMaps and recurring user complaints.",accent:"#5be39d",rgb:"91,227,157",visual:"grab",href:"grab-research.html"}
];

const list=document.getElementById("project-list");
const preview={
  root:document.getElementById("project-preview"),type:document.getElementById("preview-type"),status:document.getElementById("preview-status"),meta:document.getElementById("preview-meta"),title:document.getElementById("preview-title"),description:document.getElementById("preview-description"),visual:document.getElementById("preview-visual")
};

function visualMarkup(type){
  if(type==="campus") return `<div class="visual-campus"><svg class="campus-preview-svg" viewBox="0 0 720 430" preserveAspectRatio="none" aria-hidden="true"><rect x="44" y="52" width="632" height="282" rx="0" class="campus-frame"/><rect x="84" y="90" width="164" height="196" class="campus-box"/><rect x="280" y="90" width="144" height="112" class="campus-box"/><rect x="452" y="90" width="180" height="132" class="campus-box"/><rect x="330" y="248" width="138" height="58" class="campus-box"/><path d="M126 252 H205 V146 H349 V252 H498 V157 H576" class="campus-path-base"/><path d="M126 252 H205 V146 H349 V252 H498 V157 H576" class="campus-path-ray"/><circle cx="126" cy="252" r="6" class="campus-node"/><circle cx="205" cy="146" r="6" class="campus-node"/><circle cx="349" cy="252" r="6" class="campus-node"/><circle cx="498" cy="157" r="6" class="campus-node"/><circle cx="576" cy="157" r="6" class="campus-node"/></svg><span class="chip chip-a">FACULTY → ROOM CHANGE</span><span class="chip chip-b">STUDENT → UPDATED</span><span class="route-caption route-caption-a">ROUTE FINDING</span><span class="route-caption route-caption-b">PATH RECOMPUTED</span></div>`;
  if(type==="atlas") return `<div class="visual-atlas-v3"><div class="preview-earth"></div><img src="assets/atlas-logo.png" alt="" class="preview-atlas-logo"><i class="atlas-spark s1"></i><i class="atlas-spark s2"></i><i class="atlas-spark s3"></i></div>`;
  if(type==="grab") return `<div class="visual-grab"><div class="stat-cloud"><div class="stat"><strong>307</strong><small>reviews analysed</small></div><div class="stat"><strong>4</strong><small>apps / user groups</small></div><div class="stat"><strong>7</strong><small>research areas</small></div></div><div class="grab-scanline"></div></div>`;
  if(type==="jam") return `<div class="visual-jam"><div class="jam-ui"><div class="jam-step step-a">ACTION</div><div class="jam-step step-b">FEEDBACK</div><div class="jam-step step-c">ADAPT</div><div class="jam-core"><span class="jam-btn-mini">TRY</span><strong>LEARN BY DOING</strong><small>press → react → learn</small></div><div class="jam-panel"><span>result</span><b>new information unlocked</b></div><div class="jam-cursor"></div></div></div>`;
  if(type==="parallel") return `<div class="visual-parallel parallel-art-preview"><img src="assets/parallel-dimension-hero.png" alt="The Parallel Dimension — Kael and Nira running through The Hollow"><div class="parallel-art-shade"></div><span class="portal-caption">THE HOLLOW · TEASER AVAILABLE</span></div>`;
  return `<div class="visual-rfid rfid-photo-preview"><img src="assets/rfid-setup-2.jpeg" alt="ESP32, RFID reader and fingerprint sensor prototype on a laptop"><div class="rfid-photo-shade"></div><span class="rfid-photo-caption">ESP32 · RFID · FINGERPRINT PROTOTYPE</span></div>`;
}

function managePortalVideoPlayback(){
  const vids=document.querySelectorAll(".portal-preview-video,.portal-hero-video");
  vids.forEach(v=>{
    if(v.dataset.observed)return;
    v.dataset.observed="1";
    const io=new IntersectionObserver(entries=>{entries.forEach(e=>{
      if(document.hidden||!e.isIntersecting){v.pause();}
      else{v.play().catch(()=>{});}
    })},{threshold:.12});
    io.observe(v);
  });
}
document.addEventListener("visibilitychange",()=>{
  document.querySelectorAll(".portal-preview-video,.portal-hero-video").forEach(v=>{
    if(document.hidden)v.pause(); else if(v.getBoundingClientRect().bottom>0&&v.getBoundingClientRect().top<innerHeight)v.play().catch(()=>{});
  });
});

function selectProject(id){
  const p=projects.find(x=>x.id===id);if(!p||!preview.root)return;
  document.documentElement.style.setProperty("--accent",p.accent);document.documentElement.style.setProperty("--accent-rgb",p.rgb);
  document.querySelectorAll(".project-row").forEach(r=>r.classList.toggle("active",r.dataset.project===id));
  preview.type.textContent=p.type;preview.status.textContent=p.status;preview.meta.textContent=p.meta;preview.title.textContent=p.title;preview.description.textContent=p.short;preview.visual.innerHTML=visualMarkup(p.visual);preview.root.href=p.href;managePortalVideoPlayback();
}

function renderProjectList(){
  if(!list)return;
  list.innerHTML=projects.map((p,i)=>`<button class="project-row ${i===0?"active":""}" type="button" data-project="${p.id}" style="--project-accent:${p.accent}"><span class="project-number">${p.index}</span><span><p>${p.type.replace(" / "," · ")}</p><h3>${p.title}</h3></span><span class="project-arrow">↗</span></button>`).join("");
  list.querySelectorAll(".project-row").forEach(row=>{
    row.addEventListener("mouseenter",()=>selectProject(row.dataset.project));
    row.addEventListener("focus",()=>selectProject(row.dataset.project));
    row.addEventListener("click",()=>{const p=projects.find(x=>x.id===row.dataset.project);if(p)goToProject(p)});
  });
  selectProject(projects[0].id);
}

function goToProject(p){ window.location.href=p.href; }

renderProjectList();
managePortalVideoPlayback();

document.getElementById("year")?.replaceChildren(String(new Date().getFullYear()));
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());

document.querySelectorAll("[data-config-link]").forEach(el=>{
  const key=el.dataset.configLink;
  const href=CONFIG[key];
  if(href){
    el.href=href;
    el.hidden=false;
  }else{
    el.hidden=true;
  }
});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const heroWord=document.querySelector(".hero-word");
if(heroWord){let words=[];try{words=JSON.parse(heroWord.dataset.words||"[]")}catch{}let i=0;if(words.length>1)setInterval(()=>{heroWord.classList.add("switching");setTimeout(()=>{i=(i+1)%words.length;heroWord.textContent=words[i]},160);setTimeout(()=>heroWord.classList.remove("switching"),360)},2300)}

const menu=document.querySelector(".menu-button"),nav=document.querySelector(".main-nav");
if(menu&&nav){menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")))}

window.addEventListener("pointermove",e=>{document.documentElement.style.setProperty("--mx",`${e.clientX}px`);document.documentElement.style.setProperty("--my",`${e.clientY}px`)},{passive:true});

const SOCIAL_ICONS={
  LinkedIn:`<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.4" y="2.4" width="19.2" height="19.2" rx="2.7" fill="#0A66C2"/><path fill="#fff" d="M7.25 9.15H4.8V19h2.45V9.15Zm.2-3.04c0-.78-.63-1.41-1.41-1.41-.78 0-1.41.63-1.41 1.41 0 .78.63 1.41 1.41 1.41.78 0 1.41-.63 1.41-1.41ZM19.2 13.36c0-2.96-1.58-4.34-3.69-4.34-1.7 0-2.46.94-2.88 1.6V9.15h-2.45V19h2.45v-4.88c0-1.29.24-2.53 1.84-2.53 1.57 0 1.59 1.47 1.59 2.62V19h3.14v-5.64Z"/></svg>`,
  Email:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M3.2 5.3 12 11.9l8.8-6.6v1.6L12 13.5 3.2 6.9V5.3Z"/><path fill="#4285F4" d="M3.2 5.3v13.4H6V7.4L3.2 5.3Z"/><path fill="#34A853" d="M18 7.4v11.3h2.8V5.3L18 7.4Z"/><path fill="#FBBC04" d="m3.2 5.3 8.8 6.6 2-1.5L5.3 3.9H4.6c-.77 0-1.4.63-1.4 1.4Z"/><path fill="#C5221F" d="m20.8 5.3-8.8 6.6-2-1.5 8.7-6.5h.7c.77 0 1.4.63 1.4 1.4Z"/></svg>`,
  GitHub:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"/></svg>`
};

function getSocialLinks(){
  const links=[];
  if(CONFIG.linkedin) links.push({label:"LinkedIn", href:CONFIG.linkedin, external:true});
  if(CONFIG.email) links.push({label:"Email", href:`mailto:${CONFIG.email}`, external:false});
  if(CONFIG.github) links.push({label:"GitHub", href:CONFIG.github, external:true});
  return links;
}

function renderHeaderSocials(){
  const links=getSocialLinks().filter(x=>x.label!=="GitHub");
  document.querySelectorAll('#header-socials,[data-social-mount]').forEach(mount=>{
    if(!links.length){ mount.hidden=true; return; }
    mount.hidden=false;
    mount.innerHTML=links.map(({label,href,external})=>`<a class="social-icon-link ${label.toLowerCase()}" href="${href}" aria-label="${label}" title="${label}" ${external?'target="_blank" rel="noopener"':''}>${SOCIAL_ICONS[label]}</a>`).join('');
  });
}

function renderContactLinks(){
  const contact=document.getElementById("contact-links");
  if(!contact)return;
  const links=getSocialLinks();
  if(!links.length){
    const span=document.createElement("span");
    span.textContent="Add your LinkedIn URL and email in script.js to activate these contact links.";
    span.className="contact-placeholder";
    contact.appendChild(span);
    return;
  }
  links.forEach(({label,href,external})=>{
    const a=document.createElement("a");
    a.href=href;
    a.className="contact-link-button social-contact-card";
    a.innerHTML=`<span class="social-logo">${SOCIAL_ICONS[label]||""}</span><span class="social-copy"><small>${label==='Email'?'EMAIL ME':'CONNECT'}</small><strong>${label==='Email'?CONFIG.email:label}</strong></span><b>↗</b>`;
    if(external){a.target="_blank";a.rel="noopener"}
    contact.appendChild(a);
  });
}

renderHeaderSocials();
renderContactLinks();

const playBtn=document.getElementById("gamejam-play"),feedback=document.getElementById("gamejam-feedback");
if(playBtn&&feedback){let step=0;const states=["You acted before reading a rule.","Feedback changes what you try next.","That loop — action → feedback → adaptation — is the idea being demonstrated."];playBtn.addEventListener("click",()=>{feedback.textContent=states[step%states.length];playBtn.textContent=step%states.length===2?"RESTART":"TRY AGAIN";step++})}

const rfidBtn=document.getElementById("rfid-demo"),rfidState=document.getElementById("rfid-state");
if(rfidBtn&&rfidState){rfidBtn.addEventListener("click",()=>{rfidState.textContent="CARD DETECTED · PROTOTYPE READ SUCCESS";rfidBtn.textContent="SCAN AGAIN";document.body.classList.add("rfid-scanned");setTimeout(()=>document.body.classList.remove("rfid-scanned"),1200)})}

// Parallel Dimension teaser modal
(()=>{
  const modal=document.getElementById("pd-teaser-modal");
  const video=document.getElementById("pd-teaser-video");
  if(!modal||!video)return;
  const openers=document.querySelectorAll("[data-open-teaser]");
  const closers=document.querySelectorAll("[data-close-teaser]");
  const open=()=>{modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.classList.add("teaser-open");setTimeout(()=>video.play().catch(()=>{}),120)};
  const close=()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.classList.remove("teaser-open");video.pause();};
  openers.forEach(b=>b.addEventListener("click",open));
  closers.forEach(b=>b.addEventListener("click",close));
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&modal.classList.contains("open"))close()});
})();

// V18 RFID real-demo clip picker
(()=>{
  const video=document.getElementById('rfid-main-video');
  const buttons=document.querySelectorAll('.rfid-demo-picker [data-video]');
  if(!video||!buttons.length)return;
  buttons.forEach(btn=>btn.addEventListener('click',()=>{
    buttons.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const src=btn.dataset.video;
    const wasPlaying=!video.paused;
    video.pause();
    video.src=src;
    video.load();
    if(wasPlaying) video.play().catch(()=>{});
  }));
})();
