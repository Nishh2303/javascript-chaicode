// const Itinera = new Object()
const Itinera = {}

Itinera.id = "123abc"
Itinera.name = "sam"
Itinera.isLoggedIn = false

// console.log(Itinera);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nisarg",
            lastname: "panchal"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname);


const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id : 1,
        email : "n@gmail.com",
    },
    {
        id : 1,
        email : "n@gmail.com",
    },
    {
        id : 1,
        email : "n@gmail.com",
    },
]

users[1].email
console.log(Itinera);

console.log(Object.keys(Itinera)); //imp
console.log(Object.values(Itinera)); //imp
console.log(Object.entries(Itinera)); //imp

console.log(Itinera.hasOwnProperty("isLoggedIn"));

