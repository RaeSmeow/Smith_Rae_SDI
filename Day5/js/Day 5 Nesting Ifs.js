
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
 var temp = prompt("We are going to figure out wheat you should do today!\nWhat is the current temperature outside?");

 //Validate that the user typed in a number.
 //isNaN() - is it not a number.
 //Literally says it out load. Is monkey not a number?
 console.log(isNaN(7)); //Gives us false.
 console.log(isNaN("Monkey."));

 if(isNaN(temp)){
     //This code will run when temp is not a number.
     //Reprompt the user for information. Second chance.
     temp = prompt("Please only type in numbers.\nEnter the temperature outside.");
 }

 //Validate that the User typed in something. Did they leave it blank?
 if(temp === ""){
     //This code will run if the User types in nothing.
     //Reprompt the User.
     temp = prompt("Please do not leave this blank, it is required.\nWhat is the current temperature outside?");
 }

 if (temp >= 80){
     console.log("Let's go to the beach!");
     //Set the water temperature.
     var waterTemp = prompt("What is the water temperature?");

     //Validate the water temperature.
     if(waterTemp === "" || isNaN(waterTemp)){
         //This code will run if the variable is blank or not a number.
         //Reprompt the User.
         waterTemp = prompt("Please do not leave blank and only use numbers.\nWhat is the water temperature?");
     }

     if (waterTemp > 75){
         console.log("Let's go swimming!");
         var knowSwim = prompt("Do you know how to swim?");

         //Convert the text string to lower case.
         //toLowerCase - dot syntax - use a period
         knowSwim = knowSwim.toLowerCase();
         console.log(knowSwim);

         //Validate the knowSwim variable.

         if(knowSwim !="Yes" && knowSwim != "yes" && knowSwim != "No" && knowSwim != "no"){
            //Reprompt the User.
             knowSwim = prompt("Only type in Yes or No.\nCan you swim?");
             knowSwim = knowSwim.toLowerCase();
         }

         if(knowSwim == "Yes" || "yes") {
             console.log("No floaties needed.");
         } else {
             console.log("Get a floatie.");
         }
     } else{
         console.log("Let's go tanning!");
     }
 } else {
     console.log("Let's go to the movies!");

     //Do we have any kids in the group?
     var kids = prompt("Are you bringing kids?");
     //Validate.
     //Convert to lowercase.
     kids = kids.toLowerCase();
     if(kids != "yes" && kids != "no") {

         kids = prompt("Please enter only yes or no.\nAre you bringing kids?");
         //Permanency convert to lowercase.
         kids = kids.toLowerCase();
     }

     //Test if we have kids.
     if(kids === "No."){
         console.log("Let's see Fifty Shades of Grey.");
     } else {
         console.log("Let's go see SpongeBob.");
     }
 }


 /*
 //If the water temp is above 75, let's go swimming. If not, let's get a tan.

 if (waterTemp > 75){
     console.log("Let's go swimming!");
 } else {
     console.log("Let's go tanning!");
 }
*/

/*
 //Do we have any kids in the group?

 var kids = "No.";
 //Test if we have kids.
 if(kids === "No."){
 console.log("Let's see Fifty Shades of Grey.");
 } else {
 console.log("Let's go see SpongeBob.");
 */