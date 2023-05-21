"use strict"

/**************************************************************************************************************************/

//MAP
//create new array from original array using tranform function

let salaries = [4000, 5000, 7000, 3000, 8000];

let newSalaries = salaries.map((salary => {
    let increment = salary/2;
    return salary + increment;
}))

console.log('Array of incremented salaries : ' + newSalaries);

/**************************************************************************************************************************/

//FILTER

let gifts = ['Ring', 'Watch', 'chocolates', 'toy', 'Ring', 'bracelate'];

let newGifts = gifts.filter(gift => {
    if(gift === 'Ring' || gift === 'Watch') {
        return gift;
    }
})

console.log('Array of original gifts : ' + gifts);
console.log('Array of filtered gifts : ' + newGifts);

/**************************************************************************************************************************/

//Reduce
    //Array.reduce(function(total, currentValue), initialValue)
    //It return single value

let nums = [4,8,2,1,5,6];
let sum = nums.reduce((total, currentVal) => {
    return total + currentVal;
},0) // here 0 is the initial value which we provide to for the first iteration

console.log('Array of nums: ' + nums);
console.log('Sum : ' + sum);


/**************************************************************************************************************************/

//find
    //It return first 'element' which satisfy conditions

    let students = [{id:1, name:'alex'}, {id:2, name:'john'}];
    let std = students.find((student) => {
        return student.id === 2;
    })
    console.log('Array of students: ' + JSON.stringify(students));
    console.log('find student : ' + JSON.stringify(std));


/**************************************************************************************************************************/

//findIndex
    //It is similar to find but insted of returning elemeent it returns index 

    let stdIndex = students.findIndex((student) => {
        return student.id === 2;
    })
    console.log('Array of students: ' + JSON.stringify(students));
    console.log('find student index : ' + JSON.stringify(stdIndex));


/**************************************************************************************************************************/

//some and every
    //some -> if even one element satisfy the condition then array will pass
    let scores = [25,45,38,65,72,12,62];
    let result = scores.some(score => {
        return score > 50;
    })
    console.log('result: ' + result);

    //every -> if even one element does not satisfy the condition then array will does not pass
    result = scores.every(score => {
        return score > 90;
    })
    console.log('result: ' + result);

/**************************************************************************************************************************/

//flat
    //flat -> flat method is used to gring the nested array in single array
        //Its default level is 1 but if nesting is deep then we can pass the level in argument
    let digits = [1,2,3,[4,5,6],7,8];
    let flatArr = digits.flat();
    console.log('flat array: ' + flatArr);
    digits = [1,2,3,[4,5,[6,9,[11,13,18]],7,8]];
    flatArr = digits.flat(2);
    console.log(flatArr);


/**************************************************************************************************************************/

//flatMap
    //flatMap -> It is a combination of the map() method and flat() method of depth 1

    let cart = [
    {
        product: 'mobile phone',
        qty: 2,
        price: 500
    },
    {
        product: 'tablet',
        qty: 1,
        price: 1000
    }]

    let newCart = cart.flatMap(item => {
        if(item.product === 'mobile phone') {
            return [item, {
                product: 'screen protector',
                qty: 1,
                price: 0
            }]
        } else {
            return [item]
        }
    })

    console.log(newCart);

/**************************************************************************************************************************/

//sort 
    //sort -> by default sort method consider every element as string so this could produce unexpected results but we can define creteria to sort the array
    let arr = ['a','g','n','c'];
    console.log(arr.sort());
    arr = [-6,-43,-1,5,3,8,12];
    console.log(arr.sort()); //getting unexpected result because it is considering the elements string 

    //we pass 2 args and compare them if return -ve result then switch the elements
    //if returned +ve result then keep it same
    result = arr.sort((a,b) => {
        if(a-b < 0) {
            return -1 // can be any -ve number
        }
        if(a-b > 0) {
            return 1 // can be any +ve number
        }
    })

    console.log(result);

    