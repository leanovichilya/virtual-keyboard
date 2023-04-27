import getValue from './get-value.js';

export default function setTextValue(e) {
  const textInput = document.querySelector('#field-input');
  textInput.focus();

  if (e.target.dataset.key) {
    textInput.value += getValue(e);
  } else if (e.target.dataset.special === 'space'){
    textInput.value += ' ';
  }
};