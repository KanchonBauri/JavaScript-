// এখানে একটা variable মানে সাথে আর একটা variable মানের পরিবর্তন করানো হয়েছে 
let a = 5;
let b = 7;

const temp = a;
a = b;
b = temp;
// console.log(a, b); //output: 7 5

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
    console.log(i);
 }, 100);
}