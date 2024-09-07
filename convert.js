// 12 inch 1 feet 
function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}
const shuvoErHeight = inchToFeet(75);
// console.log (`feet:-`, shuvoErHeight); 
// output: feet:- 6.25

// ---------------------------------------------------
// ---------------------------------------------------

// 75
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    // console.log(feetNumber); //output: 6
    const inchRemaining = inch % 12;
    // console.log(inchRemaining); //output: 3
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.';
    return result;
}
const shuvoErHeight2 = inchToFeet2(75);
// console.log(shuvoErHeight2); //output: 6 ft 3 inch.

// ---------------------------------------------------
// ---------------------------------------------------

// kilo meter to miles 
function kiloMeterToMiles(kilo) {
    const mile = kilo * 0.621371;
    return mile;
}
const miles = kiloMeterToMiles(26);
// console.log(miles);  //output: 16.155646

// ---------------------------------------------------
// ---------------------------------------------------

// mile to kilo meter 
function mileToKiloMeter(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}
const kilos = mileToKiloMeter(26)
// console.log(kilos); // output: 41.84284

// ---------------------------------------------------
// ---------------------------------------------------

// leap year 
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
const isLeap2022 = isLeapYear(2020);
// console.log(isLeap2022) //output: true
const isLeap2025 = isLeapYear(2025);
// console.log(isLeap2025) //output: false

// -----------------------------------------------------

// leap year
function isLeapYear2(year) {
    if (year % 4 === 0  &&  year % 100 !== 0) {
        return true;
    }else if(year % 400 === 0){
        return true;
    } else {
        return false;
    }
}
const isLeap2020 = isLeapYear2(2020);
// console.log(isLeap2020) //output: true
const isLeap2021 = isLeapYear2(2021);
// console.log(isLeap2021) //output: false