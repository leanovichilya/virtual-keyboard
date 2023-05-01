export default function changeKeysCase(caps, keys) {
  keys.forEach((key) => {
    let dataKey = key.dataset.key;
    let text = key.firstChild.textContent;

    key.dataset.key = caps ? dataKey.toUpperCase() : dataKey.toLowerCase();
    key.firstChild.textContent = caps ? text.toUpperCase() : text.toLowerCase();
  });
};