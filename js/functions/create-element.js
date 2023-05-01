export default function createElement(elem, className) {
  const element = document.createElement(elem);
  element.classList.add(className);

  return element;
}