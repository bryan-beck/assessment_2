
//////////////////PROBLEM 1////////////////////
/*
  Create an object called 'me' that has the following keys: 
    firstName, state, age, and greeter. 
  The value of the firstName key should be your name as a string. 
  The value of the property state should be your current state or providence of
  residence as a string. 
  The value of age should be your age as a number. 
  
  Last, greeter should be a method that returns the string 
  'Hello! My name is NAMEVALUE and I live in STATEVALUE' 
  with the corresponding values.
  For example: 'Hello! My name is Rubber Duck and I live in Utah"
*/

//CODE HERE
let me = {
  firstname: "Bryan",
  state: "Arizona",
  age: 31,
greeter: function() {
  return ("Hello,my name is " + me.firstname + " and I live in Arizona!");
 }
}
console.log(me.greeter());



//////////////////PROBLEM 2////////////////////
/*
  Write a function called carFactory that takes in three parameters: a make, model, and year.  
  When the function is invoked:
    - a string will be sent in for make
    - a string will be sent in for model
    - a number will be sent in for year
  Inside the function, create an object from those parameters.
  Next, write an if statement that will check if the year sent in is greater than 2018.
    - if the year is greater than 2018, add a key to the object called isNew and set it to true
    - else, add a key to the object called isNew and set it to false
      - hint: you can use dot notation or bracket notation
  Last, the function should return the object
  For example,
    carFactory('toyota', 'camry', 2020)
  should return an object that looks like this:
  {
    make: 'toyota', 
    model: 'camry',
    year: 2020,
    isNew: true
  }
*/

//CODE HERE
class carFactory {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  checkYear() {
    if (this.year > 2018) {
      this.isNew = true
    } else {
      this.isNew = false
    }
  }
}

let car = new carFactory('toyota', 'camry', 2019)
car.checkYear()
console.log(car)
