window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if(window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

window.addEventListener('load', () => {
  document.querySelectorAll('.hero-box').forEach(el => el.classList.add('show'));
  document.querySelectorAll('.card-fade').forEach((el,i) => setTimeout(()=>el.classList.add('show'), i*300));
});
