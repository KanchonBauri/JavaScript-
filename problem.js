// sum of array numbers
const numbers = [1,2,3,4,5]

// 1+2+3+4+5 = 15, numbers ভিতরে সবগুলো element এর যোগফল বের করার নিয়ম
let sum = 0;
for(let item of numbers){
    sum = sum + item;
}
// console.log(sum);
// output: 15

// -----------------------

const allNumbers = [1,2,3,4,5,6,7] 
//allNumbers ভিতরে সবগুলো element এর evens number বের করার নিয়ম
let evens = []
for(let number of allNumbers){
    if(number % 2 === 0){
        evens.push(number);
    }
}
// console.log(evens);
// output: [ 2, 4, 6 ]

// --------------------------------

//allNumbers ভিতরে সবগুলো element এর odd number বের করার নিয়ম
let odd = []
for(let number of allNumbers){
    if(number % 2 === 1){
        odd.push(number);
    }
}
console.log(odd);
// output: [ 1, 3, 5, 7 ]