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
