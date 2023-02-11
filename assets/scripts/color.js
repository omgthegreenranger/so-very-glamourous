const color = require('color-convert');
const regex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
const options = ["#4433FF","blue"];

class HexConfirm {
    validateHex (colorIn) {    
        var colorName = '';
        var colorHex = '';
        var colorOut = '';
        if (regex.test(colorIn)) {
            colorName = color.hex.keyword(colorIn);
            colorHex = colorIn
            colorOut = true;
            return colorName, colorHex, colorOut;
        } else if (color.keyword.hex(colorIn)) {
            colorName = colorIn;
            colorHex = color.keyword.hex(colorIn);
            colorOut = true;
            return colorName, colorHex, colorOut;
        } else {
            colorOut = false;
            return colorOut
        }
    };

};

module.exports = HexConfirm;