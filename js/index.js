<<<<<<< HEAD
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
      const offset = 100;
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  }
}

function initialiser() {
  afficherHero();
  
  const liens = document.querySelectorAll('a[href^="#"]');
  liens.forEach(lien => {
    lien.addEventListener('click', defilerVersSection);
  });
}

document.addEventListener('DOMContentLoaded', initialiser);

window.addEventListener('error', function(e) {
  console.error('Erreur détectée:', e.message);
});
=======
// PAGE FAQ

function retournerCarte() {
  this.classList.toggle('is-flipped');
}

document.addEventListener('DOMContentLoaded', function() {
  const flipCards = document.querySelectorAll('.flip-card');
  flipCards.forEach(carte => {
    carte.addEventListener('click', retournerCarte);
  });
});
>>>>>>> faq
