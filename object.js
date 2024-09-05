const person = {
    name : "mehedy",
    address : "Rajshahi",
}
console.log (person.address); // Rajshahi
console.log (typeof person.address); // string


// contact : "017000000000" এটা person এর মধ্যে অ্যাড করার নিয়ম 
person.contact = "0170000000"
console.log(person); //output: { name: 'mehedy', address: 'Rajshahi', contact: '0170000000' }


// mehedy এর যায়গাতে kanchon নাম টা অ্যাড করবো
person.name = "kanchon";
console.log(person); //output: { name: 'kanchon', address: 'Rajshahi', contact: '0170000000' }