export default function addBacklight(span, btn, e) {
  if (e.code === btn.dataset.code) {
    btn.append(span);
  }
};