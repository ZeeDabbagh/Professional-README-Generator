const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require ('./assets/generateMarkDown')

inquirer
    .createPromptModule([
        {
            type: 'input',
            name: 'Title',
            message: 'Enter the title of your app',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please write a short description about your app'
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: 'Please write your table of contents'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Please write a short installation guide'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Please explain how to use this app'
        },
        {

        }
    ])