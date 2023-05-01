export default function changeLang(lang) {
  lang.unshift(lang.pop());

  return lang;
}