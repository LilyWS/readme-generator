// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        message: 'What\'s the title of your project?',
        type: 'input'
    },
    {
        name: 'desc',
        message: 'Describe your project',
        type: 'input'
    },
    {
        name: 'install',
        message: 'Describe how to install it ',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Describe how to use your application ',
        type: 'input'
    },
    {
        name: 'contribution',
        message: 'Describe how users could contribute to your application',
        type: 'input'
    },
    {
        name: 'test',
        message: 'Describe how to test your application',
        type: 'input'
    },
    {
        name: 'license',
        message: 'pick which licensing type you would like',
        type: 'list',
        choices: ['MIT', 'Creative Commons', 'Mozilla', 'Apache']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err) return console.log(err);
        console.log('success')
    })
}

var template = (data) => { 
    return `# ${data.title} 
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Testing](#testing)
6. [License](#license)
## Description
${data.desc}
## Installation
${data.install}
## Usage
${data.usage}
## Contribution
${data.contribution} 
## Testing <a name="Testing"></a>
${data.test}
## License
`
}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions)
        .then(data => writeToFile('generatedReadme.md', template(data)));
}

// Function call to initialize app
init();
