import createTextField from './components/create-text-field.js';
import createElement from './components/create-element.js';
import createKeyboard from './components/create-keyboard.js';

document.addEventListener('DOMContentLoaded', () => {
  document.body.append(createElement('div', 'container'));

  const container = document.querySelector('.container');

  createTextField(container);
  createKeyboard(container);
});

