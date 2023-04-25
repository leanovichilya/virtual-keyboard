import createTextField from './components/create-text-field.js';
import createElement from './components/create-element.js';
import createKeyboard from './components/create-keyboard.js';
import getValue from './components/get-value.js';
import setTextValue from './components/set-text-value.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = createElement('div', 'container');
  const field = createTextField();
  const keyboard = createKeyboard();
  document.body.append(container);

  container.append(field);
  container.append(keyboard);

  keyboard.addEventListener('click', setTextValue);
});

