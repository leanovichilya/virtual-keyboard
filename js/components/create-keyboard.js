import createKeys from '../data/create-keys.js';
import createElement from './create-element.js';
import createKeyboardRow from './create-keyboard-row.js';
import changeLanguage from './change-language.js';

export default function createKeyboard(container) {
  let lang = changeLanguage('ru');
  const keyboard = createElement('div', 'keyboard');

  createKeys().forEach((key) => {
    const row = createKeyboardRow(lang, key);
    keyboard.append(row);
  });

  container.append(keyboard);
}