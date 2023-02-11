const inquirer = require('inquirer');
const ntc = require('ntc');

inquirer
    .prompt([
        {
// limit this to three characters
        type: "input",
        message: "Enter three initials",
        name: "initials",
    },
    {
        type: "input",
        message: "Pick a colour, any colour!",
        name: "colour",
    },
    {
        type: "list",
        message: "Shape your sigil",
        name: "shape",
        choices: [
            "triangle",
            "circle",
            "square",
            "hexagon",
        ]
    }
])