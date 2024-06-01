const inquirer = require('inquirer');
const { createSVGLogo } = require('./svg.js');

// Global Strings for 3 options (circle, square or triangle)
global.circleOption = 'Option 1: Circle';
global.squareOption = 'Option 2: Square';
global.triangleOption = 'Option 3: Triangle';

// Command Line Interface Class
class CLI {
  constructor() {
    this.shape = '';
    this.text = '';
    this.colorShape = '';
    this.colorText = '';
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Please enter up to 3 characters for your SVG Logo:',
          validate: function(input) {
            if (input.length > 3) {
              return 'Input should be 3 characters or less.';
            }
            return true;
          }
        },
        {
          type: 'rawlist',
          name: 'choice',
          message: 'What shape do you want to use for your SVG Logo?',
            choices: [
              global.circleOption,
              global.squareOption,
              global.triangleOption]
        },
        {
          type: 'input',
          name: 'colorText',
          message: 'Please enter a color name (or a hexadecimal color code) for the Logo TEXT:',
          validate: validateColor
        },
        {
          type: 'input',
          name: 'colorShape',
          message: 'Please enter a color name (or a hexadecimal color code) for the Logo SHAPE:',
          validate: validateColor
        }
      ])
      .then(({ text, choice }) => {
        //createSVGLogo(text, choice, colorText, colorShape);
      });
  }
}

// A list of valid color names
const validColorNames = ['aliceblue','antiquewhite','aqua','aquamarine','azure','beige','bisque','black','blanchedalmond','blue','blueviolet','brown','burlywood','cadetblue',+
    'chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkgrey','darkkhaki','darkmagenta',+
    'darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkslategrey','darkturquoise','darkviolet','deeppink',+
    'deepskyblue','dimgray','dimgrey','dodgerblue','firebrick','floralwhite','forestgreen','fuchsia','gainsboro','ghostwhite','gold','goldenrod','gray','green','greenyellow',+
    'grey','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow',+
    'lightgray','lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightslategrey','lightsteelblue','lightyellow','lime','limegreen',+
    'linen','magenta','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred',+
    'midnightblue','mintcream','mistyrose','moccasin','navajowhite','navy','oldlace','olive','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen','paleturquoise',+
    'palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple','red','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell',+
    'sienna','silver','skyblue','slateblue','slategray','slategrey','snow','springgreen','steelblue','tan','teal','thistle','tomato','turquoise','violet','wheat','white','whitesmoke',+
    'yellow','yellowgreen'];

// Function to validate color input
function validateColor(input) {
  // Check if the input is a valid hexadecimal color code
  const hexColorPattern = /^#([0-9A-F]{3}){1,2}$/i;
  if (hexColorPattern.test(input)) {
    return true;
  }

  // Check if the input is a valid color name
  if (validColorNames.includes(input.toLowerCase())) {
    return true;
  }
  return 'Please enter a valid color name or hexadecimal color code.';
}


module.exports = CLI;
