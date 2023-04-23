import createElement from './create-element.js';

export default function createTextField(container) {
  const field = createElement('div', 'field');
  const label = createElement('label', 'field__label');
  const textarea = createElement('textarea', 'field__input');

  label.htmlFor = 'field-input';
  textarea.id = 'field-input';
  textarea.rows = 10;

  container.append(field);
  field.append(label, textarea);
}