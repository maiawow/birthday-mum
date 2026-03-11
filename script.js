const envelope = document.getElementById('envelope');
const card = document.getElementById('card');

envelope.addEventListener('click', () => {
  // Shrink flap to simulate opening
  envelope.querySelector('.flap').style.borderBottomColor = 'transparent';
  
  // Hide envelope text
  envelope.querySelector('.envelope-text').style.display = 'none';
  
  // Show the card
  card.classList.add('show');
});
