const CLI = require("../scripts/cli");
const inquirer = require('inquirer');

jest.mock('inquirer');

describe('Module test', () => {
  test('user input', async () => {
    expect.assertions(1);
    inquirer.prompt = jest.fn().mockResolvedValue({ colour: "blue" });

    await expect(inquirer.prompt()).resolves.toEqual({ colour: "blue" });
  });
});