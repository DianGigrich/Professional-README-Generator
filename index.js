// Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')




// Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "Title"
        },
        {
            type: "input",
            message: "Describe it. Motivation, Why, What'd it solve, What did you learn?",
            name: "Description"
        },
        {
            type: "input",
            message: "Provide a step-by-step description to get your project running.",
            name: "Installation"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "Usage"
        },
        {
            type: "input",
            message: "Include a screenshot:",
            name: "Screenshot"
        },
        {
            type: "input",
            message: "List collaborators with links to their Github profiles, third-party assets, and tutorials",
            name: "Credits"
        },
        {
            type: "list",
            message: "Which license would you like?",
            name: "License",
            choices: ["Apache License 2.0", "GNU LGPL v3", "MIT License", "Mozilla Public license 2.0", "GNU GPL v2", "Eclipse Public License", "BSD-2-Clause", "BSD 3-Clause"]
        },
        {
            type: "input",
            message: "Want to be a contributor?",
            name: "Contributing"
        },
        {
            type: "input",
            message: "Tests?",
            name: "Tests"
        },
        {
            type: "input",
            message: "Please enter your GitHub username:",
            name: "GitHub"
        },
        {
            type: "intput",
            message: "Please enter your email address:",
            name: "Email"
        }
    ]).then((response) =>
        fs.writeFile("README.md",
`${renderLicenseBadge(response.License)}
#${response.Title}

##Description:
${response.Description}
      
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Screenshot](#Screenshot)
* [Credits](#Credits)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
      
##Installation:
${response.Installation}
      
##Usage:
${response.Usage}
      
##Screenshot:
[Screenshot of project](${response.Screenshot})
      
##Credits
${response.Credits}

##License
This application is covered under the ${response.License} license.
      
##Contributing
${response.Contributing}
      
##Tests
${response.Tests}
      
##Questions
[Link to ${response.GitHub}'s GitHub](https://github.com/${response.GitHub})

[Contact Us](mailto:${response.Email})`,
            function (err) {
                if (err) {
                    console.error(err)
                } else {
                    console.log('Answers logged!')
                }
            }
        )
    )

function renderLicenseBadge(license) {
    if (license === "") {
        return ""
    } else if (license === "Apache License 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === "BSD 3-Clause") {
        return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }else if (license === "BSD 2-Clause") {
        return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
    }else if (license === "Eclipse Public License") {
        return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    }else if (license === "GNU LGPL v3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
    }else if (license === "GNU GPL v2") {
        return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    }else if (license === "MIT License") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }else if (license === "Mozilla Public license 2.0") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
}