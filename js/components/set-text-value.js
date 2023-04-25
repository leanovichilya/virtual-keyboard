import getValue from './get-value.js';

export default function setTextValue(e) {
  const textinput = document.querySelector('#field-input');

  textinput.value += getValue(e);
};