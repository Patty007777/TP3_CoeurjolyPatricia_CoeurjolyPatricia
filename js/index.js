// PAGE CONFIRMATION

function afficherHero() {
  const elements = document.querySelectorAll('.js-appear');
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('is-visible');
    }, index * 200);
  });
}

function defilerVersSection(e) {
  const lien = this.getAttribute('href');
  if (lien.startsWith('#') && lien.length > 1) {
    const section = document.querySelector(lien);
    if (section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function validerInfolettreEtRediriger(e) {
  e.preventDefault();
  const form = this;
  if (form.checkValidity()) {
    window.location.href = 'confirmation.html';
  } else {
    form.querySelector('input[type="email"]').classList.add('is-invalid');
  }
}

function init() {
  afficherHero();
  
  const liens = document.querySelectorAll('a[href^="#"]');
  liens.forEach(lien => {
    lien.addEventListener('click', defilerVersSection);
  });
  
  const formNewsletter = document.querySelector('.newsletter-section form');
  if (formNewsletter) {
    formNewsletter.addEventListener('submit', validerInfolettreEtRediriger);
  }
}

document.addEventListener('DOMContentLoaded', init);

window.addEventListener('error', function(e) {
  console.error('Erreur:', e.message);
});
