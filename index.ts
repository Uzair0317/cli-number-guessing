#!/usr/bin/env node
import inquirer from "inquirer";

// 1) Computer Will Genrate a Random Number  Done

// 2) User input for guessing Number Done

// 3) Compare user input with Computer guessing Number and show results Done

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt ([
{
    name: "userGuessedNumber", 
    type: "number",
    message:"Please Guess a Number Between 1 to 10"
    },

])

if (answer.userGuessedNumber===randomNumber) 
    {console.log("Congratulation You Guesses Right Number");}
else {
    console.log("You Guessed Wrong Number");
}