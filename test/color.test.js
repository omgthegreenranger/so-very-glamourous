const Colour = require('../assets/scripts/color.js');

describe('HexConfirm', () => {
  describe('Validate Hex', () => {
    it('Should confirm the string is a hex code', () => {
      const colourInput = "#4433ff";
      const validateHex = new Colour(colourInput);
      expect(validateHex.validateHex()).toEqual([ true, 'royalblue', '#4433ff' ]);
    });
    it('Should confirm the string is a legitimate colour in lower case', () => {
      const colourInput = "blue";
      const validateHex = new Colour(colourInput);
      expect(validateHex.validateHex()).toEqual([ true, 'blue', '#0000FF' ]);
    }
  );
  it('Should result in FALSE if the string is neither a colour nor a hex', () => {
    const colourInput = "blarf";
    const validateHex = new Colour(colourInput);
    expect(validateHex.validateHex()).toEqual([ false, '', '' ]);
  }
  );
  })
});