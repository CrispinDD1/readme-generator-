// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license}-black.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License\n This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Credits](#credits)
  ${renderLicenseLink(data.Licese)}
  - [Contributing](#contributing)
  - [Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Features 
  ${data.features}

  ## Credits 
  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Contributing 
  ${data.howToContribute}

  ## Tests 
  ${data.tests}
`;
}

module.exports = generateMarkdown;
