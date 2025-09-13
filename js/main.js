// main.js - loads header/footer, handles mobile nav toggle, and back-to-top behavior
document.addEventListener('DOMContentLoaded', function(){
  // Load header partial
  fetch('/components/header.html').then(r=>r.text()).then(html=>{
    const target = document.getElementById('header-target');
    if(target){ target.innerHTML = html;
      // after injecting header HTML, wire up the hamburger
      const btn = target.querySelector('.hamburger');
      const nav = target.querySelector('.nav-list');
      if(btn && nav){
        btn.addEventListener('click', ()=>{
          const open = nav.classList.toggle('open');
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        // close nav on link click (mobile)
        nav.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=> nav.classList.remove('open')));
      }
    }
  }).catch(err=>console.error('Header load failed', err));

  // Load footer partial
  fetch('/components/footer.html').then(r=>r.text()).then(html=>{
    const target = document.getElementById('footer-target');
    if(target) target.innerHTML = html;
  }).catch(err=>console.error('Footer load failed', err));

  // Back to top links: smooth scroll for elements with href="#top"
  document.body.addEventListener('click', function(e){
    const el = e.target;
    if(el.tagName === 'A' && el.getAttribute('href') === '#top'){
      e.preventDefault();
      window.scrollTo({top:0, behavior:'smooth'});
    }
  });
});
