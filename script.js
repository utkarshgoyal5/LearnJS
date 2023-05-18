console.log("Hello Coders");

var score = 34;

console.log(`score: ${score}`);


/**************************************************************************************************************************/


//Higher order function : passing function in argument

let uppercase = function(str) {
    return str.toUpperCase();
}

let lowercase = function(str) {
    return str.toLowerCase();
}

let transformer = function(str, fun) {
    return fun(str);
}

console.log(`transformer: ${transformer("Hello", lowercase)}`);


//Higher order function : returning another function

let compliment = function(msg) {
    return function(name) {
        console.log(`${msg} ${name}`)
    }
}

compliment("You are a good coder")("Lurie");


/**************************************************************************************************************************/


//IMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

    //It will get executed only once so it can be used to initialize liberary

    //Putting paranthesis around the function make this an expression

(function(name) {
    console.log(`This function will never execute again ${name}!`);
})('IIFE') // <- by putting these paranthesis infront of function we can execute it and can also pass arguments


/**************************************************************************************************************************/


//SETTIMEOUT AND SETINTERVAL -> called af timer functions

    //setTimeout -> can be used when we want to run function after set interval of time

    //setInterval -> can be used when we want to run function repeatedly after every set interval of time

    //setTimeout(func|code, delay, arg1, arg2, ...)
    function greeting(lang) {
        console.log(`learning to use setTimeout in ${lang}!`);
    }
    setTimeout(greeting, 2000, 'JavaScript');

    setTimeout(function greeting() {
        console.log(`learning to use setTimeout in JS!`);
    }, 3000);

    //setInterval(func|code, delay, arg1, arg2, ...)
    // setInterval(greeting, 100, `JS`);


/**************************************************************************************************************************/


// HOISTING

    // Variables 'declaration' are 'hosited' towards 'top' of their scope
    test = 10;
    console.log(`test: ${test}`);
    var test;

    //function declaration (can be declared in 2 ways expression based and normal function, normal function declaration follows hoisting)
    testFun();
    function testFun() {
        console.log(`Hello coder!`);
    }

    //Does not work for function extression
    // testFun();
    // let testFun = function() {
    //     console.log(`Hello coder!`);
    // }


/**************************************************************************************************************************/

//INTRODUCTION TO OBJECT IN JS

let car = {
    color: 'black',
    model: '2023',
    company: 'Honda'
}

console.log(car);

    //Accessing object properties
        // can be accessed in 2 ways
    console.log(car['company']); //this helps in passing value dynamically
    console.log(car.model);

    //dynamically seetting property
    let propName = 'color';
    console.log(`car prop: ${car[propName]}`);

    //modify the object 
    car.color = 'brown';
    console.log(car.color);
    car['color'] = 'blue';
    console.log(car['color']);

    //deleting the prop
    let obj = {
        prop1 : 'val1',
        prop2 : 'val2'
    }

    let result = delete obj.prop1;

    console.log(`${JSON.stringify(obj)} & deleted result : ${result}`);


/**************************************************************************************************************************/

//FUNCTION AND METHODS DIFFERENCE

    //Methods -> when function is declared withen object and behave as prop of object then it is called method

    let person = {

        ageCalculate : function(birthyear = 2008) {
            let age = 2023 - birthyear;
            return age;
        }

    }

    console.log(`current age is : ${person.ageCalculate(1998)}`);

    //use of this keyword -> can access it own property

    let secondPerson = {
        name: 'Utkarsh Goyal',
        age: 25,
        city: 'Aligarh',
        birthyear: 1998,
        getSummary: () => {
            return `${this.name} whose age is ${this.age} lives in ${this.city} and his birth year is ${this.birthyear}`;
        } 
    }

    console.log(`summary : ${secondPerson.getSummary()}`);


