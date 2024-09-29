// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-black})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None') {
    return '';
  }
  return `* [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return '';
  }
  return `## License 
  This project is licensed under ${license}.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents
  ${data.tableOfContents ? data.tableOfContents : 'No table of contents provided.'}
  ${renderLicenseLink(data.license)}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Badges 
  ${data.badges ? data.badges : 'No badges provided.'}

  ## Features
  ${data.features}

  ## How to Contribute 
  ${data.howToContribute}

  ## Tests 
  ${data.tests}

  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
