export default function deleteSymbol(e) {
  const textInput = document.querySelector('.field__input');

  if (e.target.classList.contains('key__name') && e.target.closest('button').dataset.code === 'Backspace') {
    textInput.focus();
    textInput.value = textInput.value.slice(0, -1);
  }
};