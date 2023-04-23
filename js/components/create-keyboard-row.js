import createElement from './create-element.js';

export default function createKeyboardRow(lang, keys) {
  let row = createElement('div', 'keyboard__row');

  for (let i = 0; i < keys.length; i++) {
    let keyButton = createElement('button', 'key');
    let sub = createElement('span', 'keyboard__subkey');
    let main = createElement('span', 'keyboard__mainkey');

    if (keys[i].key) {
      main.textContent = keys[i].key;
    } else {
      main.textContent = keys[i][lang[0]];
    }

    switch (keys[i].key) {
      case 'Backspace':
        keyButton.classList.add('keyboard__key-backspace');
        break;
      case 'TAB':
        keyButton.classList.add('keyboard__key-tab');
        break;
      case 'DEL':
        keyButton.classList.add('keyboard__key-del');
        break;
      case 'Caps Lock':
        keyButton.classList.add('keyboard__key-caps');
        break;
      case 'Enter':
        keyButton.classList.add('keyboard__key-enter');
        break;
      case 'ShiftL':
        keyButton.classList.add('keyboard__key-shift-left');
        main.textContent = 'Shift';
        break;
      case 'Ctrl':
        keyButton.classList.add('keyboard__key-ctrl');
        break;
      case 'Space':
        keyButton.classList.add('keyboard__key-space');
        main.textContent = '';
        break;
      default:
        sub.dataset.language = lang[1];
        sub.textContent = keys[i][lang[1]];
        keyButton.classList.add('keyboard__key');
        keyButton.append(sub);
    }

    keyButton.append(main);
    row.append(keyButton);
  }

  return row;
}