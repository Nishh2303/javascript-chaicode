// array

const myArr = [1, 2, 3, 4, 5, 6]
const myHeros = ["spiderman", "hulk"]

let myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]); 

// Array methods

// myArr.push(6)
// myArr.push(77)
// myArr.pop()

// myArr.unshift(99)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // converts into string

// console.log(newArr);

// slice, splice

const ARRslice = myArr.slice(1,4) // gives copy of array
myArr.splice(2,0,"NishhOP") // modified array 


console.log(ARRslice);
console.log(myArr);