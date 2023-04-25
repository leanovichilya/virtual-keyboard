export default function (button, key, lang) {
  if (key.special) {
    button.textContent = key.special;
    button.dataset.special = key.special;
  } else if (key.key) {
    button.textContent = key.key;
    button.dataset.key = key.key;
  } else {
    button.textContent = key[lang[0]];
    button.dataset.key = key[lang[0]];
  }

  return button;
}