let a = 300
const b = 400
var c = 600

if (true) {
    let a = 30
    const b = 20
    console.log(`inner ${a}`);
}

console.log(a);
console.log(b);
console.log(c);
