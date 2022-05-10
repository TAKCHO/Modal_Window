'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModel = function () {
  //   console.log('Button Clicked!');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const clodeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModel);

btnCloseModal.addEventListener('click', clodeModel);
overlay.addEventListener('click', clodeModel);

// ESC key to close

document.addEventListener('keydown', function (e) {
  // e stands for event
  //   console.log(e.key); // we know whick key is pressed

  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      clodeModel();
    }
  }
});
