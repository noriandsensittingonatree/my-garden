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

// Create popup container
const popup = document.createElement('div');
popup.id = 'popup';
popup.style.position = 'fixed';
popup.style.top = '50%';
popup.style.left = '50%';
popup.style.transform = 'translate(-50%, -50%)';
popup.style.background = 'rgba(255, 255, 255, 0.9)';
popup.style.border = '2px solid #d8bfd8';
popup.style.borderRadius = '12px';
popup.style.padding = '20px 30px';
popup.style.textAlign = 'center';
popup.style.maxWidth = '400px';
popup.style.display = 'none';
popup.style.zIndex = '999';
popup.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
body.appendChild(popup);

const popupMessage = document.createElement('p');
popupMessage.id = 'popup-message';
popupMessage.style.marginBottom = '15px';
popupMessage.style.fontFamily = 'serif';
popupMessage.style.fontSize = '18px';
popupMessage.style.color = '#4a3f58';
popup.appendChild(popupMessage);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'Close';
closeBtn.style.background = '#d8bfd8';
closeBtn.style.border = 'none';
closeBtn.style.padding = '8px 16px';
closeBtn.style.borderRadius = '6px';
closeBtn.style.cursor = 'pointer';
closeBtn.style.fontSize = '16px';
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
popup.appendChild(closeBtn);

// Flower creation
function createFlower(flower) {
  const elem = document.createElement('div');
  elem.className = 'flower';
  elem.style.backgroundImage = `url(${flower.image})`;
  elem.style.backgroundSize = 'contain';
  elem.style.backgroundRepeat = 'no-repeat';
  elem.style.width = '60px';
  elem.style.height = '60px';
  elem.style.position = 'absolute';
  elem.style.top = `${Math.random() * (window.innerHeight - 100) + 40}px`;
  elem.style.left = `${Math.random() * (window.innerWidth - 100) + 40}px`;
  elem.style.cursor = 'pointer';
  elem.style.transition = 'transform 0.5s ease, opacity 1s ease';
  elem.style.opacity = '0';

  // append and fade in
  document.body.appendChild(elem);
  setTimeout(() => {
    elem.classList.add('bloom');
    elem.style.opacity = '1';
  }, 100);

  // click behavior (fade out + show popup)
  elem.addEventListener('click', () => {
    elem.style.opacity = '0';
    elem.style.transform = 'scale(0.8)';
    setTimeout(() => elem.remove(), 1000); // wait for fade
    popupMessage.textContent = flower.message;
    popup.style.display = 'block';
  });

  // auto remove after 25s (fade out first)
  setTimeout(() => {
    if (document.body.contains(elem)) {
      elem.style.opacity = '0';
      elem.style.transform = 'scale(0.8)';
      setTimeout(() => elem.remove(), 1000); // smooth fade
    }
  }, 25000);
}

// Spawn flowers continuously
function spawnLoop() {
  const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
  createFlower(randomFlower);

  // spawn again in 10–15 seconds
  const nextDelay = Math.random() * 5000 + 10000;
  setTimeout(spawnLoop, nextDelay);
}

// Start with an empty screen, then begin spawning
window.addEventListener('load', () => {
  setTimeout(spawnLoop, 2000); // slight delay before first flower appears
});
