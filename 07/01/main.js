/* eslint-disable linebreak-style */
const formInput = document.body.querySelector('.form__item__input');
let numbers = [];

// let input = ['+', '7', '(', ')', '-', '-', , , '-', , ,]

function inputOnKeyUp(event) {
  if (event.which === 8 || event.which === 46) {
    let string = formInput.value;

    numbers = []
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) <= 57 && string.charCodeAt(i) >= 48) {
        numbers.push(Number(string[i]));
      }
    }
    formInput.value = numbers.join('');
  }
}

function inputOnKeyPress(event) {
  if (event.which !== 0 && event.charCode !== 0) { // все кроме IE
    event.preventDefault();
    if (event.which <= 57 && event.which >= 48) {
      let pos = event.target.selectionStart;

      //numbers.push(String.fromCharCode(event.which));
      if (numbers.length === pos) {
        numbers.push(String.fromCharCode(event.which));
      }
      else{
        if (numbers.length > pos && pos < 16) {
          let i = 15;

          for (; i > pos; i--) {
            numbers[i] = numbers[i - 1];
          }
          numbers[i] = String.fromCharCode(event.which);
        }
      }

      formInput.value = numbers.join('');
    }
  }
  // if (event.target.selectionStart === 0) {

  // if (formInput.value.toString().length === 0) {
  //   formInput.value += '+';
  // }
  //
  // if (formInput.value.toString().length === 2) {
  //   formInput.value += '(';
  // }
  //
  // if (formInput.value.toString().length === 6) {
  //   formInput.value += ')';
  // }
  //
  // if (formInput.value.toString().length === 7
  //   || formInput.value.toString().length === 11
  //   || formInput.value.toString().length === 14) {
  //   formInput.value += '-';
  // }
}

// function inputOnKeyUp(event) {
//   let cur = event.target.value;
//
//   for (let i = 0; i < cur.length; i++) {
//     let curNum = parseInt(cur[i], 10);
//
//     if (!(isNaN(curNum))) {
//       numbers[numbers.length] = curNum;
//     }
//   }
//   if (numbers > 0) {
//     event.target.value = input[0].toString() + input[1].toString() + input[2].toString() + numbers.slice(0, 2).toString();
//   }
//   if (numbers > 4) {
//     event.target.value += input[3].toString() + input[4].toString() + numbers.slice(3, 5).toString();
//   }
//   if (numbers < 6) {
//     event.target.value = input[0].toString() + input[1].toString() + input[2].toString() + numbers.slice(0, 2).toString();
//   }
// }
formInput.addEventListener('keyup', inputOnKeyUp);
formInput.addEventListener('keypress', inputOnKeyPress);


// formInput.addEventListener('keyup', inputOnKeyUp);

// document.addEventListener('DOMContentLoaded', function () {
//   let text = formInput.value;
//
//   formInput.addEventListener('input', function(event) {
//     if (this.value.length <= text.length) {
//       let position = this.selectionStart + 1;
//
//       this.value = text;
//       this.setSelectionRange(position, position);
//
//     }
//   });
// });
