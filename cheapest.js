// mobile phone এর সব থেকে কম দামের টা দেখানো হইয়েছে phone.price < min.price
// mobile phone এর সব থেকে বেশি দামের টা দেখানো হইয়েছে phone.price > min.price

const phones = [
  { name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},  
  { name: 'xoami', price: 18000, camera: '12mp', color: 'black'},  
  { name: 'oppo', price: 30000, camera: '12mp', color: 'black'},  
  { name: 'iphone', price: 100000, camera: '12mp', color: 'black'},  
  { name: 'walton', price: 31000, camera: '12mp', color: 'black'},  
  { name: 'htc', price: 27000, camera: '12mp', color: 'black'},  
]

function getCheapestphone(phones){
    let min = phones [0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone
        }
    }
    return min;
}
const min = getCheapestphone(phones);
console.log(min);