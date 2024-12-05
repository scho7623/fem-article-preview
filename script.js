const shareBtns = document.querySelectorAll('.share-button');
const share = document.querySelector('.share');

for (let button of shareBtns) {
  button.addEventListener('click', () => {
    share.classList.toggle('open');
  });
}
