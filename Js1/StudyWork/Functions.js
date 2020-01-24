// in your own words, what is a function?
    // A function is a re usable block of code that takes in arguments and returns a value. functions may not always have to return something.

// * * Create a function called getName that takes in two parameters; ( name1, name2 )
// * * call the function with two arguments:

function getName(name1, name2){
    name1 + name2;
    return `${name1} has a brother and his name is ${name2}`;
  }
  getName('sam', 'kevin')//OH YEAH!

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

function getCar(){
  for
}

// getCar will loop through each car in the cars array by using the .map() method

// return the carname of your choice.




// ! EXTRA EXTRA credit

// instead of using .map(), use the .filter() method to return any car != to a certain car of your choice. Exmaple: != mustang


// ! ULTRA CREDIT

    // We have a getCurrentHealth function.
    // we start with 100 but need to see how much damage has been done.
   // lets first check if there has been a headshot. if it is a headshot we want our health to be subtracked the damage multipled by 2.
   // else if headshot is false we want normal damage to be taken. so... currentHealth - damageTaken
   // now that these have run, we need to check if the player is still alive. 
   // so if the currentHp ends up being 0 or less than 0. then we will return the string "Oh dear! You are dead!"
   
   //*** alright i think i got it!?? */
   //
   
   function playerHp(currenthealth, damagetaken, headshot){
    if (headshot === true){
      currenthealth - damagetaken * 2;
       }
    else if (currenthealth - damagetaken){
      return (currenthealth - damagetaken);
       }
    else if (currenthealth <= 0);
      return 'You got 1 Tapped!!'
    }
  playerHp(100, 66, true)

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


const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if(region === 'The Arctic'){
      let lightWaves = 'Northern Lights';
        console.log(lightWaves)
    }
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();







