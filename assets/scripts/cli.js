const inquirer = require('inquirer');
const Colour = require('./color.js');
const SVG = require('./svg.js');
const fs = require('fs');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
var colourIndex = [];
var textIndex = [];
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);


class CLI { 
    prompts() {
        inquirer
            .prompt([
                {
        // limit this to three characters
                type: "maxlength-input",
                message: "Enter three initials",
                name: "initials",
                maxLength: 3,
                },
                {
                    type: "input",
                    message: "Pick a shape colour, any colour (hex or name)!",
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
                    type: "input",
                    message: "Pick a text colour, any colour (hex or name)!",
                    name: "text-colour",
                    validate: function(input) {
                        var textInput = input;
                        const textVal = new Colour(textInput);
                        textIndex = textVal.validateHex();
                        if(textIndex[0] == false) {
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
                // const svgDeets = [responses["initials"], colourIndex[2], responses["shape"]]
                // console.log(svgDeets);
                const svg = new SVG(responses["initials"], textIndex[2], colourIndex[2], responses["shape"]);
                fs.writeFile('./assets/images/results.svg', svg.render(),(err) => err && console.error(err));
            })
    }
    
}


module.exports = CLI;