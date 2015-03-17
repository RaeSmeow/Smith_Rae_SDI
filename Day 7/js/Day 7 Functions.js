
 /*
Rae Smith
3-17-15
Section 00
Day 7 Functions
 */


//alert("Just testing.");

//Code the song 99 Bottles of Beer on the Wall.
//Basic structure of For Loop.
//for(var I = 0; condition to test; increment of change){}
for(var I = 99; I > 0; I --) {
    if(I===1){
        console.log("1 bottle of beer on the wall. 1 bottle of beer. Take one down, pass it around. No more bottles of beer on the wall.\nThe End.");
    } else{
        console.log(I + " bottles of beer on the wall. "+I+"  bottles of beer. Take one down, pass it around. "+(I-1)+" bottles of beer on the wall.");
    }
} 