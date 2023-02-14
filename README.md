# so-very-glamourous

## Task

As per the challenge README, build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.

In this challenge, I made use of a library called [color-convert](https://www.npmjs.com/package/color-convert), as it is able to take any kind of colour input (CSS name, hex, RGB, CMYK, etc) and convert to any other type of colour definition. I did this with the intent to eventually expand the prompt to allow for maximum flexibility. At the moment, however, it only accepts CSS names and hex codes, and will fail "undefined" if it is neither (which I cannot catch in an Else condition, for some reason)

Please see the video [here](https://watch.screencastify.com/v/WFRoaoV77l04mOUo6Rb2) or to access it on [Google Drive](https://drive.google.com/file/d/1HSmISfFlA3Jv1LH9KmvxETadxcw_R2Zr/view?usp=share_link)

## Installation

- Clone the [repository](https://github.com/omgthegreenranger/so-very-glamourous) to your machine.
- `npm install`, as you normally would, to include all relevant node packages.

## Usage

from inside the root folder, run `npm index.js`.

## Further details

There are also a series of Jest tests available in the `test` folder to verify the SVG generation classes, along with a test for the colour converter script. On the latter, you'll notice a failure for the third test, as it appears that there is an undefined TypeError when you input a string that is neither a CSS colour nor a proper HEX code (which compares against a regex). I have had a number of other eyes on this, including AskBCS, and we have not been able to solve it.

I include it here partially because it is a challenge to sort, but also because rewriting the code would take more time than I had.