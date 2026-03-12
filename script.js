
// NAV scroll
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  document.getElementById('navLinks').classList.remove('open');
}));

// Reveal on scroll
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Toast
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// Form
function send() {
  const n = document.getElementById('fName').value.trim();
  const e = document.getElementById('fEmail').value.trim();
  const m = document.getElementById('fMsg').value.trim();
  if (!n || !e || !m) { showToast('Please fill all fields.'); return; }
  showToast('Message sent!');
  document.getElementById('fName').value = '';
  document.getElementById('fEmail').value = '';
  document.getElementById('fMsg').value = '';
}