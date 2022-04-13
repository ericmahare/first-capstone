/* eslint-disable linebreak-style */
const mobNav = document.querySelector('.mobile-menu');

// show navigation
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-bars')) {
    mobNav.style.cssText = `
      top:0;
      right:0;
    `;
  }
});
// hide navigation
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-xmark')) {
    mobNav.style.cssText = `
      top: -9999px;
      left:-9999px;
    `;
  }
});