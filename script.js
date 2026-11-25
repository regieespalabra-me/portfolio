// Mobile navigation
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menu-toggle');

function setMenu(open) {
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Smooth scrolling is handled in CSS; this keeps the URL hash and focus in sync
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    history.pushState(null, '', link.getAttribute('href'));
  });
});

// Theme toggle
const root = document.documentElement;
const themeIcon = document.getElementById('theme-icon');
function applyTheme(theme) {
  root.dataset.theme = theme;
  themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
  localStorage.setItem('theme', theme);
}
applyTheme(root.dataset.theme);
document.getElementById('theme-toggle').addEventListener('click', () => {
  applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

// Project filter
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.toggle('active', b === btn));
  const tag = btn.dataset.filter;
  cards.forEach(card => {
    card.hidden = tag !== 'all' && !card.dataset.tags.split(' ').includes(tag);
  });
}));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
