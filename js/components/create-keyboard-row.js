import createElement from './create-element.js';
import checkSymbol from './check-symbol.js';

export default function createKeyboardRow(lang, keys) {
  let row = createElement('div', 'keyboard__row');

  for (let i = 0; i < keys.length; i++) {
    let keyButton = createElement('button', 'key');
    let sub = createElement('span', 'keyboard__subkey');

    if (keys[i].special) {
      keyButton.textContent = keys[i].special;
      keyButton.dataset.special = keys[i].special;
    } else {
      keyButton.textContent = keys[i][lang[0]];
      keyButton.dataset.key = keys[i][lang[0]];
    }

    checkSymbol(keyButton, sub, keys[i], lang);

    row.append(keyButton);
  }

  return row;
}