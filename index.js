// FUNCTIONS

////////////////////////////
//     Challenge 1
//Write a function called printDriverHeight that logs the driver's height when invoked.
////////////////////////////
function printDriverHeight (){
  console.log(`Challenge 1: 5"`)
}
printDriverHeight(); //5

////////////////////////////
//     Challenge 2
//Declare a function called printNavigatorName that prints the navigator's name.
////////////////////////////

function printNavigatorName (){
  console.log(`Challenge 2: Rea`)
}

printNavigatorName(); // Rea


////////////////////////////
//     Challenge 3
// Declare a function called printName.
// It will take in a parameter name and print that name.
// Call printName with the driver's name as an argument.
////////////////////////////

function printName (name) {
  console.log(`Challenge 3: ${name}`)
}
printName('Rea') //Rea

////////////////////////////
//     Challenge 4
//Declare a function called printGroupName.
// It will take two parameters driverName and navigatorName.
// It will print the two parameters with the word 'and' between them.
////////////////////////////

function printGroupName (driver, navigator) {
  console.log(`Challenge 4: ${driver}, ${navigator}`)
}

printGroupName('Rea', 'Carolyn') //Rea Carolyn

////////////////////////////
//     Challenge 5
//Declare a function called multiplyHeight.
// It will take two parameters driverHeight and navigatorHeight.
// It should return the product of the heights
////////////////////////////

function multiplyHeight (driverHeight, navigatorHeight) {
  return (driverHeight * navigatorHeight)
}

console.log('Challenge 5:', multiplyHeight(66, 72) === 4752) // 'Challenge 5: true'

////////////////////////////
//     Challenge 6
//Declare a function called square..
// It will take number as a parameter.
// It will return the square of the number.
////////////////////////////

function square (num) {
return num*num
}

console.log('Challenge 6:', square(3) === 9 && square(-4) === 16) // 'Challenge 6: true'

////////////////////////////
//     Challenge 7
//eclare a function getArea.
// It will take radius as a parameter.
// It will use the function square to calculate the square of the radius.
// It should return 3.14 times the square of the radius.
////////////////////////////

function getArea (num) {
  return 3.14* square(num);
}

console.log('Challenge 7:', getArea(5) === 78.5) // 'Challenge 7: true'

////////////////////////////
//     Challenge 8
//Write a function greeting that accepts a string name and a boolean casual.
// The function should log 'Hey ' + name if casual is true or 'Hello ' + name if casual is false.
// Call your function with the navigator's name and true.
// Call your function with the driver's name and false.
////////////////////////////

function greeting (name,boolean) {
  if (boolean === true) {
    console.log(`Challenge 8: Hello ${name}`)
  } else {
    console.log(`Challenge 8:Hi ${name}`)
  } 
}

greeting('Rea', false)


////////////////////////////
//     Challenge 9
////////////////////////////
//Write a function isCodesmithOpen that accepts a time parameter (a number).
//If the time is greater than 9, log 'Codesmith is open.'
//Otherwise, log 'Sorry, Codesmith is closed.'
function isCodesmithOpen (time) {
  if (time > 9){
    console.log(`Challenge 9: Codesmith is open.`)
  } else {
    console.log(`Challenge 9: Sorry, Codesmith is closed.`)
  }
}

isCodesmithOpen(10);
isCodesmithOpen(9);

////////////////////////////
//     Challenge 10
//Write a function smallMediumOrLarge that will accept a number howHungry, which will represent how hungry you are on a scale of 1 to 5.
// If howHungry is 5, log 'Large please!'
// If howHungry is 3 or 4, log 'Medium please!'
// Otherwise log 'Small please!'
////////////////////////////

function smallMediumOrLarge (howHungry) {
 if (howHungry ===5) {
   console.log('Challenge 10: Large please!')
 } else if (howHungry ===3 || howHungry ===4){
   console.log('Challenge 10: Medium please!')
 } else {
   console.log('Challenge 10: Small please!')
 }
}

smallMediumOrLarge(5); // 'Large please!'
smallMediumOrLarge(4); // 'Medium please!'
smallMediumOrLarge(3); // 'Medium please!'
smallMediumOrLarge(2); // 'Small please!'
smallMediumOrLarge(1); // 'Small please!'

////////////////////////////
//     Challenge 11
//Write a function called isAGoodBoy that takes two parameters that we expect to be Boolean values: wellBehaved and isCute.
// If the dog is wellBehaved and isCute, log 'pet'.
// Otherwise log 'train'.
////////////////////////////

function isAGoodBoy (wellBehaved, isCute) {
  if (wellBehaved && isCute) {
    console.log ('Challenge 11: Pet')
  } else {
    console.log ('Challenge 11: Train')
  }
}

isAGoodBoy(true, true); //pet
isAGoodBoy(true, false); //train
isAGoodBoy(false, true); //train
isAGoodBoy(false, false); //train

////////////////////////////
//     Challenge 12
//Write a function shouldEatBanana that accepts color and smellsGood parameters.
// Log 'eat' if the banana's color is 'yellow' and if smellsGood is true
// Otherwise, if the banana's color is 'green', log 'wait'.
// Otherwise log 'don't eat'.
////////////////////////////

function shouldEatBanana (color, smellsGood) {
  if (color==='yellow' && smellsGood) {
     console.log ('Challenge 12: Eat')
  } else if (color==='green') {
    console.log ('Challenge 12: Wait')
  } else {
    console.log ("Challenge 12: Don't Eat")
  }
}

shouldEatBanana('yellow', true); // 'eat'
shouldEatBanana('yellow', false); //"don't eat"
shouldEatBanana('green', true); //'wait'
shouldEatBanana('green', false);  //'wait'
shouldEatBanana('red', true); // "don't eat"

////////////////////////////
//     Challenge 13
//Write a function countTo5 that uses a for loop to log the numbers 1 through 5.
////////////////////////////
function countTo5 () {
  let arr=[];
  for (let i=1; i<=5; i++) {
    arr.push(i);
  }
  console.log(`Challenge 13: ${arr}`)
}

countTo5(5); // '1, 2, 3, 4, 5'

////////////////////////////
//     Challenge 14
//Write a function countMost that uses a for loop to loop over the numbers 1 to 5.
// Log all the numbers except 3.
////////////////////////////

function countMost () {
  let arr=[];
  for (let i=1; i <=5; i++){
    if (i!==3){ arr.push(i);}
  }
  console.log(`Challenge 14: ${arr}`);
}

// Uncomment the line below to test your code
countMost(); // should print '1, 2, 4, 5'