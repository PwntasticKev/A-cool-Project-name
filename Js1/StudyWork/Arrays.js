// in your own words, what is an array?


//create an array of numbers
let numbers = [9, 8, 7, 6 ,5];
let total;
//loop over each item in array and add them up.
let numbers = [221, 332, 4343, 254, 53, 66];
var total = 0;

for(var i = 0; i < numbers.length; i++){
  total += numbers[i];
}
  console.log( total )

//create an array of cs:go maps
let maps = ['Mirage', 'Inferno', 'Office', 'Vertigo', 'Dust'];

//! EXTRA CREDIT
//create a variable called foundPlayers
//CODE HERE

var foundPlayers = 0;

//  you are in que searching for a map. you need 10 total people to join a map.
// if the map is "office" and the foundPlayers variable is 10 return the string "ACCEPT"
//CODE HERE

let maps = ['Mirage', 'Inferno', 'Office', 'Vertigo', 'Dust'];
var foundPlayers = 0;

//  you are in que searching for a map. you need 10 total people to join a map.
// if the map is "office" and the foundPlayers variable is 10 return the string "ACCEPT"
//CODE HERE

function queReady(maps, foundPlayers){
  for(foundPlayers; foundPlayers <= 10; foundPlayers++){
    if(foundPlayers === 10){
      for(var i = 0; i < maps.length; i++){
          if(maps[i] === 'Office'){
            return 'Accept NOOB!'
          }
      }
    }
  }
}
queReady(maps, foundPlayers)














