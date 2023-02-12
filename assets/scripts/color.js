const colour = require('color-convert');
const regex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

class HexConfirm {
    validateHex (colourIn) {
        "use strict";
        var colourType = colourIn;
        var colourName = "";
        var colourHex = "";
        var colourOut = "";
        if (regex.test(colourType)) {
            console.log("Hex");
            colourName = colour.hex.keyword(colourType);
            colourHex = colourType;
            colourOut = true;
            return [colourOut, colourName, colourHex];
        } else {
            colourType = colourIn.toLowerCase();
            let colourMan = colour.keyword.hex(colourType);
            console.log(colourMan);
            if (colourMan) {
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
};

module.exports = HexConfirm;