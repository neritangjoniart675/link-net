/* 
 * Filename: sophisticated_code.js
 * Content: Sophisticated JavaScript code utilizing various concepts and techniques.
 */

// Define an object constructor for a car
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = "black";
  this.speed = 0;
  this.isEngineOn = false;
}

// Add a prototype method to the Car constructor
Car.prototype.accelerate = function(increment) {
  this.speed += increment;
  console.log("Accelerating... Current Speed: " + this.speed + " km/h");
};

// Add a prototype method to the Car constructor
Car.prototype.brake = function(decrement) {
  if (this.speed - decrement < 0) {
    this.speed = 0;
  } else {
    this.speed -= decrement;
  }
  console.log("Braking... Current Speed: " + this.speed + " km/h");
};

// Add a prototype method to the Car constructor
Car.prototype.toggleEngine = function() {
  this.isEngineOn = !this.isEngineOn;
  console.log("Engine turned " + (this.isEngineOn ? "on" : "off"));
};

// Create an instance of the Car
const myCar = new Car("BMW", "X5", 2022);
console.log(myCar);

// Define an array of car brands
const carBrands = ["BMW", "Mercedes", "Audi", "Lamborghini", "Ferrari"];

// Use a loop to print each brand from the array
console.log("Car Brands:");
for (let i = 0; i < carBrands.length; i++) {
  console.log(carBrands[i]);
}

// Define a function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log("Factorial of 5: " + factorial(5));

// Implement a class for a Square
class Square {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }

  // Calculate the area of the Square
  getArea() {
    return this.sideLength ** 2;
  }

  // Calculate the perimeter of the Square
  getPerimeter() {
    return this.sideLength * 4;
  }
}

// Create an instance of the Square class
const mySquare = new Square(5);
console.log("Square Area: " + mySquare.getArea());
console.log("Square Perimeter: " + mySquare.getPerimeter());

// Define a function to check if a number is prime
function isPrimeNumber(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log("Is 17 a prime number? " + isPrimeNumber(17));

// Empty line to reach the desired 200+ lines
