//Be Concise IV - Index of an element in an array

//Provided is a function find which accepts two parameters in the following order: array, element and
//returns the index of the element if found and "Not found" otherwise.
//Your task is to shorten the code as much as possible in order to
//meet the strict character count requirements of the Kata.
//(no more than 85) You may assume that all array elements are unique.

const find = (array,element) => 
  array.includes(element) ? array.indexOf(element) : "Not found"

//I would like to be able to pass an array with two elements
//to my swapValues function to swap the values. However it
//appears that the values aren't changing.
//Can you figure out what's wrong here?

function swapValues() {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0];
    args[0] = args[1];
    args = temp.reverse();
}

//Logical Calculator

//Given an array of Boolean values and a logical operator,
//return a Boolean result based on sequentially applying
//the operator to the values in the array.

function logicalCalc(array, op){
    if(op == 'AND') return array.reduce((item,current) => item && current);
    if(op == 'OR') return array.reduce((item,current) => item || current);
    if(op == 'XOR') return array.reduce((item,current) => item != current);
  }

//Convert to Binary

//Given a non-negative integer n, write a function
//to_binary/ToBinary which returns that number in a binary format.

const toBinary = n => Number(n.toString(2))

//Grasshopper - Array Mean

//Find the mean (average) of a list of numbers in an array.

const findAverage = nums =>
  nums.reduce((total, value) => total + value, 0) / nums.length

//Multiply

function multiply(a, b){
  return a * b
}

console.log(multiply(2,4));

//Unique In Order

var uniqueInOrder=function(iterable){
  let newArr = [];
  for(let i =0;i<iterable.length;i++){
    if(iterable[i] != iterable[i+1]){
      newArr.push(iterable[i])
    }
    }
  return newArr;
  }

//Is this a triangle?

function isTriangle(a,b,c)
{
  if(a === 0 || b === 0 || c === 0){
    return false
  }else if(a+b <= c){
    return false;
  }else if(c+b <= a){
    return false;
  }else if(a+c <= b){
    return false;
  }
  return true;
}

//Highest and Lowest

function highAndLow(numbers){
  const arr = numbers.split(" ");
  let maxNum = arr[0];
  let minNum = arr[0];
  
  for(let num of arr){
    if(Number(num) > maxNum){
      maxNum = num;
    }
    if(Number(num) < minNum){
      minNum = num;
    }
  }
  
  return maxNum + " " + minNum
}

console.log(highAndLow("1,2,3,4,5"));

//Number of People in the Bus

var number = function(busStops){
  let totalPpl = 0;
  
  for(let i = 0; i < busStops.length; i++){
    let currStop = busStops[i];
    let getOn = busStops[i][0];
    let getOff = currStop[1];
    
    totalPpl += getOn;
    totalPpl -= getOff;
    
  }
  return totalPpl;
}

//Categorize New Member

function openOrSenior(data){
  return data.map(([age,handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

//Complementary DNA

function DNAStrand(dna){
  let DNA = {
    "A" : "T",
    "T" : "A",
    "C" : "G",
    "G" : "C"
  }
  
  let comp = "";
  
  for(let i=0; i<dna.length; i++){
    comp += DNA[dna[i]];
  }
  return comp;
}

//Shortest Word

function findShort(s){
  let words = s.split(' ');
  
  let shortest = Infinity;
  
  for(let i = 0; i<words.length; i++){
    let wordLength = words[i].length;
    if(wordLength < shortest){
      shortest = wordLength;
    }
  }
  return shortest;
}

//Sum of Digits / Digital Root

function digital_root(n) {
  // ...
  while(n>9){
  const newN = n.toString().split('').map(i => parseInt(i)).reduce((a,b) => a+b);
  n = newN;
}
  return n;
  }

//Opposite number

function opposite(number) {
  
  return -number;
}

//p: num
//R: opposite number
//Ex: Pr
//P: pseudocode

//Will there be enough space?

function enough(cap, on, wait) {
  let pass = on+wait;
  return pass - cap > 0 ? pass - cap : 0;
}

//on is the number of people on the bus excluding the driver
//wait is the number of people waiting to get on to the bus
//will the driver be able to fit all the passengers.