#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Number Guessing Game!!");
let number = Math.floor(Math.random() * 6 + 1);
let condition = true;
while (condition) {
    let answer = await inquirer.prompt([{
            message: "Please Guess Your Number between 1 to 6?", type: "Number", name: "Guessednumber"
        }]);
    if (answer.Guessednumber == number) {
        console.log("\nCongratulations, You guessed the Right Number\n");
    }
    else {
        console.log("\nYou guessed wrong number!\n");
    }
    let confirm = await inquirer.prompt([
        { message: "Do you want to try again ?", type: "confirm", name: "conf", default: "true" }
    ]);
    condition = confirm.conf;
}
