// Mobile menu
document.querySelectorAll('.burger').forEach(b=>b.onclick=()=>document.querySelector('.menu').classList.toggle('open'));
document.querySelectorAll('.menu a').forEach(a=>a.onclick=()=>document.querySelector('.menu').classList.remove('open'));
// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// Enquiry forms -> open WhatsApp with the details (no server needed, works on GitHub Pages)
document.querySelectorAll('form[data-wa]').forEach(f=>f.addEventListener('submit',e=>{
  e.preventDefault();
  const lines=[f.dataset.title||'New enquiry'];
  f.querySelectorAll('input,select,textarea').forEach(i=>{ if(i.value) lines.push((i.placeholder||i.name)+': '+i.value); });
  window.open('https://wa.me/'+f.dataset.wa+'?text='+encodeURIComponent(lines.join('\n')),'_blank');
}));
document.querySelectorAll('[data-year]').forEach(y=>y.textContent=new Date().getFullYear());
