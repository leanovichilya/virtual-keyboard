export default function setTextValue(e) {
  const textInput = document.querySelector('#field-input');

  console.log(e.target);

  if (e.target.closest('button') && e.target.dataset.key) {
    textInput.value += e.target.closest('button').dataset.key;
  }
};