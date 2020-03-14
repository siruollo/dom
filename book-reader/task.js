'use strict';

// Решение, учитывающее только размер шрифта
//
// const fontSizeControls = document.querySelectorAll('.font-size');
// fontSizeControls.forEach(control => {
//   control.addEventListener('click', (event) => {
//     event.preventDefault();
//
//     document.querySelector('.font-size_active').classList.remove('font-size_active');
//
//     control.classList.add('font-size_active');
//
//     const fontSize = control.dataset.size;
//     document.querySelector('.book').className = fontSize
//       ? `book book_fs-${fontSize}`
//       : `book`;
//   });
// });


// Решение, учитывающее все параметры
//
const textControl = function(control) {
  control.addEventListener('click', event => {
    event.preventDefault();

    const baseClass = control.className.split(' ')[0];
    control.parentElement.querySelector(`.${baseClass}_active`).classList.remove(`${baseClass}_active`);
    control.classList.add(`${baseClass}_active`);

    const book = document.querySelector('.book');
    const dataType = control.parentElement.className.split(' ')[1];
    let dataClass;
    if (dataType === 'book__control_font-size') {
      book.classList.remove('book_fs-big', 'book_fs-small');
      dataClass = `book_fs-${control.dataset.size}`;
    } else if (dataType === 'book__control_color') {
      book.classList.remove('book_color-gray', 'book_color-whitesmoke');
      dataClass = `book_color-${control.dataset.color}`;
    } else if (dataType === 'book__control_background') {
      book.classList.remove('book_bg-gray', 'book_bg-black');
      dataClass = `book_bg-${control.dataset.color}`;
    }
    if (dataClass.split('-')[1] !== 'undefined') {
      book.classList.add(dataClass);
    }
  });
};

const controls = document.querySelectorAll('.book__control a');
controls.forEach(textControl);