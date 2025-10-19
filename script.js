const flowers = [
  { type: 'lily', image: 'images/lily.png', message: "You brighten my life like a lily in bloom!" },
  { type: 'orchid', image: 'images/orchid.png', message: "You are as rare and beautiful as an orchid." },
  { type: 'lily', image: 'images/lily.png', message: "Your smile is like sunshine to my garden." },
  { type: 'orchid', image: 'images/orchid.png', message: "Every moment with you is magical." },
  { type: 'lily', image: 'images/lily.png', message: "You make my heart bloom." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are my most precious flower." },
  { type: 'lily', image: 'images/lily.png', message: "You brighten my life like a lily in bloom!" },
  { type: 'orchid', image: 'images/orchid.png', message: "You are as rare and beautiful as an orchid." },
  { type: 'lily', image: 'images/lily.png', message: "Your smile is like sunshine to my garden." },
  { type: 'orchid', image: 'images/orchid.png', message: "Every moment with you is magical." },
  { type: 'lily', image: 'images/lily.png', message: "You make my heart bloom." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are my most precious flower." },
  { type: 'lily', image: 'images/lily.png', message: "Your presence feels like moonlight caressing a field of lilies." },
  { type: 'orchid', image: 'images/orchid.png', message: "In the quiet of my heart, your love blooms like an orchid in twilight." },
  { type: 'lily', image: 'images/lily.png', message: "You are the dawn that paints my soul in gentle gold." },
  { type: 'orchid', image: 'images/orchid.png', message: "Each breath I take carries your fragrance, delicate and rare." },
  { type: 'lily', image: 'images/lily.png', message: "Your smile is a petal unfolding in the spring of my heart." },
  { type: 'orchid', image: 'images/orchid.png', message: "Like orchids in the mist, your beauty feels ethereal and endless." },
  { type: 'lily', image: 'images/lily.png', message: "You are the soft rain that nurtures my garden of dreams." },
  { type: 'orchid', image: 'images/orchid.png', message: "Even silence becomes music when you are near." },
  { type: 'lily', image: 'images/lily.png', message: "The stars envy the light that shines within your eyes." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are the gentle chaos in my perfectly still heart." },
  { type: 'lily', image: 'images/lily.png', message: "I would cross fields of time just to watch you bloom again." },
  { type: 'orchid', image: 'images/orchid.png', message: "Your love lingers like the soft perfume of an orchid after dusk." },
  { type: 'lily', image: 'images/lily.png', message: "Every heartbeat whispers your name like a secret prayer." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are the poetry my soul keeps rewriting in silence." },
  { type: 'lily', image: 'images/lily.png', message: "In your eyes, I see the reflection of all my tomorrows." },
  { type: 'orchid', image: 'images/orchid.png', message: "The world fades into quiet beauty when you smile." },
  { type: 'lily', image: 'images/lily.png', message: "You bloom in my thoughts like a song that never ends." },
  { type: 'orchid', image: 'images/orchid.png', message: "If my heart were a garden, you’d be its most precious bloom." },
  { type: 'lily', image: 'images/lily.png', message: "Your laughter is sunlight spilling through morning petals." },
  { type: 'orchid', image: 'images/orchid.png', message: "Every glance from you is a touch softer than silk." },
  { type: 'lily', image: 'images/lily.png', message: "You make even the quiet moments shimmer with life." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are the echo of a dream I never want to wake from." },
  { type: 'lily', image: 'images/lily.png', message: "My world smells of lilies whenever I think of you." },
  { type: 'orchid', image: 'images/orchid.png', message: "Love drips from your voice like honey from a petal." },
  { type: 'lily', image: 'images/lily.png', message: "The night sky bows to your grace." },
  { type: 'orchid', image: 'images/orchid.png', message: "Every heartbeat feels like an orchid blooming inside me." },
  { type: 'lily', image: 'images/lily.png', message: "You turn every sigh into a sonnet." },
  { type: 'orchid', image: 'images/orchid.png', message: "In the garden of time, your love never wilts." },
  { type: 'lily', image: 'images/lily.png', message: "Your touch is the promise of spring eternal." },
  { type: 'orchid', image: 'images/orchid.png', message: "Your name tastes like poetry on my tongue." },
  { type: 'lily', image: 'images/lily.png', message: "The wind carries your laughter like a secret between flowers." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are the warmth that coaxes my heart to bloom." },
  { type: 'lily', image: 'images/lily.png', message: "Your love paints my soul in hues the sky could never hold." },
  { type: 'orchid', image: 'images/orchid.png', message: "When you look at me, even time forgets to move." },
  { type: 'lily', image: 'images/lily.png', message: "You are the verse my heart writes without ink." },
  { type: 'orchid', image: 'images/orchid.png', message: "Even orchids envy the tenderness of your soul." },
  { type: 'lily', image: 'images/lily.png', message: "You breathe color into my grayest days." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are a melody woven from moonlight and memory." },
  { type: 'lily', image: 'images/lily.png', message: "Each glance from you is a bloom unfurling in my heart." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are the dream that lingers long after dawn." },
  { type: 'lily', image: 'images/lily.png', message: "If I could plant a wish, it would bloom into you." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are the hush before the dawn — soft, eternal, and beautiful." },
  { type: 'lily', image: 'images/lily.png', message: "Your beauty hums like starlight caught in morning dew." },
  { type: 'orchid', image: 'images/orchid.png', message: "My heart is a garden, and you are its endless spring." },
  { type: 'lily', image: 'images/lily.png', message: "Every petal in my soul turns toward you." },
  { type: 'orchid', image: 'images/orchid.png', message: "The air itself holds its breath when you smile." },
  { type: 'lily', image: 'images/lily.png', message: "You are my forever bloom, untouched by time." },
  { type: 'orchid', image: 'images/orchid.png', message: "Even silence feels full when I am near you." },
  { type: 'lily', image: 'images/lily.png', message: "You are the light between my shadows." },
  { type: 'orchid', image: 'images/orchid.png', message: "Every orchid in the world bends in reverence to your beauty." },
  { type: 'lily', image: 'images/lily.png', message: "You are the rain that whispers life into my soul." },
  { type: 'orchid', image: 'images/orchid.png', message: "You bloom in my dreams where even the stars can’t reach." },
  { type: 'lily', image: 'images/lily.png', message: "Each heartbeat grows wild with your name." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are a fragile eternity wrapped in grace." },
  { type: 'lily', image: 'images/lily.png', message: "Your eyes hold the calm of endless meadows." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are the secret that makes the moon blush." },
  { type: 'lily', image: 'images/lily.png', message: "Even flowers lean toward the warmth of your soul." },
  { type: 'orchid', image: 'images/orchid.png', message: "Your touch feels like the first light of dawn." },
  { type: 'lily', image: 'images/lily.png', message: "The wind hums your name through fields of lilies." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are the whisper between heartbeats." },
  { type: 'lily', image: 'images/lily.png', message: "You are my forever spring." },
  { type: 'orchid', image: 'images/orchid.png', message: "Every petal in the world envies your softness." },
  { type: 'lily', image: 'images/lily.png', message: "You are sunlight stitched into my veins." },
  { type: 'orchid', image: 'images/orchid.png', message: "Your love blooms even in the quietest corners of my heart." },
  { type: 'lily', image: 'images/lily.png', message: "Your beauty teaches flowers how to bloom." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are the soft ache that makes love eternal." },
  { type: 'lily', image: 'images/lily.png', message: "You are the perfume of every dream I’ve ever had." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are the petal that completes my soul’s bouquet." },
  { type: 'lily', image: 'images/lily.png', message: "If the sky could love, it would love like you." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are a wish the stars granted me in silence." },
  { type: 'lily', image: 'images/lily.png', message: "You are a melody the wind refuses to forget." },
  { type: 'orchid', image: 'images/orchid.png', message: "You turn the world into poetry just by being in it." },
  { type: 'lily', image: 'images/lily.png', message: "You are the morning sun that never fades." },
  { type: 'orchid', image: 'images/orchid.png', message: "The air tastes like orchids when I think of you." },
  { type: 'lily', image: 'images/lily.png', message: "You are the petal pressed between my favorite dreams." },
  { type: 'orchid', image: 'images/orchid.png', message: "You make even eternity feel too short." },
  { type: 'lily', image: 'images/lily.png', message: "You are the garden where my heart finds peace." },
  { type: 'orchid', image: 'images/orchid.png', message: "The world feels softer where your footsteps fall." },
  { type: 'lily', image: 'images/lily.png', message: "Your love glows brighter than morning dew." },
  { type: 'orchid', image: 'images/orchid.png', message: "Even orchids dream of your touch." },
  { type: 'lily', image: 'images/lily.png', message: "You are the quiet miracle of my every sunrise." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are the soul of every gentle breeze." },
  { type: 'lily', image: 'images/lily.png', message: "The lilies blush when you pass by." },
  { type: 'orchid', image: 'images/orchid.png', message: "You are love in its purest bloom." }
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
