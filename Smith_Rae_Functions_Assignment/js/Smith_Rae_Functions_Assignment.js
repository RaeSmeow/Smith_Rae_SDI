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
function InputSign()
{
    while(true) {
        userInput = prompt("Would you like to Add or Subtract?");
        if(userInput == "" ){
            continue;
        }
        if (userInput == "add" || numbers[1] == "Add") {
            return '+';
        }
        if (userInput == "Subtract" || numbers[1] == "subtract") {
            return '-';
        }
    }
}
function Calculator(first, sign, second)
{
    if(sign == '+')
    {
        return (first + second) ;
    }
    else
    {
        return (first - second);
    }
}

var answer = Calculator(InputNumber(), InputSign(), InputNumber());
console.log(answer);

