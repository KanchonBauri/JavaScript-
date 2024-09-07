// inside a function
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
const max = getMax(67, 87);
// console.log(max); //output: 87
const max1 = getMax(97, 85);
// console.log(max1); //output: 97
const ultiMateMax = getMax(max1, max);
// console.log(ultiMateMax);  //output: 97