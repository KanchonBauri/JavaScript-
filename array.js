const numbers =  [ 24, 33, 45, 37, 46, 46];
console.log(`array`, numbers)
console.log( `array length`, numbers.length)

// index number বার করার নিয়ম এখানে চেক করবো ৩ নং ইনডেক্স এ কি আছে
const number = numbers[3]
console.log(`array index no3`, number)
// console.log(numbers[3])

// push
numbers.push(77);
console.log(`push 77`, numbers);

// pop 
numbers.pop();
console.log(`pop last element`, numbers)

// shift dile array er shamne teke deleted hoi
numbers.shift();
console.log(`shift`, numbers);

// unshift dile array er shamne teke add hoi
numbers.unshift(555555555555);
console.log(`unshift`, numbers)

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

const fruits =  ["amm", "jaam", "kathal"];
const flowers = ["gulap", "joba", "shapla", "beli"];

// slice -- ai khane 1,3 holo index number
console.log(`slice:-`, flowers.slice(1,3));

// join ব্যবহার করলে array k string পরিবর্তন করে দেয় তাছাড়া ("")এর ভিতরে যে কোন কিছু দেওয়া যাবে যেমনঃ ( = + - _  । )
const flo = flowers.join(" । ");
console.log(`join:-`, flo)
// console.log(`typeof:-`, typeof(flo)); er poriborte nicher ta bebohar korbo jodi array hoi tahole true dibe
console.log(Array.isArray(flo));

// split ব্যবহার করলে  string k array পরিবর্তন করে দেয় তাছাড়া (",")এর ভিতরে যে কোন কিছু দেওয়া যাবে
const string = "f,g,e,h,v,d,x,l";
const convert = string.split(",");
console.log(`split`, convert);
console.log(`type object:-`, typeof convert);

// indexOf মানে একটা variable & element এর নাম দিয়ে তার index number খুঁজে বের করা
const indexFruit = fruits.indexOf("jaam");
console.log(`indexOf`, indexFruit) 

// includes মানে একটা variable & element এর নাম দিয়ে খুঁজে বের করা যদি থাকে তাহলে true দিবে আর না হয় false দিবে
console.log(`includes`, flowers.includes("joba"))

// concat যুক্ত করা এখানে fruits এবং flowers যুক্ত করা হয়েছে
const flowersFruits = fruits.concat(flowers);
console.log(`concat`, flowersFruits)

