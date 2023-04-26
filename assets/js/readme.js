const getBadges = require('./badges');


function generateReadme(answers) {
  return `
  # ${answers.title}
  ${getBadges(answers.license)}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.test}

  ## License
  This project retains the ${answers.license} license.

  ## Questions
  For additional information, please check out my github profile:  github.com/${answers.github}  
  
  Or feel free to email me at ${answers.email}
  `
}

module.exports = generateReadme