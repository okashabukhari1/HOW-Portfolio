import { animate, stagger } from 'animejs';

export function animatePageEntry(containerSelector) {
  if (typeof window === 'undefined') return;
  const el = document.querySelector(containerSelector);
  if (!el) return;

  animate(el, {
    opacity: [0, 1],
    translateY: [24, 0],
    duration: 650,
    ease: 'outCubic'
  });
}

export function animateStaggerCards(cardsSelector) {
  if (typeof window === 'undefined') return;
  const cards = document.querySelectorAll(cardsSelector);
  if (!cards.length) return;

  animate(cards, {
    opacity: [0, 1],
    translateY: [30, 0],
    scale: [0.97, 1],
    delay: stagger(100),
    duration: 600,
    ease: 'outQuad'
  });
}
