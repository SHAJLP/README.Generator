const fs = require("fs");
const inquirer = require("inquirer");
const { default: Choices } = require("inquirer/lib/objects/choices");
const { type } = require("os");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

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
        message: "Does this project require an installation process?",

    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and/or examples of your project in use in the usage section",

    },
    {
        type: "list",
        name: "license",
        message: " Project license",
        choices: ["ISC","MIT"]   

    },
    {
        type: "input",
        name: "contribution",
        message: "If applicable, provide guidelines as to how other developers can contribute to your project",

    },
    {
        type: "input",
        name: "test",
        message: "Provide any tests written for your application and how to run them, if applicable",
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

const generateMarkdown = (answers) => {}
 
    function renderLicenseBadge(license) {
        if (license) {
          return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`;
        } else {
          return "";
        }
      }
      
      function renderLicenseLink(license) {
        if (license) {
          return `
          [License](#license) `;
        } else {
          return "";
        }
      }
      
      function renderLicenseSection(license) {
        if (license) {
          return `## License`;
        } else {
          return "";
        }
      }
      
      function generateMarkdown(data) {
        return `# ${data.title}
      ${renderLicenseBadge(data.license)}/ 
    

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    - [Github](#github)
    ## Description
    ${answers.description}
    ## Installation
    Please follow the instructions below:
    \`\`\`
    ${answers.installation}
    \`\`\`
    ## Usage
    Please follow the instructions below:
    \`\`\`
    ${answers.usage}
    \`\`\`
    ## License
    ${answers.license}
    ## Contributing
    ${answers.contributors}
    ## Tests
    Please follow the instructions below:
    \`\`\`
    ${answers.tests}
    \`\`\`
    ## Questions
    Please contact me at${answers.email}with any questions you have about the project
    ## Github
    https://github.com/${answers.github}
    `;
    };
    
    // 3. declare your init function to ask questions
    const init = async () => {
      // 1. get answers for the first set of questions
      const answers = await inquirer.prompt(userQuestions);
    
      // 2. Generate Readme
      const readMe = generateReadMe(answers);
    
      // 3. write to file generate readme
      fs.writeFileSync("generatedReadMe.md", readMe);
    };
    
    // 4. start application
    init(); 



