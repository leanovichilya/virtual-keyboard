import createElement from './create-element.js';

export default function backlightButton(e) {
  const span = createElement('span', 'key__backlight');
  span.style.animationName = 'clickButton';

  if (e.type === 'click' && e.target.closest('.key')) {
    e.target.closest('.key').append(span);
  } else {
    const buttons = document.querySelectorAll('.key');
    buttons.forEach((btn) => {
      if (e.code === btn.dataset.code) {
        if (e.code === 'Tab') {
          e.preventDefault();
        }
        btn.append(span);
      }
    });
  }

  setTimeout(() => {
    span.remove();
  }, 500);
}