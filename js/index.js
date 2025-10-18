// PAGE CONTACT 

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

document.addEventListener('DOMContentLoaded', initialiserFormulaire);

window.addEventListener('error', function(e) {
  console.error('Erreur:', e.message);
});
