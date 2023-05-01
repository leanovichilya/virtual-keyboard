import createElement from './create-element.js';

export default function backlightButton(e) {
  let span = createElement('span', 'key__backlight');

  if (e.target.closest('.key')) {
    e.target.closest('.key').append(span);
    span.style.animationName = 'clickButton';

    setTimeout(() => {
      span.remove();
    }, 500);
  }
}