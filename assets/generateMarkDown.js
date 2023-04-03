// Generate badges
function badge(license) {

  switch (license) {
    case "Apache license 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    default:
      return 'NA';
  }
}

// Generate descriptions for licenses with links to learn more
function licenseDescription(license) {
  switch (license) {
    case "Apache license 2.0":
      return `The Apache License is a permissive open-source license that allows users to use, modify, and distribute software under certain conditions.
      [Read more...](https://opensource.org/licenses/Apache-2.0)`;
    case "GNU":
      return `The GNU General Public License (GNU GPL) is a copyleft license that provides users with the freedom to use, modify, and distribute software.
      [Read more...](https://www.gnu.org/licenses/gpl-3.0)`;
    case "MIT":
      return `The MIT License is a permissive open-source license that allows users to use, modify, and distribute software under certain conditions.
      [Read more...](https://opensource.org/licenses/MIT)`;
    default:
      return "";
  }
}

// Generate the README.md file
function generateMarkDown(data) {
  return `
# ${data.title}

${badge(data.license)}

## Description

${data.description}

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contributing)
- [Test](#test)
- [Questions](questions)
- [Linke to Deployed App](#deployed-application)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

${licenseDescription(data.license)}


## Contributing

${data.contributing}

## Test

${data.test}

## Questions

Hi! I'm ${data.username}

If you have any questions please email me at ${data.email}

And make sure to follow me on Github at https://github.com/${data.username}!

## Deployed Application 

This application is deployed at https://github.com/${data.username}
`;
}

module.exports = generateMarkDown;
