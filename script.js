const heart = document.getElementById('heart');
const envelope = document.getElementById('envelope');
const card = document.getElementById('card');
const cardFront = document.getElementById('card-front');
const cardInside = document.getElementById('card-inside');
const confettiContainer = document.getElementById('confetti');

// Step 1: Click heart flap -> card rises slowly
heart.addEventListener('click', () => {
  card.classList.add('show');
});

// Step 2: Click risen card -> remove envelope, show front of card
cardFront.addEventListener('click', () => {
  envelope.style.display = 'none';
  startConfetti();
});

// Step 3: Click front of card -> flip to inside
cardFront.addEventListener('dblclick', () => {
  card.classList.add('flipped');
  startConfetti();
});

// Confetti generator (once)
function startConfetti() {
  confettiContainer.innerHTML = '';
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 400 + 'px';
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = (1 + Math.random()) + 's';
    confettiContainer.appendChild(confetti);
  }
}

function getRandomColor() {
  const colors = ['#ff0000','#ff69b4','#ffcc00','#00ccff','#66ff66','#ff99cc'];
  return colors[Math.floor(Math.random()*colors.length)];
}
