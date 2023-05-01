import createKeys from '../data/create-keys.js';
import createButtons from './create-buttons.js';

export default function createRows(lang) {
  const rows = [];

  createKeys().forEach((key) => {
    const row = createButtons(lang, key);
    rows.push(row);
  });

  return rows;
}