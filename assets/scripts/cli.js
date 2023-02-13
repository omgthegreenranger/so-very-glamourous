const inquirer = require('inquirer');
const Colour = require('./color.js');
const svg = require('./svg');
var colourIndex = [];

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
                    colourIndex = colourVal.validateHex();
                    if(colourIndex[0] == false) {
                        input = "You must give us a proper colour please.";
                        return false;
                    } else {
                    return input = true;
                    }          
                },
                
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
            .then((data) => {
                const responses = data;
                const svgDeets = {"initials": responses["initials"], "colour": colourIndex[2], "shape": responses["shape"] }
                console.log(svgDeets);
            })
    }
    
}


module.exports = CLI;