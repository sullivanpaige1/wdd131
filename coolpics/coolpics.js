const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hide');
});

function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
  }
}

window.addEventListener('resize', handleResize);
handleResize();
