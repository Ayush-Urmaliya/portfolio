/* ================= SCROLL ANIMATION ================= */

const sections = document.querySelectorAll('.section-animate');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.45) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  },
  {
    threshold: [0, 0.45, 1],
  }
);

sections.forEach((section) => observer.observe(section));

/* ================= CONTACT FORM TOGGLE ================= */

const toggleBtn = document.getElementById('contactToggle');
const form = document.getElementById('contactForm');

if (toggleBtn && form) {
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.toggle('show');
  });
}
