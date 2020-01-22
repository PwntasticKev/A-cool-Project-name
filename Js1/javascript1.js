//* * Variables

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

    
	
	
    
	//* * Objects {}
//  -- Objects are very similar to arrays.

let dog = {}
dog.name = "Otis"

// Objects

// let dog = {}
// dog.name = "Otis";
// dog.age = 5;

let otis = {
	name: "otis",
	age: 5
}

console.log(otis['age'])
console.log( otis.age )

let person = {
	name: 'sam',
    lastName: 'lee',
    age: 27,
    weight: 150,
    hair: 'brown',
  }
  console.log(person.weight + 'lb')
  
  // * * Arrays and objects // merging
  
  let cars = [];
  
  let mustang = {
    name: "Betsy Stang",
    year: 2012,
    color: "red",
    vin: 1230123012
  }
  
  let camaro = {
    name: "Betsy Maro",
    year: 1995,
    color: "Green",
    vin: 128371238
  }
  
  cars.push( camaro, mustang )
  console.log( cars[0].name )

//dot notation
console.log( otis.name )
// bracket notation
console.log( otis['name'] )

//Create an array called dogNames and set it to an empty array
let dogNames = [];

//with the push() method, push a few dog names into the dogNames array
dogNames.push('otis', 'ziggy', 'riply');

//* * Loops & Arrays

// for loops

for(var i = 0; i < dogNames.length; i++) {
	console.log(i)
}

// .map()
cars.map( (carName) => {
	console.log(carName)
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

let cars = ['subie', 'camaro', 'mustang5.0'];

// for(var i = 0; i < cars.length; i++){
	//   console.log(i)
	
	// }
	
	// * * Arrays and objects
	
	let cars = [];
	
	let mustang = {
		name: "Betsy Stang",
		year: 2012,
		color: "red",
		vin: 1230123012
	}
	
	let camaro = {
		name: "Betsy Maro",
		year: 1995,
		color: "Green",
		vin: 128371238
	}
	
	cars.push( camaro, mustang )
	console.log( cars[0].name )
	
	
	//* * Functions ()

	function getCarName () {
		for(var i = 0; i < cars.length; i++) {
		  if(cars[i].name == 'Betsy Maro') {
			return cars[i].name
		  }
		}
	  }
	  
	  getCarName()
	
	
	
