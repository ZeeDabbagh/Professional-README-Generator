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
            choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Boost Software License 1.0', 'Educational Community License v2.0', 'MIT', 'Mozilla Public License 2.0', 'The Unlicense', 'zLib License', 'None']
        },
        {
            type: 'input',
            name: 'contributions',
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
            name: 'link',
            message: 'Please provide a link to your Github'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address'
        }
    ])

    .then((data) => {
        fs.writeFile(`README.md`, generateMarkDown(data), (err) =>
            err ? console.error(err) : console.log("Thank you! Your Professional Readme is generated"))
    })