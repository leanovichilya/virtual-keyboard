import createElement from './create-element.js';
import keys from './../data/keys.js';

export default function createKeyboard(container) {
  let layout = 'eng';
  const keyboard = createElement('div', 'keyboard');
  let row = createElement('div', 'keyboard__row');

  for (let i = 0; i < keys.length; i++) {
    let keyButton = createElement('button', 'key');
    let sub = createElement('span', 'keyboard__subkey');
    let main = createElement('span', 'keyboard__mainkey');
    main.textContent = keys[i].key;

    if (keys[i][layout]) {
      sub.dataset.language = layout;
      sub.textContent = keys[i][layout];
    }

    switch (keys[i].key) {
      case 'Backspace':
        keyButton.classList.add('keyboard__key-backspace');
        break;
      default:
        keyButton.classList.add('keyboard__key');
        keyButton.append(sub);
    }

    keyButton.append(main);
    row.append(keyButton);
  }

  keyboard.append(row);
  container.append(keyboard);
}