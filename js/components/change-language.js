export default function changeLanguage (lang) {
  let sub;

  if (lang === 'eng') {
    sub = 'ru';
  } else {
    sub = 'eng';
  }

  return [lang, sub];
};