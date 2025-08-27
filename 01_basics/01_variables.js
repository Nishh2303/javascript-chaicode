const accountId = 230323
let accountEmail = "nisarg@gmail.com"
var accountPassword = "12345"
accountCity = "A'bad"
let accountState; 

// accountId = 2 // not allowed 

accountEmail = "nishh@np.com"
accountPassword = "231352"
accountCity = "Surat"

console.log(accountId);

/*
    Prefer not to use var... 
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])