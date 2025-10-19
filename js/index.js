// FONCTIONS DE BASE DE TOUTES LES PAGES
  
function afficherHero() {
  const elements = document.querySelectorAll('.js-appear');
  
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('is-visible');
    }, index * 500);
  });
}

function defilerVersSection(e) {
  const lien = this.getAttribute('href');
  
  if (lien.startsWith('#') && lien.length > 1) {
    const section = document.querySelector(lien);
    
    if (section) {
      e.preventDefault();

      const headerHeight = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
       window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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

// FONCTIONS SPÉCIFIQUES POUR LE FORMULAIRE DE CONTACT
   
function validerChamp() {
  if (this.checkValidity()) {
    this.classList.remove('is-invalid');
    this.classList.add('is-valid');
  } else {
    this.classList.add('is-invalid');
    this.classList.remove('is-valid');
  }
}

function nettoyerErreurs() {
  this.classList.remove('is-invalid');
  this.classList.remove('is-valid');
}

function soumettreFormulaire(e) {
  e.preventDefault();
  
  const form = this;
  
  if (form.checkValidity()) {
    window.location.href = 'confirmation.html';
  } else {
    const champs = form.querySelectorAll('input, textarea');
    champs.forEach(champ => {
      if (!champ.checkValidity()) {
        champ.classList.add('is-invalid');
      }
    });
  }
}

function initialiserFormulaire() {
  const form = document.getElementById('contactForm');
  
  if (!form) return;
  
  const champs = form.querySelectorAll('input, textarea');
  
  champs.forEach(champ => {
    champ.addEventListener('blur', validerChamp);
    champ.addEventListener('input', nettoyerErreurs);
  });
  
  form.addEventListener('submit', soumettreFormulaire);
}

//   FONCTION SPÉCIFIQUE  POUR LA PAGE FAQ
   

function retournerCarte() {
  this.classList.toggle('is-flipped');
}

// FONCTIONS SPÉCIFIQUES POUR LA PAGE CONSTRUCTION
   
function cliquerCarteConstruction() {
  const card = this;
  
  card.style.animation = 'none';
  setTimeout(() => {
    card.style.animation = '';
  }, 10);
  
  const titre = card.querySelector('h3').textContent;
  console.log('Service sélectionné:', titre);
}

function doublerCliquerCard() {
  const lien = this.querySelector('.hero__cta-btn');
  if (lien) {
    window.location.href = lien.getAttribute('href');
  }
}

function activerCardClavier(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    const lien = this.querySelector('.hero__cta-btn');
    if (lien) {
      lien.click();
    }
  }
}

function initialiserConstruction() {
  const cards = document.querySelectorAll('.construction-services__card');
  
  if (cards.length > 0) {
    cards.forEach(card => {
      card.setAttribute('tabindex', '0');
      card.addEventListener('click', cliquerCarteConstruction);
      card.addEventListener('dblclick', doublerCliquerCard);
      card.addEventListener('keydown', activerCardClavier);
    });
    
    console.log('✅ Page construction: 3 événements JavaScript initialisés');
  }
}

// DÉMARRAGE DES FONCTIONNALITÉS
   

function init() {
  afficherHero();
  
  const liens = document.querySelectorAll('a[href^="#"]');
  liens.forEach(lien => {
    lien.addEventListener('click', defilerVersSection);
  });
  
  const cartes = document.querySelectorAll(' .creation-card, .promo-card');
  cartes.forEach(carte => {
    carte.addEventListener('mouseenter', survolerCarte);
    carte.addEventListener('mouseleave', quitterCarte);
  });
  
  initialiserFormulaire();
  
  const flipCards = document.querySelectorAll('.flip-card');
  flipCards.forEach(carte => {
    carte.addEventListener('click', retournerCarte);
  });
  
  initialiserConstruction();
}

document.addEventListener('DOMContentLoaded', init);

window.addEventListener('error', function(e) {
  console.error('Erreur:', e.message);
});
