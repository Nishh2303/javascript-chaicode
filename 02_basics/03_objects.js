// singleton 
// Object.create // constructor 

// object literals
const mySym = Symbol("key1")


const JsUser = {
    "full name" : "Nisarg",
    age : 18,
    [mySym] : "myKey1",
    location : "Abad",
    email : "nishh@gmai.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "nishh@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "nishh@apple.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`hello JS user ${this["full name"]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
