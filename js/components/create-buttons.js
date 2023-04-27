import createElement from './create-element.js';
import checkSymbol from './check-symbol.js';
import checkKey from './check-key.js';

export default function createButtons(lang, keys) {
  const buttons = [];

  for (let i = 0; i < keys.length; i++) {
    let keyButton = createElement('button', 'key');
    let sub = createElement('span', 'keyboard__subkey');

    checkKey(keys[i], keyButton, lang);
    checkSymbol(keyButton, sub, keys[i], lang);

    buttons.push(keyButton);
  }

  return buttons;
}