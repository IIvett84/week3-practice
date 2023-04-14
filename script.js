/*let firstValue = 20;
let secondValue = 30;

if (firstValue < secondValue) {
    console.log(`$(firstValue)` is less than `$(secondValue)`)
}

if (firstValue <= secondValue) {
    console.log(`$(firstValue)` is less than or equal to `$(secondValue)`)
}

if (firstValue === secondValue) {
    console.log(`$(firstValue)` is equal to `$(secondValue)`)
}

if (firstValue !== secondValue) {
    console.log(`$(firstValue)` do not equal to `$(secondValue)`)
}

let minimumVotingAge = 18;
let age = 20;
let registeredToVote = true;

it (age <= minimumVotingAge && registeredToVote === true) {
    console.log("Congratulations, you can vote")
}

let daugtherOfPresidentt = true;
if (age >= minimumVotingAge || daugtherOfPresidentt === true) {
    console.log("Congratulations, you can vote")
}*/

/*let currentCount = 1;
while (currentCount <= 10) {
    console.log (`The current count is: ${currentCount}`)
    currentCount = currentCount + 1
    currentCount += 1
    currentCount ++ 
    currentCount += 2

    currentCount -= 0
    currentCount --
}
console.log("Done")*/

/*for (initilization; condition; incrementingSetup) {
    //here comes the code
}*/

/*for (let currentCount = 1; currentCount <= 10; currentCount ++) {
    console.log (`The current count is: ${currentCount}`)
}
console.log("Done")*/

/*for (let evenNumber = 2; evenNumber <= 20; evenNumber +=2) {
    console.log(evenNumber);
}*/

/*let startCount = 2;
let endCount = 20;
let countSkip = 2;

for (let counter = startCount; counter <= endCount; counter += countSkip) {
    console.log(counter)
}*/

/*let members = ['Bence', 'Ágota', 'Márió', 'Balázs']

for (let index = 0; index <= members.length-1; index ++){
    console.log(index)
    console.log(members[index])
}*/

/*let numbers = [10, 20, 40, 50]
let sumSoFar = 0

for (let i = 0; i <= numbers.length-1; i++){
    let num = numbers[i]
    sumSoFar = sumSoFar + num
}
console.log (sumSoFar)*/

let numbers = [10, 40, 20, -20, 50]
let max = numbers[0];

for (let i = 1; i <= numbers.length-1; i++){
    let num = numbers[i]
    if (max <= num) {
        max = num
    }
}
console.log (max)