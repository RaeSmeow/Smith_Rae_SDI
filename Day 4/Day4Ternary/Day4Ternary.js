
 /*
Rae Smith
3-10-15
Section 00
Day 4 Ternary
 */


//alert("Just testing.");

 //If your GPA is over 2.0, then you can graduate.

 //Create a variable for GPA.
 var gpa = 3.5;

 //Basic conditional
 if(gpa > 2.0){
     console.log("You can graduate!");
 } else {
     console.log("You cannot graduate.");
 }

 // (condition to test) ? code to run if true : code to rude if false ;

 //Create a basic ternary function for our GPA.
 (gpa > 2.0) ? console.log("You can graduate!") : console.log("You cannot graduate.");

 //If a child is under 10, then they must read Green Eggs and Ham, otherwise they can read The Time Machine.

 //Create a variable for child age and for the book they have to read.
 var age = 6;
 var book;

 //Use a ternary to define the book.

 book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";

 console.log("The kid should read "+book);


 //Value of book if basic conditional.

 var bookBasic;

 if(age < 10){
     bookBasic = "Green Eggs and Ham";
 } else {
     bookBasic = "The Time Machine";
 }

 console.log(bookBasic);
