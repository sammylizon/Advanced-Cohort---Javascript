const a = 263,
  b = 563,
  c = 111;

//write a function that checks which is these numbers is the smallest
// apply the largest to the variable

// let largest = a;

// function isBig() {
//   largest = Math.max(a, b, c);

//   console.log(`The largest number is ${largest}.`);
// }

// isBig(a, b, c);


//do the same thing again without the function
//this function takes the numbers in an array and returns the largest by checking each number to the last


let arrayNum = [];
arrayNum.push(a, b, c);

// console.log(arrayNum);

let min = arrayNum[0], max = arrayNum[0];

const checkLargest = (arr) => 
{
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > max ){
            max = arr[i];
        } else if(arr[i] < min)
            { min = arr[i]};

    };

    console.log(`The max number is ${max}`);
    console.log(`The minimum number is ${min}`);
}

checkLargest(arrayNum);


//check whether a number is divisible by another number 
//Divisible by 3 is Fizz 
//Divisble by 5 is Buzz 
//Divisble by 3 and 5 is FizzBuzz

let testNumber = 3;
result = [];

function fizzbuzzCalculator(testNumber){

    if(testNumber%3==0){
        result.push(testNumber);

    }

}

fizzbuzzCalculator(testNumber);
console.log(result);