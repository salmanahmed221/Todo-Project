#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function Welcome() {
    const Karaoketitle = chalkAnimation.karaoke("Welcome to the Todo App\n");
    await sleep();
    Karaoketitle.stop();
}
await Welcome();
async function TodoApp() {
    let todoarry = [];
    let start = true;
    while (start) {
        const data = await inquirer.prompt([
            {
                name: "todolist",
                type: "string",
                message: chalk.bgGray("Enter your todo?"),
            },
            {
                name: "Addmore",
                type: "confirm",
                message: chalk.bgGray("Do you want to addmore todo?"),
                default: false,
            },
        ]);
        const { todolist, Addmore } = data;
        start = Addmore;
        if (todolist) {
            todoarry.push(todolist);
        }
        if (todoarry.length > 0) {
            console.log(chalk.bgBlue("Your Todo list is :"));
            for (let i of todoarry) {
                console.log(chalk.blue(i));
            }
        }
        else {
            console.log(chalk.bgRed("Kindly Write Something !"));
        }
    }
}
async function StartAgain() {
    do {
        await TodoApp();
        var question = await inquirer.prompt([
            {
                name: "restart",
                type: "input",
                message: "Do you want to Continue? y or n",
            },
        ]);
    } while (question.restart === "y");
}
await StartAgain();
