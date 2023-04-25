export default function getValue(e) {
  let value = '';

  if (e.target.closest('BUTTON')
    && e.target.closest('BUTTON').dataset.key) {
    value = e.target.closest('BUTTON').dataset.key;
  } else if(e.target.closest('BUTTON').dataset.special === 'space'){
    value = ' ';
  }

  return value;
}