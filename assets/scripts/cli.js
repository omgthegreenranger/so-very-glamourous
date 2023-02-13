const inquirer = require('inquirer');
const Colour = require('./color.js');
const svg = require('./svg');

class CLI { 
    prompts() {
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
                validate: function(input) {
                    var colourInput = input;
                    const colourVal = new Colour(colourInput);
                    var colourIndex = colourVal.validateHex();
                    console.log(colourIndex);
                    return colourIndex[0];
                // transform:
                }    
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

                ## Acceptance Criteria
                }
            ])
            .then((data) => {
                const svgDeets = data;
                console.log(svgDeets);
            })
    }
    
}


module.exports = CLI;