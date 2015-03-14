
 /*
Rae Smith
3-14-15
Section 00
Day 6 Loops
 */


//alert("Just testing.");

//Basic While Loop.
//Start a Counter.
var counter = 0;
//Start the while loop.
//Condition to test goes inside ().
 while(counter < 200){
    console.log("Somethings never end.");
     console.log(counter);
     //Make a change to the counting variable.
     counter++;
 }

//Do While Loop.
//This loop will run the code first then check a condition.
/*
Do{
    //Code to run
} while(condition to test);
 */
 //Declare a counting variable.
 var I = 0;
 do{
    console.log("The number is " + I);
 //Change the counting variable.
     I++
 } while(I < 100);

//Supposed make a new page and stuff but I'ma keep this one.


 //Basic For Loop
 //for(initalization; condition; incriment of change){}
 //We use I alot in loops. It stands for iteration.
 for(var I = 0; I < 20; I += 4){
     console.log("The value of I is " + I);
 }
console.log(I);

 //Break in a loop.
 for(J = 0; J < 5; J++){
//(var J = 5; J > 0; J--)
//Conditional to test if we should break the loop.
//If the value J is J, then console.log something different to stop the loop.
     if(J === 3){
         //Stop the loop, but first console.log out something.
         console.log("J is 3.");
         break;
     }
     console.log("The value of J is" + J);
 }

 //Specific cases for each value.
 for(var K = 0; K < 3; K++){
     if(K === 0){
         console.log("The value is zero.");
     } else if(K == 1){
         console.log("The value is one.");
     } else if(K == 2){
         console.log("The value is two.");
     }
 }

 //Again I was supposed make a new page but nahh.
 //Validation.

 //Ask the User for a number.
 var num1 = prompt("Please enter a number.");
 //Validate that the User typed in a number and didn't leave it blank.
 //Validate using a while loop.
 while(isNaN(num1)|| num1 ===""){
     //Reprompt the User.
     if(num1 ===""){
         //The User left it blank.
         num1 = prompt("Please do not leave blank.\nPlease type in a number.");
     } else if(isNaN(num1)){
         num1 = prompt("Please only type in numbers.\nPlease enter a number.");
     }
 }

//Ask the User a Yes or No question/
 var userInput = prompt("Please enter yes or no.");
 //Convert to lower case.
 userInput = userInput.toLowerCase();
 //Validate.
 while(userInput !="yes" && userInput !="no"){
//Reprompt.
     userInput = prompt("Please only enter in yes or no.\nPlease type in ye sor no. ");
 }
 