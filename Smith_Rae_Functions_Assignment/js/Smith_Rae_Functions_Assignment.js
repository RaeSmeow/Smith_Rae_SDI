/*
Rae Smith
3-23-15
Section 00
Functions Assignment
*/

//alert("Just testing.");
//Initializing an array.

function InputNumber()
{
    while(true) {
        var userInput = prompt("Please enter a number.")
        if(userInput == ""){
            continue;
        }
        if(Number(userInput) || userInput == 0) {
            return Number(userInput);
        }
    }
}

function InputSign() {
    while (true) {
        userInput = prompt("Would you like to Add, Subtract, Multiply, or Divide?");
        if (userInput == "") {
            continue;
        }
        if (userInput == "Add" || numbers[1] == "add") {
            return '+';
        }
        if (userInput == "Subtract" || numbers[1] == "subtract") {
            return '-';
        }
        if (userInput == "Multiply" || numbers[1] == "multiply") {
            return '*';
        }
        if (userInput == "Divide" || numbers[1] == "divide") {
            return '/';
        }
    }
    function Calculator(first, sign, second) {
        if (sign == '+') {
            return (first + second);
        }
        else {
            return (first - second);
        }
    }

    var answer = Calculator(InputNumber(), InputSign(), InputNumber());
    console.log(answer);
}

//Test values.
//Addition: 7+8=15.
//Subtraction: 25-17=8.
//Multiplication: 7*6=42.
//Division: 8/2=4.
//The End.