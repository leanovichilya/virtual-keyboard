export default function checkKey(keys, button, lang) {
  if (keys.special) {
    button.textContent = keys.special;
    button.dataset.special = keys.special;
  } else if (keys.key) {
    button.textContent = keys.key;
    button.dataset.key = keys.key;
  } else {
    button.textContent = keys[lang[0]];
    button.dataset.key = keys[lang[0]];
  }
}