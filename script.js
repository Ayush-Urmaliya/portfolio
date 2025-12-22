/* ================= SCROLL ANIMATION ================= */

const animatedSections = document.querySelectorAll('.section-animate');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  },
  {
    threshold: 0.3,
  }
);

animatedSections.forEach((section) => {
  observer.observe(section);
});


/* ================= CONTACT FORM TOGGLE ================= */

/*
  NOTE:
  This expects a form with id="contactForm".
  If the form is added later, this will still work safely.
*/

const toggleBtn = document.getElementById('contactToggle');

toggleBtn?.addEventListener('click', (e) => {
  e.preventDefault();

  let form = document.getElementById('contactForm');

  // If form does not exist, create it
  if (!form) {
    form = document.createElement('form');
    form.id = 'contactForm';
    form.className = 'contact-form';

    form.innerHTML = `
      <input type="text" placeholder="Your name" required />
      <input type="email" placeholder="Your email" required />
      <input type="number" placeholder="Your number" required />
      <textarea placeholder="Your message" required></textarea>
      <button type="submit">Send message</button>
    `;

    document
      .querySelector('#contact .contact-inner')
      .appendChild(form);

    // allow animation frame before adding class
    requestAnimationFrame(() => {
      form.classList.add('show');
    });
  } else {
    form.classList.toggle('show');
  }
});
