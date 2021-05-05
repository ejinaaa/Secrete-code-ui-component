// Write Javascript code here!

const $app = document.getElementById('app');
const contexts = document.querySelectorAll('.context');

const toggleContextMenu = e => {
  const target = e.target;
  const isContextShowed = [...contexts].some(
    $context => $context.style.display === 'block'
  );
  const showedContext = [...contexts].find(
    $context => $context.style.display === 'block'
  );

  if (isContextShowed) {
    showedContext.style.display = 'none';
    showedContext.parentNode.classList.remove('open');
  }

  if (target.matches('.item') && showedContext !== target.firstElementChild) {
    target.firstElementChild.style.display = 'block';
    target.classList.add('open');
  }
};

$app.addEventListener('click', toggleContextMenu);
