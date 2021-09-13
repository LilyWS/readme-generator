// TODO: Include packages needed for this application
const inq = require('inquirer');

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
        message: ' ',
        type: 'input'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, md, err =>{
        if (err) return console.log(err);
        console.log('success')
    })
}

var template = (data) => { 
    return `# ${data.title}
## Description
## Installation
## Usage
## Contribution 
## Testing`
}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions)
        .then(data => writeToFile('readme.md', template.data));
}

// Function call to initialize app
init();
