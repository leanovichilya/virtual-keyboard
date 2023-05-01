import createElement from './create-element.js';

export default function createTextField() {
  let input = [];
  const label = createElement('label', 'field__label');
  const textarea = createElement('textarea', 'field__input');

  label.htmlFor = 'field-input';
  textarea.id = 'field-input';
  textarea.rows = 10;
  textarea.autofocus = true;

  input.push(label, textarea);

  return input;
}