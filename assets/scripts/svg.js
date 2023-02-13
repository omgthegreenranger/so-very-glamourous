const SVG = require('svg.js');
const fs = require('fs');

class SoVeryGlam {
  constructor(initials, textColour, colour, shape) {
    this.initials = initials;
    this.textColour = textColour;
    this.colour = colour;
    this.shape = shape;
  }
  render() {

    switch(this.shape) {
      case "triangle":
        return `<svg height="200" width="300">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.colour}"/> 
        <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.initials}</text>
        </svg>
        `;
      case "circle":
        return `<svg height="200" width="300">
        <circle cx="150" cy="100" r="80" fill="${this.colour}"/> 
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.initials}</text>
        </svg>
        `;
      case "square":
        return `<svg height="200" width="300">
        <rect x="50" y="20" width="150" height="150" fill="${this.colour}"/> 
        <text x="125" y="115" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.initials}</text>
        </svg>
        `;
      case "hexagon":
        return `<svg height="200" width="300">
        <polygon fill="${this.colour}" points="178,183.138438763306 82,183.138438763306 34,100 82,16.8615612366939 178,16.8615612366939 226,100"/>
        <text x="125" y="115" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.initials}</text>
        </svg>
        `;
    }
  }
}

module.exports = SoVeryGlam;