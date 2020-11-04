//importance 5//
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//importance 5//
function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}

//importance 5//
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let prop in salaries) {
    sum += salaries[prop];
}
alert(sum);

//importance 3//
let menu = {
    height: 200;
    width: 300,
    
}
function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'number'){
        total = obj[prop] * 2;
        }
    }
}
multiplyNumeric(menu)