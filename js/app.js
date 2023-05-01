import createTextField from './functions/create-text-field.js';
import createElement from './functions/create-element.js';
import setTextValue from './functions/set-text-value.js';
import setLanguage from './data/set-language.js';
import switchLang from './functions/switch-lang.js';
import setSettings from './functions/set-settings.js';
import backlightButton from './functions/backlight-button.js';
import pressCapsLock from './functions/press-caps-lock.js';
import createNewLine from './functions/create-new-line.js';
import deleteSymbol from './functions/delete-symbol.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = createElement('div', 'container');
  const keyboard = createElement('div', 'keyboard');
  const field = createElement('div', 'field');
  let caps = false;
  let shift = false;

  setSettings(setLanguage(), keyboard);

  document.body.append(container);
  field.append(...createTextField());
  container.append(field);
  container.append(keyboard);

  switchLang(setLanguage(), keyboard);
  pressCapsLock(caps, shift);

  keyboard.addEventListener('click', setTextValue);
  keyboard.addEventListener('click', backlightButton);
  keyboard.addEventListener('click', createNewLine)
  keyboard.addEventListener('click', deleteSymbol);
  document.addEventListener('keydown', setTextValue);
  document.addEventListener('keydown', backlightButton);
});

