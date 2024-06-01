const Shape = require('./shapes.js');
const Circle = require('./shapes.js');
const Square = require('./shapes.js');
const Triangle = require('./shapes.js');
const { join } = require('path');
const { writeFile } = require('fs/promises');

function createSVGLogo(text,shape,colorText,colorShape) {
    let svgLogo;
    console.log(`${text},${shape},${colorText},${colorShape}`);
    svgLogo = new Circle(text,colorText,colorShape);
    // if(shape === 'circle') {
    //     svgLogo = new Circle(text,colorText,colorShape);
    // } else if(shape === 'square') {
    //     svgLogo = new Square(text,colorText,colorShape);
    // } else {
    //     svgLogo = new Triangle(text,colorText,colorShape);
    // }  
    // const svgFile = svgLogo.render();
    // console.log(svgFile);
}

module.exports = { createSVGLogo };