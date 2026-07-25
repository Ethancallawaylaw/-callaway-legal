const menu=document.querySelector('.menu');const nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));menu.setAttribute('aria-label',open?'Open navigation':'Close navigation');nav.classList.toggle('open',!open);document.body.classList.toggle('menu-open',!open)});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open navigation');nav.classList.remove('open');document.body.classList.remove('menu-open')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('consultation-form')?.addEventListener('submit',e=>{e.preventDefault();document.getElementById('form-status').textContent='Online intake is currently unavailable. No information was sent.'});
