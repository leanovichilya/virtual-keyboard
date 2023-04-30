export default function checkSymbol(key, keys, sub, button, lang) {
  let classSpecialKey = '';

  switch (key) {
    case 'Backspace':
      classSpecialKey = '-backspace';
      break;
    case 'Tab':
      classSpecialKey = '-tab';
      break;
    case 'Delete':
      classSpecialKey = '-del';
      break;
    case 'CapsLock':
      classSpecialKey = '-caps';
      break;
    case 'Enter':
      classSpecialKey = '-enter';
      break;
    case 'ShiftLeft':
      classSpecialKey = '-shift-left';
      break;
    case 'ControlLeft':
      classSpecialKey = '-ctrl';
      break;
    case 'ControlRight':
      classSpecialKey = '-ctrl';
      break;
    case 'Space':
      classSpecialKey = '-space';
      break;
    default:
      button.textContent = keys.key || keys[lang[0]] || keys;
      sub.textContent = keys[lang[1]];
      button.append(sub);
  }

  button.classList.add(`keyboard__key${classSpecialKey}`);
}