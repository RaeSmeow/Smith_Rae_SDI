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

//Inputting number.
while(true) {
    var userInput = prompt("Please enter a number.")
    var check = (userInput == "") ? false : true ;
    if(check) {
        if (Number(userInput) || userInput == 0) {
            numbers[0] = userInput;
            break;
        }
    }

}

//console.log(numbers[0]);
while(true)
{
//Asking to add or subtract.
    userInput = prompt("Would you like to Add, Subtract, Multiply or Divide?");
    var check = (userInput == "") ? false : true ;
    if(check) {
        numbers[1] = userInput;
    }
//console.log(numbers[1]);

//If User puts something other then add or subtract.
//Checking to see if it's addition or subtraction.

    if (numbers[1] == "add" || numbers[1] == "Add") {

        //Inputting another number for addition.
        while(true) {
            userInput = prompt("Please enter a number to Add.");
            var check = (userInput == "") ? false : true ;
            if(check) {
                if (Number(userInput) || userInput == 0) {
                    numbers[2] = userInput;
                    break;
                }
            }
        }



        //Creating a string for the answer.
        var answer = Number(numbers[0]) + Number(numbers[2]);

        //Showing the answer to the User.
        console.log(numbers[0] + " + " + numbers[2] + " = " + answer);
        break;
    }
    else if (numbers[1] == "Subtract" || numbers[1] == "subtract") {
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
    else if (numbers[1] == "Multiply" || numbers[1] == "multiply") {

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
    else if (numbers[1] == "Divide" || numbers[1] == "divide") {
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
        var answer = Number(numbers[0]) - Number(numbers[2]);

        //Showing the answer to the User.
        console.log(numbers[0] + " / " + numbers[2] + " = " + answer);
        break;
    }
    else{
        continue;
    }
}

