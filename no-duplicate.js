function noDuplicate(array){
    const unique =[];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const biryaniKhor =["abul", "babul", "cabul", "abul", "babul", "dabul", "kabul", "cabul"]
const uniqueArray = noDuplicate(biryaniKhor);
// console.log(uniqueArray);   //output: [ 'abul', 'babul', 'cabul', 'dabul', 'kabul' ]