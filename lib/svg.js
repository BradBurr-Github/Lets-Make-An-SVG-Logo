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
    // Get the first content line of the SVG Logo
    const svgSVGSizeContent_Line1 = svgLogo.getSVGSizeContent_Line1();
    // Call the Object's render function
    const svgShapeContent_Line2 = svgLogo.render();
    // Set the third content line of the SVG Logo
    const textXCoord = svgLogo.getTextXCoord();
    const textYCoord = svgLogo.getTextYCoord();
    svgLogo.setSVGTextContent_Line3(`<text x="${textXCoord}" y="${textYCoord}" font-size="54" text-anchor="middle" fill="${colorText}">${text}</text></svg>`);
    // Get the third content line of the SVG Logo
    const svgSVGTextContent_Line3 = svgLogo.getSVGTextContent_Line3();
    // Create FINAL string for the SVG Logo
    const svgFileContents = svgSVGSizeContent_Line1 + svgShapeContent_Line2 + svgSVGTextContent_Line3;
    // Save the filename
    const fileName = join(__dirname, '..', 'examples', 'logo.svg');
    // Write the file out to the examples folder    
    writeFile(fileName, svgFileContents)
    .then(() => console.log(`Generated logo.svg successfully: (${fileName})`))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
}

module.exports = { createSVGLogo };