// Required libraries

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require ('./assets/generateMarkDown')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your app',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description about your app'
        },
    
        {
            type: 'input',
            name: 'installation',
            message: 'Please write a short installation guide'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please explain how to use this app'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['Apache license 2.0', 'GNU', 'MIT', 'None']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Write an explanation on how to contribute to your open source project',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please explain how to test your app'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please provide your github username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address'
        }
    ])

// Writing a new markdown file from the user's input
    .then((data) => {
        fs.writeFile(`README.md`, generateMarkDown(data), (err) =>
            err ? console.error(err) : console.log("Thank you! Your Readme is generated"))
    })

