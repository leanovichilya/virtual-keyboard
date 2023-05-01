import setSettings from './set-settings.js';
import changeLang from './change-lang.js';

export default function switchLang(lang, keyboard) {

  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.ctrlKey) {
      lang = changeLang(lang);
      setSettings(lang, keyboard);
    }
  });

}