
 /*
Rae Smith
3-12-15
Section 00
Day 5 Nesting Ifs
 */


//alert("Just testing.");

//Some decisions affect other decisions.

 //If it is warm, then lets go to the beach. If it is not, then lets go to the movies.

 //Get the temperature.
 var temp = 75;

 //Set the water temperature.
 var waterTemp = 80;

 if (temp >= 80){
     console.log("Let's go to the beach!");

     if (waterTemp > 75){
         console.log("Let's go swimming!");
     } else {
         console.log("Let's go tanning!");
     }

 } else {
     console.log("Let's go to the movies!");


 }

 //Do we have any kids in the group?
 var kids = "No.";
 //Test if we have kids.
 if(kids === "No."){
     console.log("Let's see Fifty Shades of Grey.");
 } else {
     console.log("Let's go see SpongeBob.");
 }


 /*
 //If the water temp is above 75, let's go swimming. If not, let's get a tan.

 if (waterTemp > 75){
     console.log("Let's go swimming!");
 } else {
     console.log("Let's go tanning!");
 }
*/

