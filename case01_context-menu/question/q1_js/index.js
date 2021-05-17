// Write Javascript code here!

const $app = document.getElementById('app');
const $items = document.querySelectorAll('.item');

$app.addEventListener('click', e => {
  const targetEl = e.target;

  if (targetEl.matches('.context')) return;

  if (targetEl.matches('.item')) targetEl.classList.toggle('open');

  $items.forEach($item => $item !== targetEl && $item.classList.remove('open'));
});
