import createTextField from './components/create-text-field.js';
import createElement from './components/create-element.js';
import setTextValue from './components/set-text-value.js';
import createKeyboard from './components/create-keyboard.js';
import langs from './data/langs.js';
import switchLang from './components/switch-lang.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = createElement('div', 'container');
  const keyboard = createElement('div', 'keyboard');
  let keyboardContainer = createElement('div', 'keyboard__container');
  const field = createTextField();

  document.body.append(container);

  keyboardContainer.append(...createKeyboard(langs()));
  keyboard.append(keyboardContainer);
  container.append(field);
  container.append(keyboard);

  keyboard.addEventListener('click', setTextValue);
  switchLang(langs(), keyboardContainer);
});

