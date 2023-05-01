import createElement from './create-element.js';

export default function createMessage() {
  const messageWrapper = [];
  const messageOs = createElement('p', 'message__os');
  const messageOptions = createElement('p', 'message__options');
  messageOs.textContent = 'Клавиатура создана в операционной системе Windows';
  messageOptions.textContent = 'Для переключения языка комбинация: ctrl + alt';

  messageWrapper.push(messageOs, messageOptions);

  return messageWrapper;
};