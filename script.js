const BASE='https://puppy.instabizweb.com';
const WA='https://wa.me/971541676733?text='+encodeURIComponent("Hi TeddyPups! I'd love to know more about your puppies.");
const puppyPhotos=[
['Max','Maltipoo','boy','3 months','/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp',true,'maltipoo-max-male'],
['Korean Teacup Maltipoo','Maltipoo','girl','2 months','/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg',true,'korean-teacup-maltipoo-female'],
['Korean Teacup Poodle','Poodle','girl','2 months','/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg',false,'korean-teacup-poodle-female'],
['Maltipoo & Cavapoo','Maltipoo Cavapoo','boy','3 months Maltipoo & 2 months Cavapoo','/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg',true,'maltipoo-cavapoo-male'],
['Toy Poodle','Poodle','both','2 months','/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg',false,'toy-poodle-male-female'],
['Maltipoo','Maltipoo','girl','3 months','/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg',true,'maltipoo-female-2'],
['Pomeranian','Pomeranian','girl','3 months','/media/3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg',false,'pomeranian-female'],
['Copper','Cavapoo','boy','2 months','/media/O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg',false,'copper-male'],
['Shih Tzu','Shih Tzu','girl','2 months','/media/qNrTCSrsYyzY/168fa8c4ff/ b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg',false,'shitzu-female'],
['Shih Tzu','Shih Tzu','boy','2 months','/media/crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg',false,'shitzu-male'],
['Maltipoo','Maltipoo','girl','2.5 months','/media/3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg',false,'maltipoo-female-1'],
['Maltipoo','Maltipoo','girl','2 months','/media/gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg',false,'maltipoo-female'],
['Korean Teacup Pomeranian','Pomeranian','girl','2 months','/media/xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg',false,'korean-teacup-pomeranian-1'],
['Korean Teacup Pomeranian','Pomeranian','girl','2 months','/media/YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg',false,'korean-teacup-pomeranian'],
['Korean Teacup Pomeranian','Pomeranian','boy','2 months','/media/vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg',false,'korean-teacup-pomeranian-male']
].map(p=>({...Object.fromEntries(['name','breed','sex','age','path','video','slug'].map((k,i)=>[k,p[i]])),image:BASE+'/'+p[4].trim().replace(/^\//,'')}));
const families=[['/media/dI8Jv0KRTiLJ/d2d7e5375b/27b888_7d940ce5701f48d98327e4a242b53ac4-mv2.jpg','Lulu 🧸 with her new mummy ❤️'],['/media/TI-WtaFssfQt/c41fb2a387/27b888_15920f828b864dd1b44b98ec4e964c53-mv2.jpg','Adorable Maltipoo baby 🧸❤️'],['/media/j6T9eswP2eS8/59c6879a1d/27b888_bc27df54dcce410196c6016475364ff3-mv2.jpg','My new teddy puppy 🥰🧸'],['/media/HJgL4rRnmReV/533701358f/27b888_082e47dfd8144423a96dc70d966fa5b2-mv2.jpg','Our new puppies 🧸🥰🤗'],['/media/uc5ANs5jm7r7/7160d8b7b1/27b888_f7f4966e59e94db591784d4ec546682f-mv2.jpg','New puppy 🧸😍'],['/media/pRJubyqHw8p7/d58c4c07ee/27b888_b073c5815f7c4f92ad9a57741a653663-mv2.jpg','Gang of 3 😍🧸'],['/media/4wOJk9azop_-/65ecf66bf0/27b888_cfe895dbcc2d4bff85f890be9b496543-mv2.jpg','So happy 😍😍'],['/media/3h20rIasJCOa/10c307cb1c/27b888_a7e7ab6a931e4c79a798bab9927d396e-mv2.jpg','New pup 🤗💫']];
const img=p=>BASE+p;
function card(p){return `<article class="puppy-card" tabindex="0" data-puppy="${p.slug}"><button class="puppy-photo" type="button" aria-label="View ${p.name}"><img src="${p.image}" alt="${p.name}" loading="lazy"><span class="available">Available</span>${p.video?'<span class="video-tag">▶ video</span>':''}</button><h3>${p.name}</h3><p>${p.sex==='both'?'boy & girl':p.sex} · ${p.age}</p></article>`}
function shell(label,title,copy,extra=''){return `<section class="intro-page"><div class="container page-top"><div><span class="handwritten">${label}</span><h1 class="display">${title}</h1><p class="lead">${copy}</p>${extra}</div><div class="note-paper">“TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.”<small>Sarah M., Dubai, UAE</small></div></div></section>`}
function home(){return `<section class="hero-home"><span class="handwritten">every puppy is family</span><h1 class="display">Premium teacup<br>puppies in Dubai</h1><p class="lead">Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders worldwide.</p><div class="hero-actions"><a class="button orange" href="puppies.html">View available puppies</a><a class="whatsapp" href="${WA}" target="_blank">Enquire on WhatsApp</a></div><div class="hero-pups">${puppyPhotos.slice(0,6).map(p=>`<img src="${p.image}" alt="${p.name}">`).join('')}</div></section><section class="section warm"><div class="container"><div class="section-head center"><span class="handwritten">from our little family</span><h2 class="section-title">Meet the pups</h2><p>Real puppies, real photos, looking for their families right now.</p></div><div class="puppy-grid">${puppyPhotos.slice(0,5).map(card).join('')}</div><p style="text-align:center;margin-top:35px"><a class="button orange" href="puppies.html">Meet them all</a></p></div></section><section class="section gold"><div class="container"><span class="handwritten">choose your way</span><h2 class="section-title">Two ways to meet your puppy</h2><div class="two-way"><article class="way-card"><h3>Puppies in Dubai</h3><p>See them, love them, take them home. Come meet our locally available puppies before you decide.</p><a href="puppies.html?origin=local">Explore local puppies →</a></article><article class="way-card"><h3>Imported for you</h3><p>Exclusive Korean teacup puppies, delivered. Order from trusted breeders and let us handle the import.</p><a href="puppies.html?origin=imported">Explore imported puppies →</a></article></div></div></section><section class="section warm"><div class="container"><span class="handwritten">simple, safe and joyful</span><h2 class="section-title">Your puppy journey</h2><div class="steps"><article class="step-card"><span class="step-number">1</span><h3>Choose your breed</h3><p>Tell us about your lifestyle and the puppy you are looking for.</p></article><article class="step-card"><span class="step-number">2</span><h3>Get photos & details</h3><p>See real photos, videos and health information through WhatsApp.</p></article><article class="step-card"><span class="step-number">3</span><h3>Secure & safe delivery</h3><p>We help arrange a smooth and comfortable journey home.</p></article><article class="step-card"><span class="step-number">4</span><h3>Welcome home</h3><p>Our team remains available to support you.</p></article></div><p style="margin-top:30px"><a class="button orange" href="how-it-works.html">How it works</a></p></div></section><section class="section dark"><div class="container"><span class="handwritten">puppy passport</span><h2 class="section-title">Why families trust TeddyPups</h2><div class="promise-grid"><div class="promise-item"><h3>Vet-checked & healthy</h3><p>Vaccinated, dewormed and verified health certificate.</p></div><div class="promise-item"><h3>Korea to Dubai, safely</h3><p>Trusted breeders, safe travel and premium care.</p></div><div class="promise-item"><h3>Support 24/7</h3><p>Help from selection through post-delivery support.</p></div><div class="promise-item"><h3>Trusted by families worldwide</h3><p>Puppies delivered to loving homes worldwide.</p></div></div></div></section><section class="section gold"><div class="container"><span class="handwritten">our wall of happy endings</span><h2 class="section-title">Happy families & puppies</h2><p class="lead">Beautiful moments shared by families after welcoming their furry friends.</p><div class="polaroid-grid">${families.slice(0,4).map((f,i)=>`<figure class="polaroid"><img src="${img(f[0])}" alt="${f[1]}"><figcaption>${f[1]}</figcaption></figure>`).join('')}</div><p><a class="button orange" href="happy-families.html">See every happy family</a></p></div></section><section class="section dark"><div class="container"><h2 class="section-title">Questions, answered</h2>${faqItems.slice(0,3).map(f=>`<div class="faq-list"><details><summary>${f[0]}</summary><p>${f[1]}</p></details></div>`).join('')}<p><a class="button" href="faq.html">Read all questions</a></p></div></section><section class="section gold"><div class="container"><h2 class="section-title">Ready to meet your new best friend?</h2><p class="lead">Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way.</p><a class="button orange" href="${WA}" target="_blank">Enquire on WhatsApp</a> <a class="button" href="contact.html">Visit & contact</a></div></section>`}
function puppiesPage(){return shell('from Teddy’s sketchbook','Available puppies','Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on WhatsApp.')+`<section class="section"><div class="container"><div class="filter-board"><div class="filter-row"><span class="filter-label">where</span><button class="chip active" data-filter="origin" data-value="all">Everywhere</button><button class="chip" data-filter="origin" data-value="imported">Imported</button><button class="chip" data-filter="origin" data-value="korean">Korean Teacup</button></div><div class="filter-row"><span class="filter-label">breed</span>${['Maltipoo','Pomeranian','Poodle','Cavapoo','Shih Tzu'].map(b=>`<button class="chip" data-filter="breed" data-value="${b.toLowerCase()}">${b}</button>`).join('')}</div><div class="filter-row"><span class="filter-label">boy or girl</span><button class="chip" data-filter="sex" data-value="boy">Boys</button><button class="chip" data-filter="sex" data-value="girl">Girls</button><button class="clear-filter">Clear filters</button></div></div><p id="result-count" class="handwritten"></p><div class="puppy-grid" id="all-puppies">${puppyPhotos.map(card).join('')}</div><p id="empty" class="hidden">No puppies match those filters.</p></div></section>`}
const faqItems=[['Are your puppies vaccinated and health-checked?','Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family.'],['Can I meet a puppy before I decide?','Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision.'],['Can I take my puppy home the same day?','Local puppies are available immediately, so you can take your puppy home the same day.'],['Do you import puppies from abroad?','Yes. TeddyPups can help arrange imported puppies from trusted breeders. Contact the team to discuss the breed and availability.'],['How does an imported puppy travel to Dubai?','The team coordinates travel arrangements and supports you through the import process. Ask us for details for your puppy.'],['Will I see photos and health details first?','Contact us through WhatsApp to request current photos, videos and available health information before deciding.'],['Do you deliver?','Delivery options depend on the puppy and destination. Contact us to discuss safe collection or delivery arrangements.'],['Which breeds do you usually have?','The website lists Maltipoo, Pomeranian, Poodle, Cavapoo and Shih Tzu puppies. Availability can change.'],['How can I contact TeddyPups?','WhatsApp or call +971 54 167 6733, or email teddypupsadmin@gmail.com.']];
function familiesPage(){return `<section class="family-hero"><div><span class="handwritten">our wall of happy endings</span><h1 class="display">Happy<br>families ♡</h1><p class="lead">Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends.</p><span class="handwritten">64 moments and counting</span></div><div class="note-paper">“TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.”<small>Sarah M., Dubai, UAE</small></div></section><section class="section gold"><div class="container"><div class="polaroid-grid">${families.map((f,i)=>`<figure class="polaroid"><img src="${img(f[0])}" alt="${f[1]}" loading="lazy"><figcaption>${f[1]}</figcaption></figure>`).join('')}</div></div></section>`}
function howPage(){return shell('','How it works','Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.',`<div class="pill-links"><a href="#ways">1 Two ways home</a><a href="#promise">2 Our premium puppy promise</a><a href="#delivery">3 Delivery & collection</a><a href="#why">4 Why choose us</a></div>`)+`<section class="section warm" id="ways"><div class="container"><span class="handwritten">choose your way</span><h2 class="section-title">Two ways home</h2><div class="two-way"><article class="way-card"><h3>Meet your puppy in person</h3><p>Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders.</p><p><b>Downtown Dubai</b></p></article><article class="way-card"><h3>Imported just for you</h3><p>Choose an exclusive miniature breed from trusted overseas breeders. We guide you through photos, health details, travel and delivery.</p><p><b>Korea → Dubai</b></p></article></div></div></section><section class="section gold"><div class="container"><h2 class="section-title">Your four steps home</h2><div class="steps">${[['Explore our puppies','Browse listings with photos, breed details, age and health information.'],['Choose your puppy','Open a profile and contact us for more information.'],['Meet before you choose','Spend time bonding before making your decision.'],['Pick-up or delivery','Collect your puppy or arrange delivery within Dubai.']].map((s,i)=>`<article class="step-card"><span class="step-number">Step ${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('')}</div></div></section><section class="section warm" id="promise"><div class="container promise"><span class="handwritten">puppy passport</span><h2 class="section-title">Our premium puppy promise</h2><div class="promise-grid"><div class="promise-item"><h3>Health checked</h3><p>Health information and veterinary checks are part of the puppy journey.</p></div><div class="promise-item"><h3>Personal guidance</h3><p>Our team helps you choose a puppy that fits your home and lifestyle.</p></div><div class="promise-item"><h3>Clear communication</h3><p>Ask for photos, videos and details before you decide.</p></div><div class="promise-item"><h3>Ongoing support</h3><p>We remain available to help through the process.</p></div></div></div></section><section class="section gold" id="delivery"><div class="container"><h2 class="section-title">Delivery & collection</h2><div class="two-way"><article><h3>Take your puppy home the same day</h3><p>Local puppies are available immediately. Visit, meet your puppy and discuss collection.</p></article><article><h3>Delivery within Dubai</h3><p>Prefer to stay home? Contact us to discuss delivery options within Dubai.</p></article><article><h3>Safe international cargo</h3><p>We can guide you through the arrangements for international travel.</p></article><article><h3>Worldwide delivery</h3><p>Ask the team about destination-specific options and requirements.</p></article></div></div></section><section class="section warm" id="why"><div class="container"><h2 class="section-title">Why choose us</h2><p class="lead">We're here to help you find a new family member, with guidance from your first enquiry through the journey home.</p><a class="button orange" href="${WA}" target="_blank">Ask us on WhatsApp</a></div></section>`}
function faqPage(){return `<section class="section dark"><div class="container faq-layout"><div><span class="handwritten">sniff out a question</span><h1 class="display">Questions<br>&amp; answers</h1><p>Can't find what you're looking for? Message us on WhatsApp. Our team is available 24/7.</p><input class="faq-search" id="faq-search" placeholder="delivery, Korea, vaccinated..." aria-label="Search questions"><p id="faq-count">9 notes on the board</p><a class="button" href="${WA}" target="_blank">Ask your own question</a></div><div class="faq-list" id="faq-list">${faqItems.map((f,i)=>`<details><summary>${f[0]} <span>⌄</span></summary><p>${f[1]}</p></details>`).join('')}</div></div></section>`}
function contactPage(){return `<section class="section gold"><div class="container contact-layout"><div><h1 class="display">Get in touch<br>with us</h1><p>Have questions about our puppies or adoption process? Fill out the form, and our team will get back to you promptly.</p><a class="button" href="https://wa.me/971541676733">WhatsApp +971 54 167 6733</a><p><span class="handwritten">call us</span><br><a href="tel:+971541676733">+971 54 167 6733</a></p><p><span class="handwritten">email</span><br><a href="mailto:teddypupsadmin@gmail.com">teddypupsadmin@gmail.com</a></p><article class="way-card"><h3>Visit us in Downtown Dubai</h3><p>Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.</p><p>Downtown Dubai, United Arab Emirates</p><a href="https://www.google.com/maps/search/?api=1&query=Downtown+Dubai" target="_blank">Open in Google Maps</a></article></div><form class="contact-form" id="contact-form"><span class="handwritten">Dear TeddyPups,</span><label for="name">My name is</label><input id="name" name="name" required placeholder="Your name"><label for="phone">You can reach me on</label><input id="phone" name="phone" placeholder="Phone or WhatsApp"><label for="email">Email</label><input id="email" name="email" type="email" required placeholder="you@example.com"><label for="interest">I'm curious about</label><select id="interest" name="interest"><option>Any puppy (not sure yet)</option><option>Maltipoo</option><option>Pomeranian</option><option>Poodle</option><option>Cavapoo</option><option>Shih Tzu</option><option>Imported puppy</option></select><label for="message">Anything else you'd like to tell us...</label><textarea id="message" name="message"></textarea><p>with love, a future puppy parent</p><button class="button orange" type="submit">Post my letter</button><p id="form-status" aria-live="polite"></p></form></div></section>`}
const page=document.body.dataset.page;const main=document.querySelector('.page-content');main.innerHTML=({index:home,puppies:puppiesPage,'happy-families':familiesPage,'how-it-works':howPage,faq:faqPage,contact:contactPage}[page]||home)();document.querySelector(`[data-nav="${page}"]`)?.classList.add('active');
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');menu.addEventListener('click',()=>{let open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
let filters={origin:'all',breed:'all',sex:'all'};function applyFilters(){const cards=[...document.querySelectorAll('#all-puppies .puppy-card')];let n=0;cards.forEach((el,i)=>{const p=puppyPhotos.find(x=>x.slug===el.dataset.puppy);const korean=p.name.toLowerCase().includes('korean');const ok=(filters.origin==='all'||(filters.origin==='korean'?korean:true))&&(filters.breed==='all'||p.breed.toLowerCase().includes(filters.breed))&&(filters.sex==='all'||p.sex===filters.sex||p.sex==='both');el.classList.toggle('hidden',!ok);if(ok)n++});const count=document.getElementById('result-count');if(count)count.textContent=`${n} ${n===1?'puppy':'puppies'} match`;document.getElementById('empty')?.classList.toggle('hidden',n!==0)}
document.querySelectorAll('.chip').forEach(b=>b.addEventListener('click',()=>{const type=b.dataset.filter;filters[type]=b.dataset.value;document.querySelectorAll(`.chip[data-filter="${type}"]`).forEach(x=>x.classList.remove('active'));b.classList.add('active');applyFilters()}));document.querySelector('.clear-filter')?.addEventListener('click',()=>{filters={origin:'all',breed:'all',sex:'all'};document.querySelectorAll('.chip').forEach(b=>b.classList.toggle('active',b.dataset.value==='all'));applyFilters()});const params=new URLSearchParams(location.search);if(params.get('origin')==='imported')filters.origin='imported';if(params.get('origin')==='local')filters.origin='all';if(params.get('breed'))filters.breed=params.get('breed');
function openPuppy(slug){const p=puppyPhotos.find(x=>x.slug===slug);if(!p)return;document.getElementById('dialog-img').src=p.image;document.getElementById('dialog-title').textContent=p.name;document.getElementById('dialog-meta').textContent=`${p.breed} · ${p.sex} · ${p.age}`;document.getElementById('dialog-wa').href='https://wa.me/971541676733?text='+encodeURIComponent(`Hi TeddyPups! I'm interested in ${p.name}. Please share more details.`);document.getElementById('puppy-dialog').showModal()}
document.querySelectorAll('[data-puppy]').forEach(el=>{el.addEventListener('click',()=>openPuppy(el.dataset.puppy));el.addEventListener('keydown',e=>{if(e.key==='Enter')openPuppy(el.dataset.puppy)})});document.querySelector('.dialog-close').addEventListener('click',()=>document.getElementById('puppy-dialog').close());document.getElementById('puppy-dialog').addEventListener('click',e=>{if(e.target.id==='puppy-dialog')e.currentTarget.close()});applyFilters();
const search=document.getElementById('faq-search');search?.addEventListener('input',()=>{let shown=0;document.querySelectorAll('#faq-list details').forEach(d=>{const yes=d.textContent.toLowerCase().includes(search.value.toLowerCase());d.classList.toggle('hidden',!yes);if(yes)shown++});document.getElementById('faq-count').textContent=`${shown} notes on the board`});
document.getElementById('contact-form')?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const msg=`Hello TeddyPups! My name is ${d.get('name')}. Phone: ${d.get('phone')}. Email: ${d.get('email')}. Interested in: ${d.get('interest')}. Message: ${d.get('message')}`;document.getElementById('form-status').textContent='Opening WhatsApp with your enquiry...';window.open('https://wa.me/971541676733?text='+encodeURIComponent(msg),'_blank','noopener')});

/* =====================================
   TEDDYPUPS PAW TRAIL ANIMATION
===================================== */

(() => {
  const finePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  );

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  if (!finePointer.matches || reducedMotion.matches) return;

  const canvas = document.createElement("canvas");
  canvas.id = "paw-trail";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  let pawprints = [];
  let lastPaw = 0;

  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function drawPaw(x, y, opacity, angle) {
    ctx.save();

    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.globalAlpha = opacity;
    ctx.fillStyle = "#c2622b";

    // Main paw pad
    ctx.beginPath();
    ctx.ellipse(0, 5, 5, 4.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Four toes
    const toes = [
      [-6, -3],
      [-2, -7],
      [3, -7],
      [7, -3]
    ];

    toes.forEach(([tx, ty]) => {
      ctx.beginPath();
      ctx.ellipse(tx, ty, 2.3, 3, 0, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  }

  window.addEventListener("pointermove", event => {
    if (event.pointerType === "touch") return;

    const now = performance.now();

    if (now - lastPaw < 140) return;

    lastPaw = now;

    pawprints.push({
      x: event.clientX,
      y: event.clientY,
      opacity: 0.8,
      angle: Math.random() * 0.5 - 0.25,
      size: 1
    });

    if (pawprints.length > 22) {
      pawprints.shift();
    }
  });

  function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    pawprints = pawprints.filter(paw => paw.opacity > 0.02);

    pawprints.forEach(paw => {
      ctx.save();
      ctx.translate(paw.x, paw.y);
      ctx.scale(paw.size, paw.size);
      ctx.translate(-paw.x, -paw.y);

      drawPaw(
        paw.x,
        paw.y,
        paw.opacity,
        paw.angle
      );

      ctx.restore();

      paw.opacity -= 0.012;
      paw.size -= 0.002;
    });

    requestAnimationFrame(animate);
  }

  animate();
})();
