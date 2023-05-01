export default function checkSymbol(key, keys, sub, button, lang, span) {
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
    case 'ShiftRight':
      classSpecialKey = '-shift-right';
      break;
    case 'ControlLeft':
    case 'ControlRight':
      classSpecialKey = '-ctrl';
      break;
    case 'Space':
      classSpecialKey = '-space';
      button.dataset.key = ' ';
      break;
    case 'AltLeft':
    case 'AltRight':
      classSpecialKey = '-alt';
      break;
    case 'ArrowUp':
    case 'ArrowLeft':
    case 'ArrowRight':
    case 'ArrowDown':
      classSpecialKey = '-arrow';
      break;
    case 'MetaLeft':
      classSpecialKey = '-meta';
      break;
    default:
      span.textContent = keys.key || keys[lang[0]] || keys;
      button.dataset.key = keys.key || keys[lang[0]];
      sub.textContent = keys[lang[1]];
      button.append(span);
      button.append(sub);
  }

  button.classList.add(`keyboard__key${classSpecialKey}`);
}