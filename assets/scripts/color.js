const colour = require('color-convert');
const regex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

class HexConfirm {
    constructor( colourInput ) {
        this.colourIn = colourInput;
    }
    validateHex() {
        var colourType = this.colourIn;
        var colourName = "";
        var colourHex = "";
        var colourOut = "";
        if (regex.test(colourType)) {
            colourName = colour.hex.keyword(colourType);
            colourHex = colourType;
            colourOut = true;
            return [colourOut, colourName, colourHex];
        } else {
            colourType = colourType.toLowerCase();
            if (colour.keyword.hex(colourType) !== 'undefined') {
                console.log("name");
                colourName = colourType;
                colourHex = colour.keyword.hex(colourType);
                colourOut = true;
                return [colourOut, colourName, "#" + colourHex];
            } else {
                console.log("Other");
                colourOut = false;
                return [colourOut, colourName, colourHex];
            };
    };
};
}

module.exports = HexConfirm;