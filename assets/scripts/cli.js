const inquirer = require('inquirer');
const Colour = require('./color');
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
                    const colorVal = new Colour();
                    colorVal.validateHex(input);
                    colorOut;
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