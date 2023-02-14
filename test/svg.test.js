

// checks parent class render () to get the error

const { SoVeryGlam, Triangle, Circle, Square, Hexagon } = require('../assets/scripts/svg.js');

describe('SoVeryGlam', () => {
    describe('render should throw an error', () => {
        it('Should throw an error, man, c\'mon', () => {
        const SoGlam = new SoVeryGlam("SGC","#0000FF","#0000FF");
        const err = new Error ('Child shapes must implement a render() method');

        expect(() => SoGlam.render()).toThrow(err);
        })
    })
})

describe('Shapes', () => {
    describe('determining the validity of the shape checks', () => {
        it('Triangle: Should result in SVG data for a Triangle', () => {
            const TriTest = new Triangle("SGC","#0000FF","#0000FF");

            expect(TriTest.render()).toBe(
`<svg height="200" width="300">
        <polygon points="150, 18 244, 182 56, 182" fill="#0000FF"/> 
        <text x="150" y="160" font-size="60" text-anchor="middle" fill="#0000FF">SGC</text>
        </svg>
        `);
        })
        it('Circle: Should result in SVG data for a circle', () => {
            const CirTest = new Circle("SGC","#0000FF","#0000FF");

            expect(CirTest.render()).toBe(
`<svg height="200" width="300">
    <circle cx="150" cy="100" r="80" fill="#0000FF"/> 
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="#0000FF">SGC</text>
    </svg>
    `);
        })
        it('Square: Should result in SVG data for a Square', () => {
            const SquTest = new Square("SGC","#0000FF","#0000FF");

            expect(SquTest.render()).toBe(
`<svg height="200" width="300">
    <rect x="50" y="20" width="150" height="150" fill="#0000FF"/> 
    <text x="125" y="115" font-size="60" text-anchor="middle" fill="#0000FF">SGC</text>
    </svg>
    `);
        })
        it('Hexagon: Should result in SVG data for a hexagon', () => {
            const HexTest = new Hexagon("SGC","#0000FF","#0000FF");

            expect(HexTest.render()).toBe(
`<svg height="200" width="300">
      <polygon fill="#0000FF" points="178,183.138438763306 82,183.138438763306 34,100 82,16.8615612366939 178,16.8615612366939 226,100"/>
      <text x="125" y="115" font-size="60" text-anchor="middle" fill="#0000FF">SGC</text>
      </svg>
      `);
        })
    })
})