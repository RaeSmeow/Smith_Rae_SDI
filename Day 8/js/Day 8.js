/*
Rae Smith
3-24-15
Section 00
Day 8
*/

//alert("Just testing.");

//Random.
//Create a function that will give us a random integer between two values.
//Create variables for minimum and maximum variables.
var min = 22;
var max = 63;
//Function call.
var ranNum = getRandom(min, max);
console.log("Your random number between "+min+" and "+max+" is "+ranNum+".");
//Create our function.
function getRandom(min, max){
    //Generate a random integer.
    var randomNumber = Math.round(Math.random()*(max-min));
    return randomNumber;
}
