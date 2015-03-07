
 /*
Rae Smith
3-7-15
Section 00
Day 3 Casting
 */


//alert("Just testing.");

 //Casting variables means treating one datatype like another...if possible.

 var stringVar = "6";
 var results = 7 + stringVar;
 console.log(results);

 //Number() - treats whatever is inside like a number if possible.
var castingResults = 7 + Number(stringVar)
console.log(castingResults);


 //Cast numbers to be a text string
 //String() - treat whatevers is inside as a text string
 var areaCode = 407;
 var prefix = 555;
 var lineNumber = 1234;

 var phoneNumber = String(areaCode)+String(prefix)+String(lineNumber);
 console.log(phoneNumber);

 console.log("("+areaCode+")"+prefix+"-"+lineNumber);

 //Parsing Integers
 //parsInt() - looks through a text string and returns an integer
 //Only the first number in the string is returned.
 //If the first character in the text string cannot be converted into a number, then it returns NaN

 var a = parseInt("40 years old.");
 console.log(a);

 var b = Number("40 years old.");
 console.log(b);

 var c = parseInt ("He was 40.");
 console.log(c);



 //Prompts only return text strings

 var tshirtsOwned = prompt("How many tshirts do you currently own?");

 //Ask the User how many they bought.
 var tshirtsBought = prompt("How many tshirts did you buy today?");

 //Caculate the total number of tshirts.
 var totalShirts = parseInt(tshirtsOwned) + Number(tshirtsBought) ;

 console.log("You currently own " + totalShirts+' shirts.');