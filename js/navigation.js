document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 40);
  });

  const menuToggle = document.getElementById('menuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerClose = document.getElementById('drawerClose');

  function openDrawer(){ drawer.classList.add('open'); drawerOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeDrawer(){ drawer.classList.remove('open'); drawerOverlay.classList.remove('open'); document.body.style.overflow = ''; }
  if (menuToggle) menuToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDrawer(); });
});
