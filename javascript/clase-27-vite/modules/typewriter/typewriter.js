import Typewriter from 'typewriter-effect/dist/core';
const typewriterSpan = document.querySelector('.typewriter');

const typewriter = new Typewriter(typewriterSpan, {
  delay: 50,
  loop: true,
});

export const typewriterInit = () => {
  typewriter
    .pauseFor(1000)
    .typeString('Crypto')
    .pauseFor(300)
    .deleteChars(6)
    .typeString('Tecnología')
    .pauseFor(300)
    .deleteChars(10)
    .typeString('Nucba')
    .pauseFor(300)
    .start();
}