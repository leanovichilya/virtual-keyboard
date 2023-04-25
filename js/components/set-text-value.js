import getValue from './get-value.js';

export default function setTextValue(e) {
  const textinput = document.querySelector('#field-input');

  if (e.target.dataset.key) {
    textinput.value += getValue(e);
  } else if (e.target.dataset.special === 'space'){
    textinput.value += ' ';
  }
};