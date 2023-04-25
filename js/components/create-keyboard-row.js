import createElement from './create-element.js';

export default function createKeyboardRow(lang, keys) {
  let row = createElement('div', 'keyboard__row');

  for (let i = 0; i < keys.length; i++) {
    let keyButton = createElement('button', 'key');
    let sub = createElement('span', 'keyboard__subkey');

    if (keys[i].key) {
      keyButton.textContent = keys[i].key;
      keyButton.dataset.special = keys[i].key;
    } else {
      keyButton.textContent = keys[i][lang[0]];
      keyButton.dataset.key = keys[i][lang[0]];
    }

    switch (keys[i].key) {
      case 'backspace':
        keyButton.classList.add('keyboard__key-backspace');
        keyButton.textContent = 'Backspace';
        break;
      case 'tab':
        keyButton.classList.add('keyboard__key-tab');
        keyButton.textContent = keys[i].key.toUpperCase();
        break;
      case 'del':
        keyButton.classList.add('keyboard__key-del');
        keyButton.textContent = keys[i].key.toUpperCase();
        break;
      case 'Caps Lock':
        keyButton.classList.add('keyboard__key-caps');
        break;
      case 'enter':
        keyButton.classList.add('keyboard__key-enter');
        keyButton.textContent = 'Enter';
        break;
      case 'shiftL':
        keyButton.classList.add('keyboard__key-shift-left');
        keyButton.textContent = 'Shift';
        break;
      case 'shiftR':
        keyButton.classList.add('keyboard__key');
        keyButton.textContent = 'Shift';
        break;
      case 'Ctrl':
        keyButton.classList.add('keyboard__key-ctrl');
        break;
      case 'Space':
        keyButton.classList.add('keyboard__key-space');
        keyButton.textContent = ' ';
        break;
      default:
        sub.dataset.language = lang[1];
        sub.textContent = keys[i][lang[1]];
        keyButton.classList.add('keyboard__key');
        keyButton.append(sub);
    }

    row.append(keyButton);
  }

  return row;
}