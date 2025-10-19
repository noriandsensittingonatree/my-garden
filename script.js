const flowers = [
  { type: 'lily', image: 'images/lily.png', message: "You brighten my life like a lily in bloom!" },
  { type: 'orchid', image: 'images/orchid.png', message: "You are as rare and beautiful as an orchid." },
  { type: 'lily', image: 'images/lily.png', message: "Your smile is like sunshine to my garden." },
  { type: 'orchid', image: 'images/orchid.png', message: "Every moment with you is magical." },
  { type: 'lily', image: 'images/lily.png', message: "You make my heart bloom." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are my most precious flower." }
];

const body = document.body;

function createFlower(flower) {
  const elem = document.createElement('div');
  elem.className = 'flower';
  elem.style.backgroundImage = `url(${flower.image})`;
  elem.style.top = `${Math.random() * (window.innerHeight - 80) + 40}px`;
  elem.style.left = `${Math.random() * (window.innerWidth - 80) + 40}px`;

  elem.addEventListener('click', () => {
    elem.classList.add('bloom');
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = flower.message;
    messageDiv.style.display = 'block';
    setTimeout(() => messageDiv.style.display = 'none', 4000);
  });

  body.appendChild(elem);

  setTimeout(() => elem.classList.add('bloom'), Math.random() * 1000);
}

flowers.forEach(flower => createFlower(flower));

setInterval(() => {
  const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
  createFlower(randomFlower);
}, 7000);