import createElement from './create-element.js';
import checkSymbol from './check-symbol.js';

export default function createButtons(lang, keys) {
  const buttons = [];

  keys.forEach((rows) => {
    for (const rowsKey in rows) {
      let keyButton = createElement('button', 'key');
      let sub = createElement('span', 'keyboard__subkey');

      keyButton.dataset.code = rowsKey;

      if (typeof rows[rowsKey] === 'string') {
        keyButton.textContent = rows[rowsKey];
      }

      checkSymbol(rowsKey, rows[rowsKey], sub, keyButton, lang);

      buttons.push(keyButton);
    }
  });

  return buttons;
}