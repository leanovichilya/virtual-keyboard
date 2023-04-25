export default function checkSymbol(button, sub, key, lang) {
  switch (key.special) {
    case 'backspace':
      button.classList.add('keyboard__key-backspace');
      button.textContent = 'Backspace';
      break;
    case 'tab':
      button.classList.add('keyboard__key-tab');
      button.textContent = key.special.toUpperCase();
      break;
    case 'del':
      button.classList.add('keyboard__key-del');
      button.textContent = key.special.toUpperCase();
      break;
    case 'capslock':
      button.classList.add('keyboard__key-caps');
      button.textContent = 'Caps Lock';
      break;
    case 'enter':
      button.classList.add('keyboard__key-enter');
      button.textContent = 'Enter';
      break;
    case 'shiftL':
      button.classList.add('keyboard__key-shift-left');
      button.textContent = 'Shift';
      break;
    case 'shiftR':
      button.classList.add('keyboard__key');
      button.textContent = 'Shift';
      break;
    case 'ctrl':
      button.classList.add('keyboard__key-ctrl');
      button.textContent = 'Ctrl';
      break;
    case 'space':
      button.classList.add('keyboard__key-space');
      button.textContent = ' ';
      break;
    case 'top':
      button.classList.add('keyboard__key');
      button.textContent = '△';
      break;
    case 'win':
      button.classList.add('keyboard__key');
      button.textContent = '⊞';
      break;
    case 'left':
      button.classList.add('keyboard__key');
      button.textContent = '◁';
      break;
    case 'down':
      button.classList.add('keyboard__key');
      button.textContent = '▽';
      break;
    case 'right':
      button.classList.add('keyboard__key');
      button.textContent = '▷';
      break;
    default:
      sub.dataset.language = lang[1];
      sub.textContent = key[lang[1]];
      button.classList.add('keyboard__key');
      button.append(sub);
  }
}