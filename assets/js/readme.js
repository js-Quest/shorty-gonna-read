function generateReadme(answers) {
  return `
  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [installation](#Installation)
  - [usage](#Usage)
  - [contributing](#Contributing)
  - [tests](#Tests)
  - [license](#License)
  - [questions](#Questions)

  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.test}

  ## License
  ${answers.license}

  ## Questions
  For additional information, please check out my github profile:  github.com/${answers.github}
  Or feel free to email me at ${answers.email}
  `
}