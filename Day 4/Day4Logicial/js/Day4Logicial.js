
 /*
Rae Smith
3-10-15
Section 00
Day 4 Logicial
 */


//alert("Just testing.");

//Basic conditional, if we hae enough money to buy a car.

 //Create a few variables
 var budget = 25000;
 var carPrice = 23000;
 var payCheck = 1400;

 if(budget>=carPrice){
    console.log("You can afford your car!");
 } else {
    console.log("You are broke. Take the bus.");
 }


 //We can buy the car if our budget is greater or equal to the car price or our paycheck is more than 1500.

 if (budget >= carPrice || payCheck >1500){
     console.log("You can buy the car.");
 } else {
     console.log("You don't make enough money and your budget is too low.");
 }

 /*
 True Table for || "Or"
 True, False, || = or.
 t || t = t
 t || f = t
 f || t = t
 f || f = f
  */

 /*
 True Table for && "And"
 t && t = t
 t && f = f
 f && t = f
 f && f = f
  */

 //You can buy a car if the budget is greater than or equal to the car price and your paycheck is over 1500.

 if(budget >= carPrice && payCheck > 1500){
     console.log("You can buy the car.");
 } else{
     console.log("Pick a cheaper car, or find a better job.");
 }

 