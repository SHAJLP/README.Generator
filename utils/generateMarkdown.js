// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg),[MIT](https://img.shields.io/badge/${license}-License-green)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string


function renderLicenseLink(license) {
  if (license != 'none') {
    return `* [License](#license)`;
  } else {
    return "";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license != 'none') {
    return `## License`;
  } else {
    return "";
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.fileName}
  ## Badges
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  
  ${renderLicenseLink(data.license)}
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions?](#questions)
  ${renderLicenseSection(data.license)}
 
  ## Description
  ${data.description}
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Contributing
  [Contributor Covenant](https://www.contributor-covenant.org/)  
  ${data.contributing}
  ## Tests
  ${data.testing}
  ## Questions?
  ### Reach me here: 
  [${data.username}](https://github.com/${data.username})  
  ${data.email}`;
}

module.exports = generateMarkdown;