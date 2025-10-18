// PAGE CONSTRUCTION 

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

document.addEventListener('DOMContentLoaded', initialiserConstruction);

window.addEventListener('error', function(e) {
  console.error('Erreur:', e.message);
});
