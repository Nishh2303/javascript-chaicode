const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(typeof balance.toString());

// console.log(balance.toFixed(2)); // 100.00 

const otherNumber = 123.99878

// console.log(otherNumber.toPrecision(3)); // before decimle

const hundreds = 100000
// console.log(hundreds.toLocaleString("en-IN"));



// ****************** MATHS ***************

// console.log(Math);
// console.log(Math.abs(-4));  // positive = positive, negative = positive

// console.log(Math.round(4.6)); 
// console.log(Math.ceil(4.6)); // choose top value
// console.log(Math.floor(4.5)); // choose bottom value


// console.log(Math.sqrt(9));

// console.log(Math.min(4,8,22,55,23));
// console.log(Math.max(4,8,22,55,23));


console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

