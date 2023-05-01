export default function createNewLine(e) {
  const textInput = document.querySelector('.field__input');

  if (e.target.classList.contains('key__name') && e.target.closest('button').dataset.code === 'Enter') {
    textInput.focus();
    textInput.value += '\n';
  }
};