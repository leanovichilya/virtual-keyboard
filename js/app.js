import createTextField from './functions/create-text-field.js';
import createElement from './functions/create-element.js';
import setTextValue from './functions/set-text-value.js';
import setLanguage from './data/set-language.js';
import switchLang from './functions/switch-lang.js';
import setSettings from './functions/set-settings.js';
import backlightButtonClick from './functions/backlight-button.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = createElement('div', 'container');
  const keyboard = createElement('div', 'keyboard');
  const field = createElement('div', 'field');

  setSettings(setLanguage(), keyboard);

  document.body.append(container);
  field.append(...createTextField());
  container.append(field);
  container.append(keyboard);

  switchLang(setLanguage(), keyboard);

  keyboard.addEventListener('click', setTextValue);
  keyboard.addEventListener('click', backlightButtonClick);
});

