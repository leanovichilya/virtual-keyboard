import changeKeysCase from './change-keys-case.js';

export default function pressCapsLock(caps) {
  let keys = document.querySelectorAll('button[data-key]');
  let keysText = Array.from(keys).map((key) => key.querySelector('.key__name'));
  let capsLock = document.querySelector('button[data-code="CapsLock"]');

  document.addEventListener('keydown', (e) => {
    if (e.code === 'CapsLock') {
      caps = !caps;
      changeKeysCase(caps, keys, keysText, capsLock);
    }
  });
};