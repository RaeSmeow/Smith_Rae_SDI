
 /*
Rae Smith
3-17-15
Section 00
Day 7
 */


//alert("Just testing.");

//Code the song 99 Bottles of Beer on the Wall. Activity 1.
//Basic structure of For Loop.
//for(var I = 0; condition to test; increment of change){}
for(var I = 99; I > 0; I --) {
    if(I===1){
        console.log("1 bottle of beer on the wall. 1 bottle of beer. Take one down, pass it around. No more bottles of beer on the wall.\nThe End.");
    } else{
        console.log(I + " bottles of beer on the wall. "+I+"  bottles of beer. Take one down, pass it around. "+(I-1)+" bottles of beer on the wall.");
    }
}

//Zombies. Activity 2.
//Zombie Attack!
//We have accidentally created a zombie at Full Sail.
//A zombie can bite 4 people a day and infect them the next day.
//The CDC wants to know how many zombies there will be in 8 days.
//Givens that we know.

/*
//How many zombies do we have?
var numZombies = 1;
//How many bites per zombie , per day?
var numBites = 4;
//Number of days the CDC wants.
var days = 8;
//Create a For Loop to calculate the zombie number.
for(var I = 1; I <= days; I++){
    //How many new zombies turn every day?
    var newZombies = numZombies * numBites;
    //Add the new zombies to the existing horde.
    numZombies += newZombies;
    //console.log the results.
    console.log("There are "+numZombies+" number of zombies on Day "+I+"!");
}
*/
//How long will it take to get a million zombies?
var numDays = 1;
 while(numZombies <= 1000000) {
     //How many zombies do we have?
     var numZombies = 1;
//How many bites per zombie , per day?
     var numBites = 4;
//Number of days the CDC wants.
     var days = 8;
//Create a For Loop to calculate the zombie number.
     for (var I = 1; I <= days; I++) {
         //How many new zombies turn every day?
         var newZombies = numZombies * numBites;
         //Add the new zombies to the existing horde.
         numZombies += newZombies;
         //console.log the results.
         console.log("There are " + numZombies + " number of zombies on Day " + numDays + "!");
         numDays++;
     }
 }
     console.log("It will take "+(numDays-1)+" days to reach 1 million zombies.");

//Loop Arrays.
//Tell each member of the Scooby Gang that they solved a mystery.
//Create a Array of gang members.
var names = ["Scooby Doo", "Shaggy", "Velma", "Daphne", "Fred"];
//Add Scrappy Doo to the gang.
names.push("Scrappy Doo");
//Create For Loop to cycle through the Array.
for(var I = 0; I < names.length; I ++){
    //console.log each person.
    console.log("You solved the case "+names[I]+"!");
}

//Keep track of our bills and get the total and average.
var bills = [50, 10, 5, 20, 10];
//Create a variable to track the item total.
var numItems = 0;
//Create variable for total and average.
var total = 0;
var average = 0;
for(var J = 0; J < bills.length; J++){
    //Only add them if they are equal to or over $15.
    if(bills[J >= 15]){
        //Add each bill to the total.
        total += bills[J];
        numItems++;
    }
}
console.log("The total is "+total+".");
//Calculate the average.
average = total / bills.length;
console.log("The average is "+average+".");

//Functions.
//Basic structure of a function.
//function functionName(){code to run}
//Create a function that will console.log out "Hello!".
function printHello(){
    console.log("Hello!");
}
//Create a function that prints out more text.
function printMore(){
    console.log("Prints more text.");
}
//Function call the printHello function.
//functionName();
printHello();
printMore();
printHello();
//Function call the printMore.
printMore();

//Create a function that calculates the area of a rectangle.
function calcArea(){
    //Create variables for width, height, and area.
    var width = 20;
    var height = 30;
    var area = width * height;
    //Print out the area.
    console.log("The area is "+area+".");
}
//Function call the calcArea.
calcArea();
