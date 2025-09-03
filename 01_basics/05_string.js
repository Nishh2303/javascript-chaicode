const name = "Nisarg"
const repoCount = 23

// console.log(name + repoCount + " Value");

console.log(`Hello My name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String("nisarg-p-23")
console.log(gameName[0]);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 2) // we can give neg value
console.log(anotherString);

const newStringOne = "   Nisarg    "
console.log(newStringOne.trim());

const url = "https://nisarg.com/nisarg%20panchal"
console.log(url.replace("%20", "-"));


console.log(url.includes("nisarg"));


console.log(gameName.split("-"));
