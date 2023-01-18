// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {if (license) {
  return `
  [License](#license) `;
} else {
  return "";
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
    [License](#license) `;
  } else {
    return "";
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Eamail](#email)
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



module.exports = generateMarkdown;
