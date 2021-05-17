// Import stylesheets
// import './style.css'; // 이거 왜 import 안돼는거야????

// Write Javascript code here!
const items = document.querySelectorAll('details');

document.body.addEventListener('click', e => {
  const targetEl = e.target;
  if (targetEl.matches('p')) return;
  items.forEach(item => {
    targetEl.parentElement !== item && item.removeAttribute('open');
  });
});
