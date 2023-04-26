import createArrayRows from './create-array-rows.js';
import createElement from './create-element.js';

export default function createKeyboard(lang) {
  let rowsContainer = [];

  createArrayRows(lang).forEach((rows) => {
    let row = createElement('div', 'keyboard__row');
    row.append(...rows);
    rowsContainer.push(row);
  });

  return rowsContainer;
}