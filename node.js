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

/*let username;
let signupDate;

username = 'johnk';
signupDate = 'October 15, 2013';
console.log(`Hello, ${username}! You've been a member since ${signupDate}.`);

username = 'alberte';
signupDate = 'March 20, 2004';
console.log(`Hello, ${username}! You've been a member since ${signupDate}.`);

username = 'evab';
signupDate = 'June 4, 2019';
console.log(`Hello, ${username}! You've been a member since ${signupDate}.`);*/

function getWelcomeMessage (username, signupDate){
    console.log(`Hello, ${username}! You've been a member since ${signupDate}.`);
    return true
}

/*let userN = "Ivett";
let userLastName = "Ilyash";
let wholeName = userN + userLastName;
let wholeName = `Név: ${userN} ${userLastName}`
console.log(wholeName)*/

console.log(getWelcomeMessage('evab',  'June 4, 2019'))
console.log(getWelcomeMessage('johnk',  'October 15, 2013'))

if (some expression that can be true or false) {
    // The code for the "true" branch goes here
    // That is, the code that we want to run when the above
    // expression evaluates to true
    // ...
    // ...
    // Potentially many lines of code
  } else if(some other expression){

  } else {
    // The code for the "false" branch goes here
    // That is, the code that we want to run when the above
    // expression evaluates to false
    // ...
    // ...
    // Again, potentially many lines of code
  }