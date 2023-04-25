const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
  {
    type: 'input',
    message: 'What it the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Describe your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Describe any necessary installation steps.',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Describe the usage of your project.',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'List any contributing sources.',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'List any test protocols you have in place.',
    name: 'test',
  },
  {
    // license
    type: 'list',
    message: 'What type of license does your project have?',
    name: 'license',
    choices: ['MIT', 'ISC', 'none'],
    filter(value) {
      return value;
    }
  },
  {
    // questions
    type: 'input',
    message: 'What is your github user name?',
    name: 'github',
    // `github.com/${github}`
  },
  {
    // questions
    type: 'input',
    message: 'What is your email?',
    name: 'email',
    // instructions how to reach me with more questions, make it an auto email generator
  },
])
  .then((answers) => {
    console.log(answers);
    
    
    
    
    
    
    
    // fs.writeFile('README.md', JSON.stringify(answers, null), '\t', (err) =>
    //   err ? console.error(err) : console.log('generated README.')
    // );
  });