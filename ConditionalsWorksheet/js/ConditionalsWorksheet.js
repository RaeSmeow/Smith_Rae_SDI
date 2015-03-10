/*
Rae Smith
3-10-15
Section 00
Conditionals Worksheet
 */

//alert("Testing.");

//Group 1, Converting Celsius to Fahrenheit.
var temp = 0;

var conversion = ("C");'';

var temp2 = 0;

while(true) {
    var userInput = prompt("Please enter a temperature.");
    if (Number(userInput)|| userInput == 0) {
        temp = userInput;
        break;
    }
}
while(true) {
    var userInput = prompt("Please enter the Unit of the Temperature. (Group 1)");
    if (userInput == "Celsius" || userInput == "celsius") {
        conversion = userInput;
        temp2 = temp * (9/5) + 32;
        console.log(temp + " is " + temp2 + " in Fahrenheit");
        break;
    }
    if (userInput == "Fahrenheit" || userInput == "fahrenheit") {
        conversion = userInput;
        temp2 = (temp - 32) * (5/9);
        console.log(temp + " is " + temp2 + " in Celsius");
        break;
    }
}


//Group 2, Grade Letter Calculator.

var grade = "";
var gradeA = 100;
var gradeB = 89;
var gradeC = 79;
var gradeD = 72;
var gradeF = 69;

    var userInput = prompt("Please enter your grade. (Group 2)");

    if (userInput >= gradeA){
        grade = "A";
    }else if(userInput >= gradeB){
        grade = "B";
    }else if(userInput >= gradeC){
        grade = "C"

    }else if(userInput >= gradeD){
        grade = "D"
    }else if(userInput >= gradeF){}
        grade = "F"

console.log("You got a " + grade);

//Group 3, Movie Ticket Price

var ticketPrice = 0;
var age = 0;
var time = 0;

while(true) {
    var userInput = prompt("Please enter the hour. (Group 3.)");
    if (Number(userInput)|| userInput == 0) {
        time = userInput;
        break;
    }
}

while(true) {
    var userInput = prompt("Please enter your age.");
    if (Number(userInput) || userInput == 0) {
        age = userInput;
        break;
    }
}
if ((age >= 55 || age <= 10 ) || ( time >= 15 && time <= 17))
{
    console.log("Your ticket price $7.00.");
}
else{
    console.log("Your ticket price is $12.00.");
}
