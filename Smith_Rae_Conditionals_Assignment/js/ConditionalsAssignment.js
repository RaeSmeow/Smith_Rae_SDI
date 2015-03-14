/*
Rae Smith
3-12-15
Section 00
Conditionals Assignment
Scalable Data Infrastructures
 */

//alert("Testing.");

//Initializing an array.
var numbers= ["17", "42", "Add"];

//Loop for validation.
while(true) {
    //Prompting the User for the first number.
    var userInput = prompt("Please enter a number.");
    //Checking to see if the User inputted nothing.
    var check = (userInput == "") ? false : true ;
    //Conditional to make sure the user didn't input nothing.
    if(check) {
        //Conditional to check to make sure the user inputted a number.
        if (Number(userInput) || userInput == 0) {
            //Setting the first number in the array to the inputted number.
            numbers[0] = userInput;
            //Breaking from the loop.
            break;
        }
    }
}

//Loop for validation.
while(true)
{
//Asking to add, subtract, multiply or divide.
    userInput = prompt("Would you like to Add, Subtract, Multiply or Divide?");
    //Checking to see if the user inputted nothing.
    var check = (userInput == "") ? false : true ;
    //Conditional to make sure the user didn't input nothing.
    if(check) {
        //Setting the string in the array to the inputted string.
        numbers[1] = userInput;
    }
//console.log(numbers[1]);

//If User puts something other then addition, subtraction, multiplication, or division, prompt will pop back up.

//Checking to see what the User put in.
    if (numbers[1] == "Add" || numbers[1] == "add" || numbers[1] == "+") {

        //Loop for validation.
        while(true) {
            //Prompting the User to input another number.
            userInput = prompt("Please enter a number to Add.");
            //Checking to see if the user inputted nothing.
            var check = (userInput == "") ? false : true ;
            //Conditional to make sure the user didn't input nothing.
            if(check) {
                //Conditional to check to make sure the user inputted a number.
                if (Number(userInput) || userInput == 0) {
                    //Setting the second number in the array to inputted number.
                    numbers[2] = userInput;
                    //Breaking from the loop.
                    break;
                }
            }
        }

        //Creating a string for the answer.
        var answer = Number(numbers[0]) + Number(numbers[2]);

        //Showing the answer to the User.
        console.log(numbers[0] + " + " + numbers[2] + " = " + answer);
        //Breaking from the loop.
        break;
    }
    else if (numbers[1] == "Subtract" || numbers[1] == "subtract" || numbers[1] == "-") {
        //Inputting another number for subtraction.
        while(true) {
            userInput = prompt("Please enter a number to Subtract.");
            var check = (userInput == "") ? false : true ;
            if(check) {
                if (Number(userInput) || userInput == 0) {
                    numbers[2] = userInput;
                    break;
                }
            }
        }

        //Creating a string for the answer.
        var answer = Number(numbers[0]) - Number(numbers[2]);

        //Showing the answer to the User.
        console.log(numbers[0] + " - " + numbers[2] + " = " + answer);
        break;
    }
    else if (numbers[1] == "Multiply" || numbers[1] == "multiply" || numbers[1] == "*") {

        //Inputting another number for addition.
        while(true) {
            userInput = prompt("Please enter a number to multiply.");
            var check = (userInput == "") ? false : true ;
            if(check) {
                if (Number(userInput) || userInput == 0) {
                    numbers[2] = userInput;
                    break;
                }
            }
        }

        //Creating a string for the answer.
        var answer = Number(numbers[0]) * Number(numbers[2]);

        //Showing the answer to the User.
        console.log(numbers[0] + " * " + numbers[2] + " = " + answer);
        break;
    }

    else if (numbers[1] == "Divide" || numbers[1] == "divide" || numbers[1] == "/") {
        //Inputting another number for subtraction.
        while(true) {
            userInput = prompt("Please enter a number to divide.");
            var check = (userInput == "") ? false : true ;
                if(check) {
                if (Number(userInput) || userInput == 0) {
                    numbers[2] = userInput;
                    break;
                }
            }
        }

        //Creating a string for the answer.
        var answer = Number(numbers[0]) / Number(numbers[2]);

        //Showing the answer to the User.
        console.log(numbers[0] + " / " + numbers[2] + " = " + answer);
        break;
    }
    else{
        continue;
    }
}

//The End.