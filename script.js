const envelope = document.getElementById('envelope');
const card = document.getElementById('card');

// Step 1: Click envelope -> show card
envelope.addEventListener('click', () => {
  envelope.querySelector('.flap').style.borderBottomColor = 'transparent';
  envelope.querySelector('.envelope-text').style.display = 'none';
  card.classList.add('show');
});

// Step 2: Click card -> flip open
card.addEventListener('click', () => {
  card.classList.add('flipped');
  startConfetti();
});

// Simple confetti generator
function startConfetti() {
  const container = document.getElementById('confetti');
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 300 + 'px';
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.animationDuration = (2 + Math.random()*2) + 's';
    container.appendChild(confetti);
  }
}

function getRandomColor() {
  const colors = ['#ff0000','#ff69b4','#ffcc00','#00ccff','#66ff66'];
  return colors[Math.floor(Math.random()*colors.length)];
}
