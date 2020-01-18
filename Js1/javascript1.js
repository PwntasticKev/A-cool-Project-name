// Variables

// var - global Scope
// let - lexical scope
// const - Cannot be changed

//create a variable called dog and assign to be a STRING of dog
    //code Here
    let dog = 'dog';
    dog = 'cat';
    console.log(dog);


// reassign dog to be a STRING of cat
    //Code Here

    
    //Functions ()
    
    
    //Objects {}
    
//Create an array called dogNames and set it to an empty array
    let dogNames = [];

//with the push() method, push a few dog names into the dogNames array
    dogNames.push('otis', 'ziggy', 'riply');
    
//Loops

// for loops

for(var i = 0; i < dogNames.length; i++) {
    console.log(i)
}

// while loops
// .map()
dogNames.map((value, index) => {
    console.log("index:", index)
    console.log("value:", value)
})
// .filter()
let dogs = dogNames.filter( (value, index) => {
    if(index != 0) {
      return value
    }
})
console.log(dogs)
// .forEach()
dogNames.forEach((value, index) => {
    console.log("index:", index)
    console.log("value:", value)
})


//Arrays []




