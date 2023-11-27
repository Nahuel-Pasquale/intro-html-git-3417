import ScrollReveal from 'scrollreveal';

const discoverSection = document.getElementById('discover');
const infoSection = document.getElementById('info');
const productsSection = document.getElementById('products');
const heroSection = document.getElementById('hero');

const revealSection = (section) => {
  ScrollReveal().reveal(section, {
    delay: 200,
    distance: '100px',
    duration: 1000,
    origin: 'bottom',
    reset: false,
  });
}

export const scrollEffectsInit = () => {
  revealSection(heroSection);
  revealSection(discoverSection);
  revealSection(infoSection);
  revealSection(productsSection);
}