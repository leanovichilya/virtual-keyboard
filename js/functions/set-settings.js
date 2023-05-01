import createKeyboard from './create-keyboard.js';

export default function setSettings(lang, keyboard) {
  keyboard.innerHTML = '';

  createKeyboard(lang).forEach((row) => {
    keyboard.innerHTML += row.outerHTML;
  });
};