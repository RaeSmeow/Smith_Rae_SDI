/*
Rae Smith
3-23-15
Section 00
Functions Assignment
*/

//alert("Just testing.");
//First function.

function InputNumber()
{
    while(true) {
        var userInput = prompt("Please enter a number.")
        //First variable and prompts the User to enter a number.
        if(userInput == ""){
            continue;
            //Depending what the User enters, the code either keeps running or reprompts the User if nothing is entered.
        }
        if(Number(userInput) || userInput == 0) {
            return Number(userInput);
            //Prompts the User for a second number and if the User doesn't enter anything then the code will reprompt the User.
        }
    }
}

//End of first function.
function InputSign() {
    while (true) {
        var userInput = prompt("Would you like to Add, Subtract, Multiply, or Divide?");
        //Asks the User whether they would like to add, subtract, multiply, or divide.
        if (userInput == "") {
            continue;
            //Depending on what the User inputs, the code will either keep going or if the User enters nothing then the code reprompts the User.
        }
        if (userInput == "Add" || userInput == "add") {
            return '+';
            //Different ways the User can enter if the User chooses addition.
        }
        if (userInput == "Subtract" || userInput == "subtract") {
            return '-';
            //Different ways the User can enter if the User chooses subtraction.
        }
        if (userInput == "Multiply" || userInput == "multiply") {
            //Different ways the User can enter if the User chooses multiplication.
            return '*';
        }
        if (userInput == "Divide" || userInput == "divide") {
            //Different ways the User can enter if the User chooses division.
            return '/';
        }
    }
}

//Third function. This function is for the results of the calculator and the actual variables the User enters into the code.
    function Calculator(first, sign, second) {
        if (sign == '+') {
            return (first + second);
        }
        else if(sign == '-'){
            return (first - second);
        }
        else if(sign == '*'){
            return (first * second);
        }
        else{
            return (first/second);
        }
    }

//Console.logs out of all the different choices the User can decide and pick and choose from.
    console.log("You are living in an apartment with 4 people. Your water bill is $128");
    console.log("Please you the calculator to find the correct amount of money for you to pay.")
    var first = InputNumber();
    var sign = InputSign();
    var second = InputNumber();
    var answer = Calculator(first, sign, second);
    console.log(first+" "+sign+" "+second+" = "+answer);

    console.log("You are living in an apartment with 4 people. Your portion of rent is $427.");
    console.log("Please you the calculator to find the overall cost of rent.")
    var first = InputNumber();
    var sign = InputSign();
    var second = InputNumber();
    var answer = Calculator(first, sign, second);
    console.log(first+" "+sign+" "+second+" = "+answer);

    console.log("You are paying $126 for an animal each month. another person pays $246 for the same animal.");
    console.log("Please you the calculator to find the correct amount of money you spend overall on the animal.")
    var first = InputNumber();
    var sign = InputSign();
    var second = InputNumber();
    var answer = Calculator(first, sign, second);
    console.log(first+" "+sign+" "+second+" = "+answer);

    console.log("You are paying $327 on something that costs $726");
    console.log("Please you the calculator to find the correct amount of money that someone else has to pay.")
    var first = InputNumber();
    var sign = InputSign();
    var second = InputNumber();
    var answer = Calculator(first, sign, second);
    console.log(first+" "+sign+" "+second+" = "+answer);
//Test values.
//Addition: 126+246=372.
//Subtraction: 726-327=399.
//Multiplication: 4*427=1736.
//Division: 128/4=32.
//The End.