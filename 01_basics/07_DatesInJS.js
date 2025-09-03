// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());


// console.log(typeof myDate);


let myCreatedDate = new Date(2025, 2, 23)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.getDay());

console.log(myCreatedDate.toLocaleString("default", {
   weekday : "long",
   day :"2-digit" 
}));



