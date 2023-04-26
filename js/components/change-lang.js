export default function changeLang(lang) {
  if (lang[0] === 'eng') {
    lang[0] = 'ru';
    lang[1] = 'eng';
  } else {
    lang[0] = 'eng';
    lang[1] = 'ru';
  }

  return lang;
}