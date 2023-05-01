export default function deleteSymbol(e) {
  const textInput = document.querySelector('.field__input');
  textInput.focus();

  if (e.target.classList.contains('key__name') && e.target.closest('button').dataset.code === 'Backspace') {
    textInput.value = textInput.value.slice(0, -1);
  } else if (e.target.classList.contains('key__name') && e.target.closest('button').dataset.code === 'Delete') {
    textInput.value = textInput.value.slice(0, -1);
  }
};