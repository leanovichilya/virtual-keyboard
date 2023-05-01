export default function changeKeysCase(caps, keys, keysText, capsLock) {
  if (caps) {
    keys.forEach((key) => key.dataset.key = key.dataset.key.toUpperCase());
    keysText.forEach((text) => text.textContent = text.textContent.toUpperCase());
    capsLock.style.backgroundColor = '#F44336';
  } else {
    keys.forEach((key) => key.dataset.key = key.dataset.key.toLowerCase());
    keysText.forEach((text) => text.textContent = text.textContent.toLowerCase());
    capsLock.style.backgroundColor = '';
  }
};