// in your own words, what is a function?
    // A function is a re usable block of code that takes in arguments and returns a value. functions may not always have to return something.

// * * Create a function called getName that takes in two parameters; ( name1, name2 )
// * * call the function with two arguments:

function getName(name1, name2){
    name1 + ' ' + name2;
  }
  getName('sam', 'kevin')
  
//  * * return a template string while using both of the variables you used as parameters --- SEE LINK
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals


// * * Create a function that takes in 3 numbers as parameters and mutlplies them as a result. 

function multiply(num1, num2, num3){
    return num1 * num2 * num3;
  }
  multiply(8, 8, 10)

// ! EXTRA CREDIT

// Create an array of car objects

let carObjects = ['mustang', 'subaru', 'honda', 'camaro', 'toyota'];

// Create a function called getCar

function getCar()

// getCar will loop through each car in the cars array by using the .map() method

// return the carname of your choice.




// ! EXTRA EXTRA credit

// instead of using .map(), use the .filter() method to return any car != to a certain car of your choice. Exmaple: != mustang


// ! ULTRA CREDIT

//create a function called getCurrentHealth that takes three parameters, damageTaken, currentHp and headshot ( headshot will be passed a boolean )

// return the currentHp minus damageTaken times 2 if headshot is true. 
// if headshot is false we will take normal damage
// if the currentHp is 0 equal or less, return the string "oh dear! you are dead"


//**********Writing out Functions over and over to get them embedded */

const plantNeedsWater = function(day){
  if(day === 'Wednesday'){
    return true;
  }
  else{
    return false
  }
}
plantNeedsWater('Tuesday')
console.log(plantNeedsWater('Tuesday'))








