"use strict"

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
        getSummary: function(){
            return `${this.name} whose age is ${this.age} lives in ${this.city} and his birth year is ${this.birthyear}`;
        } 
    }

    console.log(`summary : ${secondPerson.getSummary()}`);

    //Note: one thing I observed we cannot use this keyword with arrow function in an abject

/**************************************************************************************************************************/


// USE OF FOR-EACH
    //It is a special type of for loop method applied on array in which we can pass another function to iterate over elements

    let i = 1;

    let bloackedList = [
        {
            name: 'Sam',
            reason: 'Abusive content',
        },
        {
            name: 'Rohan',
            reason: 'Abusive content',
        }
    ]

    bloackedList.forEach((element) => {
        element.id = i;
        i = i+1;
    } )

    console.log(`bloackedList : ${JSON.stringify(bloackedList)}`);

    
/**************************************************************************************************************************/


//CALL APPLY AND BIND

    //call and apply method

    let mainPlane = {
        airline: 'Fly India',
        iatacode: 'F1',
        bookings: [],
        book: function(flightNum, name){
            console.log(`${name} Booked flight on ${this.airline} with flight number: ${flightNum}`);
            this.bookings.push({flight: `${this.airline}`, name: `${name}`});
        }
    }

    mainPlane.book(553, 'Carlos');
    mainPlane.book(643, 'Jack');

    console.log(`mainPlane : ${JSON.stringify(mainPlane)}`);

    //Now if we want to use book method for any other abject then we can use call
    //If we use this method directly then it can't determine the use of this keyword

    let childPlane = {
        airline: 'Fly India',
        iatacode: 'F1',
        bookings: [],
    }

    //here we assign object book method to variable
    let book = mainPlane.book;
    book.call(childPlane, 689, 'Zake');
    console.log(`childPlane : ${JSON.stringify(childPlane)}`);

    //apply is also same as call but here we pass arguments in array and now days it is not that useful
    book.apply(childPlane, [786, 'June']);
    console.log(`childPlane : ${JSON.stringify(childPlane)}`);

    //bind function is used to bind the method with object unlike call which is single time use bind can be stored for future use
    let greet = function greet(){
        console.log(`Welcome ${this.firstname} ${this.lastname} !`);
    }

    let user = {
        firstname: 'Utkarsh',
        lastname: 'Goyal',
    }

    let greets = greet.bind(user);
    greets(); //so new this can be used anywhere unlike call where we have to pass function explicitly

/**************************************************************************************************************************/

//OBJECT/ARRAY PASS BY REFERENCE AND PASS BY VALUE

    //by ref
    let arr = [1,2,3,4,5];

    let getRef = arr;

    arr[5] = 6;
    //both are changing
    console.log(`original array: ${arr}`);
    console.log(`getRef array: ${getRef}`);
    console.log(`****************`);

    let getVal = [...arr];

    arr[6] = 7;
    //single array changed
    console.log(`original array: ${arr}`);
    console.log(`getVal array: ${getVal}`);

    //for object it can be like {...obj}

/**************************************************************************************************************************/

//FOR-IN LOOP TO ITERATE OVER OBJECT

    let newCar = {
        color: 'black',
        model: '2023',
        company: 'Honda'
    }

    let val = '';
    for(let key in newCar) {
        val = newCar[key];
        console.log(`key : ${key}, val: ${val}`);
    }

 /**************************************************************************************************************************/


//ARRAYS

    let letters = ['a', 'b', 'c', 'd'];

    //This method is mutating which means it also change the original array
    let reverse = letters.reverse();
    console.log(letters);
    console.log(reverse);

    //other non mutated methods
        let nums = [1,2,3,4,5,6];
        let concat = nums.concat(letters);
        let concat2 = [...nums, ...letters]; // new ES6 smart method
        console.log(concat2);
        let joined = letters.join('+'); // convert into string
        console.log(joined);

        //slice -> can cut array
        let sliced = nums.slice(1,4);
        console.log('original array: ' + nums);
        console.log('extraced array: ' + sliced);

    //other mutated methods

        //splice ->to cut or add new elements in array
            //sytntex -> Array.splice(index, deleteValue, valueToBeAdded)
        
        let newArr = nums.splice(1,2,1)
        console.log('original array: ' + nums);
        console.log('returned element array: ' + newArr);

    //at method -> similar of index but here we can call -ve index which moves in revers order so in the eg of nums if I give -1 them it will fetch last index
    console.log(nums.at(0));
    console.log(nums.at(-1));
    //Can also be used with string
    let name = 'utkarsh';
    console.log(name.at(-1));




