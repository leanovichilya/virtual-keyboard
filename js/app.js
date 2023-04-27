import createTextField from './components/create-text-field.js';
import createElement from './components/create-element.js';
import setTextValue from './components/set-text-value.js';
import langs from './data/langs.js';
import switchLang from './components/switch-lang.js';
import setSettings from './components/set-settings.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = createElement('div', 'container');
  const keyboard = createElement('div', 'keyboard');
  const field = createTextField();

  setSettings(langs(), keyboard);

  document.body.append(container);
  container.append(field);
  container.append(keyboard);
  switchLang(langs(), keyboard);

  keyboard.addEventListener('click', setTextValue);
});

