//ES6 classes -> They still implement prototypal inherentence behind the scene

//class declaration
class Car {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }
    startEngine() {
        console.log('This is start engine method in car class')
    }

    //getter and setters
    get _startEngine() {
        console.log('This is start engine method using getter in car class')
    }

    set changeColor(color) {
        console.log(this.color = color)
    }

    get description(){
        return `This is a car with model number ${this.model} and color ${this.color}`;
    }
}

let honda = new Car('Yellow', 2019);
console.log(honda.__proto__);
honda.startEngine(); //accessing as a function
honda._startEngine; //accessing as a property
honda.changeColor = 'Blue' //not passing in args because it behaves like property
console.log(honda.description);


//To create static method (common to all abjects) we define them directly using classname
Car.breakMethod = function() {
    console.log('This is a common break method for car')
}
Car.breakMethod();

//Also have inherentance same as java

//Chaining of methods
//We have seen many times we use multiple methods by applying dot dot
//like arr.push(5).pop(2).push(3)
//so this can be implemented if we return this keyword in every method called, which means we are returning object


//Important Points
//Classes are not hoisted
//Classes are first class citizen(pass as a argument or return)
//Classes are executed in strict mode