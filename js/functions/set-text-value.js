export default function setTextValue(e) {
  const textInput = document.querySelector('#field-input');

  if (e.target.classList.contains('key__name') &&
    e.target.closest('button').dataset.key) {
    textInput.value += e.target.closest('button').dataset.key;
  }
};