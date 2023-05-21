//OBJECT ORIENTED PROGRAMMING

//When we call any function with new keyword then it is called ccinstructor function
// we cannot use arraw function as constructor

//new object created empty initially
//this = object
//object linked to prototype 
//function automatically return object

let Car = function(color, model) {
    //properties
    this.color = color;
    this.model = model;

    //methods -> this is not a good way to define methods we must use prototype insted
    //prototype is the property of constructor function
    // this.starEngine = function() {
    //     console.log('start engine method')
    // }
    
}

let result1 = new Car('Blue', 2019);
let result2 = new Car('yellow', 2022);
console.log(result1, result2);

//all objects created by constructor function have an access to all methods present in constructor prototype

Car.prototype.startEngine = function() {
    console.log('this is a start engine method');
}
console.log(Car.prototype);
//to get proto info from object we can use __proto__
console.log(result1.__proto__);

//we can also add properties to prototype

Car.prototype.company = 'honda';

let result = new Car('orange', 2020);
console.log(result);
console.log(result.startEngine);

let arr = [1,2,3,4,5]
console.log(arr.__proto__); //in array all the methods which we call are from prototype 
// here we have not used new because [] branckets also represent new keyword

console.log(arr.__proto__.__proto__); //chaining of prototype means if prototype is withen prototype then we can access parent prototype


//the above functionality is now old In ES6 we use class to implement the same thing in much easier way -> checkout oopNew.js