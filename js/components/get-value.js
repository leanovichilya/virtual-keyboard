export default function getValue(e) {
  let value = '';

  if (e.target.closest('BUTTON')
    && e.target.closest('BUTTON').dataset.key) {
    value = e.target.closest('BUTTON').dataset.key;
  }

  return value;
};