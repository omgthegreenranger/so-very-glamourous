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
                    const colourVal = new Colour();
                    var colourIndex = colourVal.validateHex(colourInput);
                    console.log(colourIndex);
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
                }
            ])
            .then((data) => console.log(data))
    }
    
}


module.exports = CLI;