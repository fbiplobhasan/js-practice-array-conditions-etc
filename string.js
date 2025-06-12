// const country = 'Bangladesh';
// const division = 'new khal e';
// const district = `B-Baria`;
// const thana = new String('Demra');

// // console.log(thana);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers[1] = 11;
// console.log(numbers);
// // console.log(numbers.length);
// // console.log(numbers[0]);

// const capital = 'Dhaka';
// console.log(capital.length);
// console.log(capital[2]);

const numbers = [4, 6, 8, 9, 45, 87, 16, 869];

const number_asc = [...numbers].sort(function (a, b) { return a - b })
const number_dsc = [...numbers].sort(function (a, b) { return b - a })

console.log(number_asc);
console.log(number_dsc);