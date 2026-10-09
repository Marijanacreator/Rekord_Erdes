const menu = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); menu.focus(); } });
window.matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);


const stickyHeader = document.querySelector('header');
let headerFramePending = false;
function updateHeaderGlass() {
  stickyHeader.classList.toggle('is-scrolled', window.scrollY > 12);
  headerFramePending = false;
}
window.addEventListener('scroll', () => {
  if (!headerFramePending) { headerFramePending = true; requestAnimationFrame(updateHeaderGlass); }
}, { passive: true });
updateHeaderGlass();
