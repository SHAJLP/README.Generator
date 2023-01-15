//  External packages
const inquirer = require('inquirer')
const fs = require ('fs');


// // TODO: Create an array of questions for user input
    const userQuestions = [
    {
        type: "input",
        name: "title",
        message: "Project title",
    },
    {
        type: "input",
        name: "description",
        message: "Project description",
    },
    {
        type: "input",
        name: "installation",
        message: " DOes this project require an installation process?",

    },
    {
        type: "input",
        name: "usage",
        message: "Application usage",

    },
    {
        type: "input",
        name: "contribution",
        message: "Contribution information",

    },
    {
        type: "input",
        name: "email",
        message: " Enter email",
    }, 
    {
        type: "input",
        name: "github",
        message: "Github user name",

    }, 
    {                  
          type: "input",
          name: "github",
          message: "Github questions",

    }, 

];

const generateReadMe = (answers) => {
 
    // 
    return `#Title:${answers.title} ! [ISC]


}
