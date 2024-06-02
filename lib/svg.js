const circle = require('./shapes.js');
const square = require('./shapes.js');
const triangle = require('./shapes.js');
const { join } = require('path');
const { writeFile } = require('fs/promises');

function createSVGLogo(text,colorText,shape,colorShape) {
    let svgLogo;
    // Create an Object from the Shape child class that the user selected
    if(shape === global.circleOption) {
        svgLogo = new circle.Circle(text,colorText,colorShape);
    } else if(shape === global.squareOption) {
        svgLogo = new square.Square(text,colorText,colorShape);
    } else {
        svgLogo = new triangle.Triangle(text,colorText,colorShape);
    }
    // Call the Object's render function
    const svgFile = svgLogo.render();
    // Save the filename
    const fileName = join(__dirname, '..', 'examples', 'logo.svg');
    // Write the file out to the examples folder    
    writeFile(fileName, svgFile)
    .then(() => console.log(`Generated logo.svg successfully: (${fileName})`))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
}

module.exports = { createSVGLogo };