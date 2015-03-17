
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
//How long will it take to get a million zombies?
