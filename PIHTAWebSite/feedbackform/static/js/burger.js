const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const blockOne = document.querySelector('.block-one');
const body = document.body;

if (hamburger) {
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
    blockOne.classList.toggle('hide-text');
    blockOne.classList.toggle('hide-border');
    body.classList.toggle('no-scroll');
  });

  navList.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navList.classList.remove('active');
    blockOne.classList.remove('hide-text');
    blockOne.classList.remove('hide-border');
    body.classList.remove('no-scroll');
  });
}