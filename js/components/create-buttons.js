import createElement from './create-element.js';
import checkSymbol from './check-symbol.js';

export default function createButtons(lang, keys) {
  const buttons = [];

  keys.forEach((rows) => {
    for (const rowsKey in rows) {
      let keyButton = createElement('button', 'key');
      let span = createElement('span', 'key__name');
      let sub = createElement('span', 'keyboard__subkey');

      keyButton.dataset.code = rowsKey;
      keyButton.type = 'button';

      if (typeof rows[rowsKey] === 'string') {
        span.textContent = rows[rowsKey];
        keyButton.append(span);
      }

      checkSymbol(rowsKey, rows[rowsKey], sub, keyButton, lang, span);

      buttons.push(keyButton);
    }
  });

  return buttons;
}