console.log ("loaded");
let carBrand = "Opel";
console.log ('carBrand',carBrand);

carBrand = "BMW";
console.log(carBrand);

let doorNumber = 5;

let isDiesel = true;

let fuel = null;
//ez egy komment//

let firstNames = ["Dorka", "Márió", "Bence", "Edit"];

console.log(firstNames.length)
console.log(firstNames[2]);
console.log(firstNames[3]);
console.log(firstNames[firstNames.length-1]);

firstNames[1]="Ivett";
console.log(firstNames);

firstNames.push("Márió");
console.log(firstNames);

function myFirstFunction (firstName, lastName){
    console.log("My first function");
    return firstName+lastName;
}

console.log(myFirstFunction("Márk ", "AG"));

const cond1 = 2
const cond2 = 2
const num = 3

function doubleTheNumber(num) {
    let result = num*2
    return result
}
const doubleNumber = doubleTheNumber(3)

console.log(doubleTheNumber)
console.log(doubleTheNumber())

function score(letter) {
    const scoreString = 'a';
    if (letter === undefined) {
        return 'Give me a letter'
    } else if (scoreString === letter) {
        return 'scored'
    } else {
        return 'try again'
    }
}
console.log(score());