const fs = require("fs");
const inquirer = require("inquirer");
// const { default: Choices } = require("inquirer/lib/objects/choices");
// const { type } = require("os");
// const path = require("path");
 const generateMarkDown = require("./utils/generateMarkdown");

// // TODO: Create an array of questions for user input
    function userInput(){
        return inquirer.prompt([
    
    {
        type: "input",
        name: "title",
        message: "Project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Project description?",
    },
    {
        type: "input",
        name: "installation",
        message: "Does this project require an installation process?",

    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions on how this project would be used?",

    },
    {
        type: "list",
        name: "license",
        message: "Project license",
        choices: ["ISC","MIT"]   

    },
    {
        type: "input",
        name: "contribution",
        message: "If applicable, provide guidelines as to how other developers can contribute to your project?",

    },
    {
        type: "input",
        name: "test",
        message: "Provide any tests written for your application and how to run them, if applicable?",
    },
    {
        type: "input",
        name: "email",
        message: "Enter email?",
    }, 
    {
        type: "input",
        name: "github",
        message: "Github username?",

    }, 
    

])};
//Create function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
  }
  
  
  
  // TODO: Create a function to initialize app
  async function init() {
    let answers = await userInput();
      writeToFile((answers.fileName),(generateMarkdown(answers)));
  }
  
  // Function call to initialize app
  init();

