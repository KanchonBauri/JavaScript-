/*
for(starting value; condition; increment/decriment){

}
*/

// for loop diye rasel nam ta ai khane 5 bar output dekhabe
for(let i = 1; i<=5; i++ ){
    // console.log( i, "rasel");
}

let x = ["a","b","c","d","e","f","g","h"];
// console.log(x);

for(let i=0; i<x.length; i++){
    // console.log(x[i])
}

// -------------

let i=0;
while(i<x.length){
    // console.log(x[i]);
    i++
}

// --------------

for(let item of x){
    // console.log(item);
}
/*
output:
a
b
c
d
e
f
g
h
*/

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

let y = ["a","b","c","d","e","f","g","h"];

for(let i=y.length-1; i>=0; i--){
    // console.log(y[i]);
}

// ---------------

let n = y.length-1;
while(n>=0){
    //  console.log(y[n]);
     n--
}

// --------------

for(let item of y.reverse()){
    // console.log(item);
}
/*
output:
h
g
f
e
d
c
b
a
*/

// ------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------

// nested loop

let z = ["AAAAAA", "BBBBBB", "CCCCCC", "DDDDDD", "EEEEEE"]

for(let i=0; i<=z.length; i++){
    // console.log("first-loop", z [i] )
    for(let j=1; j<=3; j++){
        // console.log("second-loop", j)
    }
}/*
output:
first-loop AAAAAA
second-loop 1
second-loop 2
second-loop 3
first-loop BBBBBB 
second-loop 1
second-loop 2
second-loop 3
first-loop CCCCCC
second-loop 1
second-loop 2
second-loop 3
first-loop DDDDDD
second-loop 1
second-loop 2
second-loop 3
first-loop E
second-loop 1
second-loop 2
second-loop 3
first-loop undefined
second-loop 1
second-loop 2
second-loop 3
*/
// ---------------------------------------------------
for(let i=1; i<=5; i++){
    console.log("first-loop", i)
    for(let j=1; j<=5; j++){
        console.log("second-loop", j)
    }
}/*
output:
first-loop 1
second-loop 1
second-loop 2
second-loop 3
second-loop 4
second-loop 5
first-loop 2 
second-loop 1
second-loop 2
second-loop 3
second-loop 4
second-loop 5
first-loop 3 
second-loop 1
second-loop 2
second-loop 3
second-loop 4
second-loop 5
first-loop 4 
second-loop 1
second-loop 2
second-loop 3
second-loop 4
second-loop 5
first-loop 5
second-loop 1
second-loop 2
second-loop 3
second-loop 4
second-loop 5
*/