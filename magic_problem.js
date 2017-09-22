//Trinity Terry
//09/22/2017
//Magic Date Program
//This program will calculate whether or not a date is magical.
//A date is maical if the product of the month and day equals the year
//then the date is magical. If it does not, then the date is not magical. 

//Declare Variables
var month
var day
var year

alert("Welcome to Magic Date Calculator" +
"\n\nThis program will calculate whether or not a date is magical. " +
"A date is magical if the product of the month and day equals the year " +
"then the date is magical. If it does not, then the date is not magical." +
" Enjoy!")

month = prompt("Enter month (Ex. for January input 01)");

day = prompt("Enter Day (Ex. 08, 18, 31)")

year = prompt("Enter last two digits of year (Ex. 98, 00, 45)")

if ((month*day)==year) {
    alert("This date is MAGICAL!!!")
} else {
    alert("Sadly, this date is not Magical :(")
}

