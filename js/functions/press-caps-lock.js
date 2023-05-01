export default function pressCapsLock(caps) {
  let keys = document.querySelectorAll('button[data-key]');
  let keysText = Array.from(keys).map((key) => key.querySelector('.key__name'));

  document.addEventListener('keydown', (e) => {
    if (e.code === 'CapsLock') {
      caps = !caps;

      if (caps) {
        keys.forEach((key) => key.dataset.key = key.dataset.key.toUpperCase());
        keysText.forEach((text) => text.textContent = text.textContent.toUpperCase());
      } else {
        keys.forEach((key) => key.dataset.key = key.dataset.key.toLowerCase());
        keysText.forEach((text) => text.textContent = text.textContent.toLowerCase());
      }
    }
  });
};