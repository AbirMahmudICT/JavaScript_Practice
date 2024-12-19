

// Even ODD Function

var nums = [5,12,9,120,9,0,9];
function evenOdd(nums){
    var sum = 0;
    var evenAdd = 0;
    for (let i=0 ; i<nums.length; i++){
        var num = nums[i];
        console.log(num);
        sum += num;
        if(num%2==0){
            evenAdd += num;
        }else{
            console.log(`odd NUmber ${num*2}`);
        }
    }
}
evenOdd(nums);



// Return Function

function evenify (num){
    var result;
    if(num%2==0){
        result = num;
    }else{
        result = num *2;
    }
    return result;
}
var ansWare = evenify(3);
var square = ansWare*ansWare;
console.log(ansWare);
console.log(square)



// Create Second Array

var numbers = [12, 13, 9, 0 , 3, 2, 31, 44, 90];
var multiply = [];
for(let i=0; i<numbers.length; i++){
    var number = numbers[i];
    var square = number * number;
    multiply.push(square);
}
console.log (multiply)



// call back function

function callBack(name, age , institute){
    console.log (`My name is: ${name}. I am ${age} Years Old.`)
    institute(age);
}

function institute(age){
    if (age<15){
        console.log("I am going to school.");
    } else if(age<20){
        console.log("I am going to College.");
    } else{
        console.log("I am going to University.");
    }
}
callBack("Abir Mahmud", 5, institute);


// Unknown Number Of Arguments

function addNumbers(){
    var sum = 0;
    for(let i = 0; i<arguments.length; i++){
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}

var result = addNumbers(2,3,8,9,9,8);
console.log(result)

























