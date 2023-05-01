import createElement from './create-element.js';

export default function createBacklightSpan() {
  const span = createElement('span', 'key__backlight');
  span.style.animationName = 'clickButton';

  return span;
}