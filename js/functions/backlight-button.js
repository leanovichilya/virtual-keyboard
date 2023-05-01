import createElement from './create-element.js';
import removeBacklight from './remove-backlight.js';
import addBacklight from './add-backlight.js';
import createBacklightSpan from './create-backlight-span.js';

export default function backlightButton(e) {
  const span = createBacklightSpan();

  if (e.type === 'click' && e.target.closest('.key')) {
    e.target.closest('.key').append(span);
  } else {
    const buttons = document.querySelectorAll('.key');

    buttons.forEach((btn) => {
      if (e.code === 'Tab') {
        e.preventDefault();
      }

      if (e.code === 'CapsLock') {
        return;
      }

      addBacklight(span, btn, e);
      removeBacklight(span);
    });
  }
}