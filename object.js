const person = {
    name: "mehedy",
    address: "Rajshahi",
}
// console.log (person.address);
// output: Rajshahi

// console.log (person["address"]);
// output: Rajshahi

// console.log (typeof person.address);
// putput: string


// contact : "017000000000" এটা person এর মধ্যে অ্যাড করার নিয়ম 
person.contact = "0170000000"
// console.log(person);
//output: { name: 'mehedy', address: 'Rajshahi', contact: '0170000000' }


// mehedy এর যায়গাতে kanchon নাম টা অ্যাড করবো
person.name = "kanchon";
// console.log(person);
//output: { name: 'kanchon', address: 'Rajshahi', contact: '0170000000' }


//delete 
delete person.name;
// console.log(person);
//output:-  name : "mehedy" এটা delete হইয়ে যাবে


// একটা Object এর ভিতরে কি কি key এবং property আছে ওই গুলা চেক করবো
const key = Object.keys(person);
// console.log(key);
// output: [ 'address', 'contact' ]


// একটা Object এর ভিতরে কি কি value আছে ওই গুলা চেক করবো
const value = Object.values(person);
// console.log(value);
// output: [ 'Rajshahi', '0170000000' ]



function getMenu() {
 console.log("Burger, Pizza, Pasta");
}
getMenu()