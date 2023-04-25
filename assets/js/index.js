const inquirer = require('inquirer');

inquirer.prompt ([
  {
    type: 'input',
    message: 'What it the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: '',
    name: 'description',
  },
  {
    type: 'input',
    message: '',
    name: 'installation',
  },
  {
    type: 'input',
    message: '',
    name: 'usage',
  },
  {
    type: 'input',
    message: '',
    name: 'contributing',
  },
  {
    type: 'input',
    message: '',
    name: 'test',
  },
  {
    type: 'input',
    message: '',
    name: 'license',
  },
  {
    // questions
    type: 'input',
    message: '',
    name: 'github',
    // `github.com/${github}`
  },
  {
    // questions
    type: 'input',
    message: '',
    name: 'email',
    // instructions how to reach me with more questions, make it an auto email generator
  },


])
.then((response) => {
  console.log(response);
});