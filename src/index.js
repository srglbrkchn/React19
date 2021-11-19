var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x) {
//     return 2 * x;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);

let newNumbers = [];

function double(number) {
    newNumbers.push(number * 2);
}

numbers.forEach((number) =>  {
    newNumbers.push(number * 2);
});

console.log(newNumbers);


//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
