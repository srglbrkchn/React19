// var numbers = [3, 56, 2, 48, 5]; Map -Create a new array by doing something
// with each item in an array. function double(x) {     return 2 * x; } const
// newNumbers = numbers.map(x => {     return 2 * x; });
// console.log(newNumbers); let newNumbers = []; numbers.forEach((number) => {
//   newNumbers.push(number
// * 2); }); console.log(newNumbers); Filter - Create a new array by keeping the
// items that return true. const newNumbers =  numbers.filter((number) => {
// if(number < 10){         return number;     } }); let newNumbers = [];
// numbers.forEach(number => {     if(number >10) { newNumbers.push(number); }
// }); Reduce - Accumulate a value by doing something to each item in an array.
// let newNumber = 0; numbers.forEach(number => {     newNumber += number; });
// const newNumber = numbers.reduce((summation, currentNumb ) => {
// console.log("Sum: " + summation);     console.log("Current number: " +
// currentNumb);     return summation += currentNumb; });
// console.log(newNumber); Find find the first item that matches from an array.
// const newNumber = numbers.findIndex(number =>{     if(number > 10){ return
// number;     } }); // FindIndex - find the index of the first item that
// matches. console.log(newNumber);

import emojies from "./emojipedia";

const emojiMeaning = emojies.map(emoji => {
    return emoji.meaning.slice(0,100);
});

console.log(emojiMeaning);