/** module: 22-4
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

function oddAverage(numbers){
const odds = [];
for(const number of numbers){
    // console.log(number);
    if (number % 2 === 1){
        // console.log(number);
        odds.push(number);
    }
}
console.log('odds numbers', odds);
let sum = 0;
for (const number of odds){
    sum = sum + number;
}
const count = odds.length;
console.log('sum odds numbers', sum, 'length odds numbers', count);
const avg = sum / count;
return avg;
}
const numbers = [42, 13, 58, 81, 95];
const avg = oddAverage(numbers);
console.log('average of the odd numbers is:', avg);