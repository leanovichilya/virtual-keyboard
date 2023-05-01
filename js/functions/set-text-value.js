export default function setTextValue(e) {
  const textInput = document.querySelector('#field-input');

  if (e.type === 'click') {
    if (e.target.classList.contains('key__name') &&
      e.target.closest('button').dataset.key) {
      textInput.value += e.target.closest('button').dataset.key;
    }
  } else {
    const keys = document.querySelectorAll('button[data-key]');

    keys.forEach((key) => {
      if (e.code === key.dataset.code) {
        e.preventDefault();
        textInput.value += key.dataset.key;
      }
    });
  }
};