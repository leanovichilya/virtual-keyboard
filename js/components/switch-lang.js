import changeLang from './change-lang.js';
import createKeyboard from './create-keyboard.js';

export default function switchLang(lang, keyboard) {

  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.ctrlKey) {
      lang = changeLang(lang);
      keyboard.innerHTML = '';

      createKeyboard(lang).forEach((row) => {
        keyboard.innerHTML += row.outerHTML;
      });
    }
  });

}