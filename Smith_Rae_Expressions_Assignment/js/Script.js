/*
Rae Smith
3-7-15
Section 00
Expressions Assignment
 */

//alert ("Testing.");

//Initializing an array.
var numbers= ["8", "5", "Add"];

//Inputting number.
while(true) {
    var userInput = prompt("Please enter a number.")
    if(Number(userInput) || userInput == 0) {
        numbers[0] = userInput;
        break;
    }

}

//console.log(numbers[0]);
while(true)
{
//Asking to add or subtract.
userInput = prompt("Would you like to Add or Subtract?");
numbers[1] = userInput;
//console.log(numbers[1]);

//If User puts something other then add or subtract.
//Checking to see if it's addition or subtraction.

    if (numbers[1] == "add" || numbers[1] == "Add") {

            //Inputting another number for addition.
        while(true) {
            userInput = prompt("Please enter a number to Add.");
            if (Number(userInput)|| userInput == 0) {
                numbers[2] = userInput;
                break;
            }
        }


        //Creating a string for the answer.
        var answer = Number(numbers[0]) + Number(numbers[2]);

        //Showing the answer to the User.
        console.log(numbers[0] + " + " + numbers[2] + " = " + answer);
        break;
    }
    if (numbers[1] == "Subtract" || numbers[1] == "subtract") {
            //Inputting another number for subtraction.
        while(true) {
            userInput = prompt("Please enter a number to Subtract.");
            if (Number(userInput) || userInput == 0) {
                numbers[2] = userInput;
                break;
            }
        }


        //Creating a string for the answer.
        var answer = Number(numbers[0]) - Number(numbers[2]);

        //Showing the answer to the User.
        console.log(numbers[0] + " - " + numbers[2] + " = " + answer);
        break;
    }
}
//The End.