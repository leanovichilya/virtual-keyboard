import createKeys from '../data/create-keys.js';
import createElement from './create-element.js';
import createKeyboardRow from './create-keyboard-row.js';

export default function createKeyboard(lang) {
  const rows = [];

  createKeys().forEach((key) => {
    const row = createKeyboardRow(lang, key);
    rows.push(row);
  });

  return rows;
}