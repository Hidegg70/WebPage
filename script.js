const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
  if (index % 2 === 0) card.classList.add('left');
  else card.classList.add('right');
});
