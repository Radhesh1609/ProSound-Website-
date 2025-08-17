// Mobile nav
const toggle = document.querySelector('#toggleMenu');
const links = document.querySelector('.navlinks');
if(toggle){
  toggle.addEventListener('click',()=>{
    if(!links) return;
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.gap = '14px';
    links.style.padding = '14px 0';
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.style.transform = 'translateY(0)';
      e.target.style.opacity = '1';
      io.unobserve(e.target);
    }
  });
},{threshold:.12});
revealEls.forEach(el=>{
  el.style.transform = 'translateY(14px)';
  el.style.opacity = '.001';
  el.style.transition = 'all .5s ease';
  io.observe(el);
});

// Simple gallery carousel for product page
const slides = document.querySelectorAll('.slide');
let idx = 0;
function show(i){
  slides.forEach((s,k)=>{
    s.style.display = (k===i)?'block':'none';
  });
}
if(slides.length){
  show(idx);
  setInterval(()=>{ idx = (idx+1) % slides.length; show(idx); }, 3000);
}

// FAQ toggle (details already handles open/close)
// Add smooth hash scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
