function badge(license) {
    if (license !== 'None') {
        return `![Badge](https://img.shields.io/badge/License-${license}-lightblue.svg)`
    } else {
        return ``;
    }
}

// function hyperLink (license) {
//     if (license !== 'None') {
//         return
//     }
// }

function generateMarkDown(data) {
return    `
# ${data.title}

${badge(data.license)}

## Description

${data.description}

## Table of contents

-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contribution](#contributions)
-[Test](#test)
-[Questions](questions)
-[Linke to Deployed App](#deployed-app)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributions

${data.contributions}

## Test

${data.test}

## Questions

Hi! I'm ${data.username}
If you have any questions please email me at ${data.email}
And make sure to follow me on Github at ${data.link}

## Deployed Application 
This application is deployed at https://github.com/${data.username}
`
}

module.exports = generateMarkDown