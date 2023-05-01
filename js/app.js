import createTextField from './components/create-text-field.js';
import createElement from './components/create-element.js';
import setTextValue from './components/set-text-value.js';
import setLanguage from './data/set-language.js';
import switchLang from './components/switch-lang.js';
import setSettings from './components/set-settings.js';
import backlightButton from './components/backlight-button.js';

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
  keyboard.addEventListener('click', backlightButton);
});

