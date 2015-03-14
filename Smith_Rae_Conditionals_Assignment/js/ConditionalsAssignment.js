/*
Rae Smith
3-12-15
Section 00
Conditionals Assignment
Scalable Data Infrastructures
 */

//alert("Testing.");
// variable to check and see if prompts are valid
var check = false;
// random values for the lottery
var lottery = [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)];
// values the user will input for there guess
var lotteryCheck = [1,2,3,4,5]
//loop for validation
while(true)
{
    // prompting the user for a value and storing it at sub 0
    lotteryCheck[0] = prompt("Please enter the first of your Lottery Numbers.");
    // checking to see if they entered anything
    (lotteryCheck[0] == "") ?check = true:check = false;
    if(check)
    {
        //if they entered nothing telling them so and reprompting the user.
        console.log("Please enter something");
        continue;
    }
    //checking to see if the number is out of range
    else if(Number(lotteryCheck[0]) >99 || Number(lotteryCheck[0] < 0))
    {
        //if so we tell them and reprompt them.
        console.log(("Please pick a number between 0 and 100"))
        continue;
    }
    //making sure it's a number
    else if (Number(lotteryCheck[0]))
    {
        //if so telling them what they picked.
        console.log("You've picked the #"+ lotteryCheck[0])
        break;
    }
    //otherwise we just reprompt them again.
    else{
        continue;
    }
}
while(true)
{
    lotteryCheck[1] = prompt("Please enter the second of your Lottery Numbers.");
    (lotteryCheck[1] == "") ?check = true:check = false;
    if(check)
    {
        console.log("Please enter something");
        continue;
    }
    else if(Number(lotteryCheck[1]) >99 || Number(lotteryCheck[1] < 0))
    {
        console.log(("Please pick a number between 0 and 100"))
        continue;
    }
    else if (Number(lotteryCheck[1]))
    {
        console.log("You've picked the #"+ lotteryCheck[1])
        break;
    }
    else{
        continue;
    }
}
while(true)
{
    lotteryCheck[2] = prompt("Please enter the third of your Lottery Numbers.");
    (lotteryCheck[2] == "") ?check = true:check = false;
    if(check)
    {
        console.log("Please enter something");
        continue;
    }
    else if(Number(lotteryCheck[2]) >99 || Number(lotteryCheck[2] < 0))
    {
        console.log(("Please pick a number between 0 and 100"))
        continue;
    }
    else if (Number(lotteryCheck[2]))
    {
        console.log("You've picked the #"+ lotteryCheck[2])
        break;
    }
    else{
        continue;
    }
}
while(true)
{
    lotteryCheck[3] = prompt("Please enter the fourth of your Lottery Numbers.");
    (lotteryCheck[3] == "") ?check = true:check = false;
    if(check)
    {
        console.log("Please enter something");
        continue;
    }
    else if(Number(lotteryCheck[3]) >99 || Number(lotteryCheck[3] < 0))
    {
        console.log(("Please pick a number between 0 and 100"))
        continue;
    }
    else if (Number(lotteryCheck[3]))
    {
        console.log("You've picked the #"+ lotteryCheck[3])
        break;
    }
    else{
        continue;
    }
}
while(true)
{
    lotteryCheck[4] = prompt("Please enter the fifth of your Lottery Numbers.");
    (lotteryCheck[4] == "") ?check = true:check = false;
    if(check)
    {
        console.log("Please enter something");
        continue;
    }
    else if(Number(lotteryCheck[4]) >99 || Number(lotteryCheck[4] < 0))
    {
        console.log(("Please pick a number between 0 and 100"))
        continue;
    }
    else if (Number(lotteryCheck[4]))
    {
        console.log("You've picked the #"+ lotteryCheck[4])
        break;
    }
    else{
        continue;
    }
}
//telling them the right numbers for the lottery
console.log("The First Number Today is.....");
console.log(lottery[0]);
console.log("The Second Number Today is....");
console.log((lottery[1]));
console.log("The Third Number Today is.....");
console.log(lottery[2]);
console.log("The Fourth Number Today is....");
console.log((lottery[3]));
console.log("The Fifth Number Today is.....");
console.log(lottery[4]);

// loop to check correctness
for(var i = 0; i < lottery.length; i++)
{
    //if they got it right
    if(lottery[i] == lotteryCheck[i])
    {
        switch(i)
        {
            //checking to see what number they got right.
            //then telling them so
            case 0:
                console.log("You got the first number right!");
                break;
            case 1:
                console.log("You got the second number right!");
                break;
            case 2:
                console.log("You got the third number right!");
                break;
            case 3:
                console.log("You got the fourth number right!");
                break;
            case 4:
                console.log("You go the fifth number right!");
                break;
        }
    }
    else
    {
        //checking to see what number they got wrong.
        //then telling them so
        switch(i)
        {
            case 0:
                console.log("You got the first number wrong!");
                break;
            case 1:
                console.log("You got the second number wrong!");
                break;
            case 2:
                console.log("You got the third number wrong!");
                break;
            case 3:
                console.log("You got the fourth number wrong!");
                break;
            case 4:
                console.log("You go the fifth number wrong!");
                break;
        }
    }
}
//telling you that you won the lottery!!!!!!
//yay you
if(lotteryCheck[0] == lottery[0] && lotteryCheck[1] == lottery[1] && lotteryCheck[2] == lottery[2] && lotteryCheck[3] == lottery[3] && lotteryCheck[4] == lottery[4])
{
    console.log("HOLY CRAP YOU WON THE FRIGGIN LOTTERY!!!!")
    console.log("Too bad it's only theoretical:p");
}


//////////////////////
//    Test Values   //
//     1,2,3,4,5    //
//                  //
//     Outcomes     //
//Randomly generated//
//////////////////////



//The End.