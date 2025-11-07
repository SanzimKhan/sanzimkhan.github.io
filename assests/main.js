/* main.js - tiny helpers for nav & active links */
document.addEventListener('DOMContentLoaded', ()=> {
  // active link by URL
  const links = document.querySelectorAll('.nav__link');
  links.forEach(a=>{
    try{
      const href = a.getAttribute('href') || '';
      if(location.pathname.endsWith(href) || location.pathname.endsWith(href.replace('./',''))){
        a.classList.add('active-link');
      }
    }catch(e){}
  });
});
