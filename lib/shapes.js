// Shape Class (parent)
class Shape {
    constructor(text,colorText,colorShape) {
        this.setText(text);
        this.setTextColor(colorText);
        this.setShapeColor(colorShape);
        this.setSVGSizeContent_Line1('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">');
        this.setSVGTextContent_Line3('');
    };
    // Function to render SVG shape content (only in Child classes)
    render() {
        throw new Error('Child class must implement a render() method.');
    };
    // Function to get the text of the SVG logo
    getText( text ) {
        return this.text;
    };
    // Function to set the text of the SVG logo
    setText( text ) {
        this.text = text;
    };
    // Function to get the text color of the SVG logo
    getTextColor() {
        return this.colorText;
    };
    // Function to set the text color of the SVG logo
    setTextColor( colorText ) {
        this.colorText = colorText;
    };
    // Function to get the text X-Coordinate of the SVG logo
    getTextXCoord() {
        return this.textXCoord;
    };
    // Function to set the text X-Coordinate of the SVG logo
    setTextXCoord( textXCoord ) {
        this.textXCoord = textXCoord;
    };
    // Function to get the text Y-Coordinate of the SVG logo
    getTextYCoord() {
        return this.textYCoord;
    };
    // Function to set the text Y-Coordinate of the SVG logo
    setTextYCoord( textYCoord ) {
        this.textYCoord = textYCoord;
    };
    // Function to get the shape color of the SVG logo
    getShapeColor() {
        return this.colorShape;
    };
    // Function to set the shape color of the SVG logo
    setShapeColor( colorShape ) {
        this.colorShape = colorShape;
    };
    // Function to get the SVG Shape Content of the SVG logo
    getSVGShapeContent() {
        return this.svgContentShape;
    };
    // Function to set the SVG Shape Content of the SVG logo
    setSVGShapeContent( svgContentShape ) {
        this.svgContentShape = svgContentShape;
    };
    // Function to get the SVG Size Content (first line) of the SVG logo
    getSVGSizeContent_Line1() {
        return this.svgContentSize_Line1;
    };
    // Function to set the SVG Size Content (first line) of the SVG logo
    setSVGSizeContent_Line1( svgContentSize_Line1 ) {
        this.svgContentSize_Line1 = svgContentSize_Line1;
    };
    // Function to get the SVG Text Content (third line) of the SVG logo
    getSVGTextContent_Line3() {
        return this.svgContentText_Line3;
    };
    // Function to set the SVG Text Content (third line) of the SVG logo
    setSVGTextContent_Line3( svgContentText_Line3 ) {
        this.svgContentText_Line3 = svgContentText_Line3;
    };
}

// Circle Class (child)
class Circle extends Shape {
    constructor(text,colorText,colorShape) {
      super(text,colorText,colorShape);
      this.setTextXCoord('150');
      this.setTextYCoord('120');
    }
    render() {
        const svgColorShape = this.getShapeColor();
        return `<circle cx="150" cy="100" r="80" fill="${svgColorShape}"/>`;
    }
}

// Square Class (child)
class Square extends Shape {
    constructor(text,colorText,colorShape) {
      super(text,colorText,colorShape);
      this.setTextXCoord('150');
      this.setTextYCoord('150');
    }
    render() {
        const svgColorShape = this.getShapeColor();
        return `<rect x="50" y="50" width="200" height="400" fill="${svgColorShape}"/>`;
    }
}

// Triangle Class (child)
class Triangle extends Shape {
    constructor(text,colorText,colorShape) {
      super(text,colorText,colorShape);
      this.setTextXCoord('123');
      this.setTextYCoord('180');
    }
    render() {
        const svgColorShape = this.getShapeColor();
        return `<polygon points="120,40 20,220 220,220" fill="${svgColorShape}"/>`;
    }
}

module.exports = { Shape, Circle, Square, Triangle };