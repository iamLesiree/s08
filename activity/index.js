// let myFavoriteMovie = {
//   title: "The Titanic",
//   publisher: "Thomas Andrews",
//   year: 1994,
//   price: "$14.99",
//   isAvailable: true
// }
//
// console.log(myFavoriteMovie);
//
// let instructor = {};
// instructor.name = 'Crisostomo Ibarra';
// instructor.age = 56;
// instructor.gender = "Male";
// instructor.department = "Humanities";
// instructor.courses = ["Philosophy 101","Humanities 201"];
// instructor.isActive = true;
// instructor.salary = 50000;
//
// console.log(instructor);
//
// function Player(name, team, age) {
//   this.name = name;
//   this.team = team;
//   this.age = age;
// }
//
// let player1 = new Player('Lebron James', 'LA Lakers', 38 );
// let player2 = new Player('Stephen Curry', 'Golden State Warriors', 35);
//
// console.log(player1);
// console.log(player2);
//
// function Person(name, address, age) {
//   this.name = name;
//   this.address = address;
//   this.age = age;
//   this.isGreeted = false;
//
//   this.introduce = function() {
//     console.log(`Hi, my name is ${this.name}. I'm ${this.age} years old and I live at ${this.address}.`);
//     this.isGreeted = true;
//   };
// }
//
//
// let person1 = new Person('James Harden', 'Oklahoma', 33);
// let person2 = new Person('Kyrie Irving', 'Dalas', 31);
//
// person1.introduce();
// person2.introduce();

// 4. Initialize/add the following trainer object properties:
// Name (String)
// Age (Number)
// Pokemon (Array)
// Friends (Object with Array values for properties)
const trainer = {
  name: "Lesiree Bautista",
  age: 10,
  pokemon: ["Mewtwo", "Rayquaza", "Arceus"],
  friends: {
    brock: ["Onix", "Geodude"],
    misty: ["Staryu", "Starmie"]
  },



  // 5. Initialize/add the trainer object method named talk that prints out the message Pikachu! I choose you!
  talk: function() {
    console.log("Mewtwo! I choose you!");
  }
};

// 6. Access the trainer object properties using dot and square bracket notation.
console.log(trainer.name); // "Ash Ketchum"
console.log(trainer["age"]); // 10
console.log(trainer.pokemon[0]); // "Pikachu"
console.log(trainer.friends.brock[1]); // "Geodude"

// 7. Invoke/call the trainer talk object method.
trainer.talk(); // "Pikachu! I choose you!"

// 8. Create a constructor for creating a pokemon with the following properties:
// Name (Provided as an argument to the contructor)
// Level (Provided as an argument to the contructor)
// Health (Create an equation that uses the level property)
// Attack (Create an equation that uses the level property)
function Pokemon(name, level) {
  this.name = name;
  this.level = level;
  this.health = level * 10;
  this.attack = level * 2;
}

// 9. Create/instantiate several pokemon object from the constructor with varying name and level properties.
const pikachu = new Pokemon("Mewtwo", 5);
const charizard = new Pokemon("Rayquaza", 10);
const squirtle = new Pokemon("Arceus", 3);

// 10. Create a tackle method that will subtract the health property of the target pokemon object with the attack property of the object that used the tackle method.
Pokemon.prototype.tackle = function(targetPokemon) {
  targetPokemon.health -= this.attack;

  // 11. Create a faint method that will print out a message of targetPokemon has fainted.
  function faint() {
    console.log(`${targetPokemon.name} has fainted.`);
  }

  // 12. Create a condition in the tackle method that if the health property of the target pokemon object is less than or equal to 0 will invoke the faint method.
  if (targetPokemon.health <= 0) {
    faint();
  }
};

// Testing the tackle method and faint method
console.log("Before Tackle");
console.log(squirtle.health); // 30
console.log(charizard.health); // 100

charizard.tackle(squirtle);

console.log("After Tackle");
console.log(squirtle.health); // 20
console.log(charizard.health); // 100

charizard.tackle(squirtle);

console.log("After another Tackle");
console.log(squirtle.health); // 10
console.log(charizard.health); // 100

charizard.tackle(squirtle);

console.log("After final Tackle");
console.log(squirtle.health); // 0
console.log(charizard.health); // 100
