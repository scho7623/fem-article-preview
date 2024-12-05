const shareBtn = document.querySelector('.share-container');
const profile = document.querySelector('.profile');
shareBtn.addEventListener('click', () => {
  profile.classList.toggle('share');
});
