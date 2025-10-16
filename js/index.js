// SITE INSPIRATION COEURJOLY

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

function survolerCarte() {
  this.style.transform = 'translateY(-6px)';
  this.style.transition = 'transform 0.3s';
}

function quitterCarte() {
  this.style.transform = '';
}

function initialiser() {
  afficherHero();
  
  const liens = document.querySelectorAll('a[href^="#"]');
  liens.forEach(lien => {
    lien.addEventListener('click', defilerVersSection);
  });
  
  const cartes = document.querySelectorAll('.card, .creation-card, .promo-card');
  cartes.forEach(carte => {
    carte.addEventListener('mouseenter', survolerCarte);
    carte.addEventListener('mouseleave', quitterCarte);
  });
}

document.addEventListener('DOMContentLoaded', initialiser);

window.addEventListener('error', function(e) {
  console.error('Erreur détectée:', e.message);
});