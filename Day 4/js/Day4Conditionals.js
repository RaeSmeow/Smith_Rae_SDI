
 /*
Rae Smith
3-10-15
Section 00
Day 4 Conditionals
 */


//alert("Just testing.");

//Basic Conditional
/*
if(condition to test){
    Code to run if the condition is true.
}
 */

 //Creates a boolean variable.
 var oldEnough = false;

 //If the kid is old enough, he can ride the roller coaster.
 if(oldEnough){
     //Code to run if the kid is old enough.
     console.log("The kid is old enough to ride the roller coaster.");
 } else {
     //Code to run if the kid is not old enough to ride the roller coaster.
     console.log("Sorry, you are too young.");
 }


//Relational Operators

 //If the kid is over 48 inches tall, then he can ride the roller coaster.
 var kidHeight = 47;

 //Create a variable for a minimum height requirement.
 var miniHeight = 48;

 //Create a variable for sneaker lifts.
 var sneakerLifts = 2;

 //Test the kid's height.
 if(kidHeight > miniHeight){
    console.log("Kid is tall enough to ride the roller coaster.");
 } else if(kidHeight+sneakerLifts > miniHeight){
     console.log("If you use enough napkins, you can ride the ride.");
 } else {
     console.log("Sorry, you are too short.");
 }

