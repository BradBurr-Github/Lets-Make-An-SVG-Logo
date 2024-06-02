const Shape = require('../lib/shapes.js');

describe('Shape', () => {
  // Test to throw an Error if render() is called from the Shape class
  test('should throw error if render() is called from Parent class.', () => {
    const shape = new Shape.Shape();
    const err = new Error('Child class must implement a render() method.')
    expect(shape.render).toThrow(err);
  });
  // Test to make sure render() function works for the CIRCLE class
  test('should set the CIRCLE colorText variable and return it in render string.', () => {
    const expectedSVGShapeContent = '<circle cx="150" cy="100" r="80" fill="blue"/>';
    const circle = new Shape.Circle('TST','red','green');
    circle.setShapeColor('blue');
    expect(circle.render()).toEqual(expectedSVGShapeContent);
  });
  // Test to make sure render() function works for the SQUARE class
  test('should set the SQUARE colorText variable and return it in render string.', () => {
    const expectedSVGShapeContent = '<rect x="50" y="50" width="200" height="400" fill="blue"/>';
    const square = new Shape.Square('TST','red','green');
    square.setShapeColor('blue');
    expect(square.render()).toEqual(expectedSVGShapeContent);
  });
  // Test to make sure render() function works for the TRIANGLE class
  test('should set the TRIANGLE colorText variable and return it in render string.', () => {
    const expectedSVGShapeContent = '<polygon points="120,40 20,220 220,220" fill="blue"/>';
    const triangle = new Shape.Triangle('TST','red','green');
    triangle.setShapeColor('blue');
    expect(triangle.render()).toEqual(expectedSVGShapeContent);
  });
  // Test to make sure render() function works for the CIRCLE class
  test('should set the CIRCLE colorText variable and return it in render string.', () => {
    const expectedSVGShapeContent = '<circle cx="150" cy="100" r="80" fill="blue"/>';
    const circle = new Shape.Circle('TST','red','green');
    circle.setShapeColor('blue');
    expect(circle.render()).toEqual(expectedSVGShapeContent);
  });
});

