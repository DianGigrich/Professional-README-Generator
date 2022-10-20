// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
inquirer.
    prompt([
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
            name: "Instructions"
        },
        {
            type: "input",
            message: "Include a screenshot with alt text in this format ![alttext](photolink)",
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
            choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "The Unlicense", "Mozilla Public license 2.0", "GNU Lesser General Public License v2.1", "Eclipse Public License", "Creative Commons Zero v1.0 Universal", "Boost Software License 1.0", "BSD-2-Clause", "BSD 3-Clause"]
        },
        // {
        //     type: "input",
        //     message: "List features here",
        //     name: "Features"
        // },
        // {
        //     type: "input",
        //     message: "Would you like to help?",
        //     name: "Contributors"
        // },
        // {
        //     type: "input",
        //     message: "tests",
        //     name: "Tests"
        // }
    ]).then((response) =>
        response
        ? console.log('success')
        : console.log('you missed something')
    )

// const LicenseChoice = JSON.stringify(response.License.value)
// module.exports = LicenseChoice

// TODO: Create a function to write README file
function writeToFile(response) {
    fs.writeFile("README.md", writeToFile(response), function (err) {
        if (err) {
            console.error(err)
        } else {
            console.log('Answers logged!')
        }
    })
}

// TODO: Create a function to initialize app
function init(response) {

}

// Function call to initialize app
init();
