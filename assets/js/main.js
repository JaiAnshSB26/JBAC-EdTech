
// Mobile menu toggle
document.addEventListener('click', (e)=>{
  if(e.target && e.target.id==='menuBtn'){
    document.getElementById('menuMobile')?.classList.toggle('hidden');
  }
});

// Set year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Active nav link (basic)
(function setActiveNav(){
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === current || (current === 'index.html' && href === 'index.html')){
      a.classList.add('active');
    }
  });
})();
