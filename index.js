console.log("Each correct answer gives you 2 points");
console.log("Each wrong answer takes your 1 point");
console.log("This is a 3 Question Quiz");

var readlineSync = require('readline-sync');
var q1 = readlineSync.question("what is the capital of Telangana ?");
var score = 0;
console.log("you gave the answer  - " + q1)

//Question1--------------
if (q1 === "hyderabad") {
    console.log("Right Answer ");
    score = score + 2;
}
else {
    console.log("Wrong Answer ");
    score = score - 1;
}

console.log("your score is  " + score);


//Question2----------
var q2 = readlineSync.question("What is the capital of Iran ?");
console.log("you gave the answer " + q2);

if (q2 === "tehran") {
    console.log("Right Answer ");
    score = score + 2;
}
else {
    console.log("Wrong Answer ");
    score = score - 1;
}

console.log("your score is " + score);

var q3 = readlineSync.question("What is the capital of Japan ?");
console.log("you gave the answer " + q3);

if (q3 === "tokyo") {
    console.log("Right Answer ");
    score = score + 2;
}
else {
    console.log("Wrong Answer ");
    score = score - 1;
}

console.log("your score is " + score);

console.log(" This is the End of the Quiz  .  Thanks !")

console.log("you Scored " + score);

