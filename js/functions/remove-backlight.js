export default function removeBacklight(span) {
  setTimeout((span) => {span.remove()}, 500, span);
};