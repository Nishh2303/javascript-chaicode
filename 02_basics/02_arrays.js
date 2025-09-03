const marvelHeros = ["thor", "ironMan", "spiderman"]
const DcHeroes = ["superman", "flash", "batman"]

// marvelHeros.push(DcHeroes)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// let allHeros = marvelHeros.concat(DcHeroes)
// console.log(allHeros);


const allNewHeros = [...DcHeroes, ...marvelHeros]
// console.log(allNewHeros);

const anotherArray = [1, 2, 3,[4, 5, 6], 7, [6, 7], [4, ,5]]
const newanotherArray = anotherArray.flat(Infinity)

console.log(newanotherArray);

console.log(Array.isArray("nisarg"));
console.log(Array.from("nisarg"));
console.log(Array.from({name : "Nisarg"}))


let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2,score3));