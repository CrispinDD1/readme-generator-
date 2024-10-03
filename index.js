// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
{
  type: 'input',
  name: 'title',
  message: 'What is the title of your project?'
},
{
  type: 'input',
  name: 'description',
  message: 'Provide a description of your project:'
},
{
  type: 'input',
  name: 'tableOfContents',
  message: "Add a table of contents if necessary:"
},
{
  type: 'input',
  name: 'installation',
  message: 'What are the steps of installation?'
},
{
  type: 'input',
  name: 'usage',
  message: 'How do you use this application?'
},
{
  type: 'input',
  name: 'credits',
  message: 'List any contributors:'
},
{
  type: 'input',
  name: 'license',
  message: 'Choose a license for your project:'
},
{
  type: 'input',
  name: 'badges',
  message: 'Add any badges you want to include:'
},
{
  type: 'input',
  name: 'features',
  message: 'List the features of your application:'
},
{
  type: 'input',
  name: 'howToContribute',
  message: 'How can people contribute?'
},
{
  type: 'input',
  name: 'tests',
  message: 'Provide instructions for running tests:'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>{
    if (err) {
      console.error(err);
    } else {
      console.log('Success! README.md has been created.')
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile('README.md', markdownContent);
  });
}

// Function call to initialize app
init();
