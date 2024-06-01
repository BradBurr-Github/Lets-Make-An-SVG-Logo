const circle = require('./shapes.js');
const square = require('./shapes.js');
const triangle = require('./shapes.js');
const { join } = require('path');
const { writeFile } = require('fs/promises');

function createSVGLogo(text,shape,colorText,colorShape) {
    let svgLogo;
    console.log(`${shape}`);
    // if(shape === global.circleOption) {
    //     svgLogo = new circle.Circle(text,colorText,colorShape);
    // } else if(shape === global.squareOption) {
    //     svgLogo = new square.Square(text,colorText,colorShape);
    // } else {
    //     svgLogo = new triangle.Triangle(text,colorText,colorShape);
    // }  
    // const svgFile = svgLogo.render();
    // console.log(svgFile);
}

module.exports = { createSVGLogo };