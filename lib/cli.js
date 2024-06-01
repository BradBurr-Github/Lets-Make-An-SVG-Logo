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
          message: 'Please enter a color name or hexadecimal color code for the Logo TEXT:',
          validate: validateColor
        },
        {
          type: 'input',
          name: 'colorShape',
          message: 'Please enter a color name or hexadecimal color code for the Logo SHAPE:',
          validate: validateColor
        }
      ])
      .then(({ text, choice }) => {
        createSVGLogo(text, choice, 'red', 'green');
      });
  }
}

// A list of valid color names
const validColorNames = ['red', 'green', 'blue', 'yellow', 'black', 'white'];

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
