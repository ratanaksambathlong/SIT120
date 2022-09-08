//Task 1

let myName = "John Doe";

console.log(myName);

// myName string displays the letter specified my the number vaule. In this case the value is set to 1 which shows the second index of letter "o" in "Jonh Doe"

console.log(myName.charAt(1));

// indexOf is almost the opposite of charAT string finds the shows the number instead of the letter. It shows that the index of o is "1" which is the second index.

console.log(myName.indexOf("o"));

// lastIndexOf will display the last reocurring index of the letters. Since there are two "o" in "Jonh Doe", it will display that indext value of the second o (in "Doe") which is number 6

console.log(myName.lastIndexOf("o"));

//Task 2
let fruitName = ["Banana", "Orange", "Apple", "Mango"];

//Display in exact order with a comma and spacing in between each fruit.
console.log(fruitName.join(", "));

//display in reverse order
console.log(fruitName.reverse(""));

let oddNumber = [7, 5, 3, 9, 1];

//Display odd numbers
console.log(oddNumber);

//Sort odd number from lowest to highest
console.log(oddNumber.sort());

let wordSentence = {
  name: "dog",
  adjective: "bites",
  person: "man",
};

console.log(wordSentence.name, wordSentence.adjective, wordSentence.person);

//Display word in all caps
let upperWord = "this sentence will be displayed in all caps";
let upperSentence = upperWord.toUpperCase();
console.log(upperSentence);

//Task 3
// Dates can be displayed in string format with the following method.

const date = new Date();
date.toString();
console.log(date);

// Display date added manually

const date3 = new Date("September 9, 1999 9:09:09");
console.log(date3);

// Alternative way to manually display the date

const date5 = new Date(2018, 11, 20, 10, 30, 30);
console.log(date5);
