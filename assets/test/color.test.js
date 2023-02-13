const Colour = require('../scripts/color.js');

describe('HexConfirm', () => {
  describe('Validate Hex', () => {
    it('Should confirm the string is a hex code', () => {
      const colourInput = "#4433ff";
      const validateHex = new Colour(colourInput);
      expect(validateHex.validateHex()).toEqual([ true, 'royalblue', '#4433ff' ]);
    })
  })
});