import changeKeysCase from './change-keys-case.js';

export default function pressCapsLock(caps, shift) {
  document.addEventListener('keydown', (e) => {
    let keys = document.querySelectorAll('button[data-key]');
    let capsLock = document.querySelector('button[data-code="CapsLock"]');

    if (e.code === 'CapsLock') {
      caps = !caps;
      changeKeysCase(caps, keys);
    }

    if (e.key === 'Shift') {
      shift = !shift;
      changeKeysCase(shift, keys);
    }

    capsLock.style.backgroundColor = caps ? '#F44336' : '';
  });

  document.addEventListener('keyup', (e) => {
    let keys = document.querySelectorAll('button[data-key]');
    if (e.key === 'Shift') {
      shift = !shift;
      changeKeysCase(shift, keys);
    }
  });
};