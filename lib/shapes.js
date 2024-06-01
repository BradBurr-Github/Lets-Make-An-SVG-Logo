// Shape Class (parent)
class Shape {
    constructor(text,colorText,colorShape) {
        this.text = text;
        this.colorText = colorText;
        this.colorShape = colorShape;
    }
    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

// Circle Class (child)
class Circle extends Shape {
    constructor(text,colorText,colorShape) {
      super(text,colorText,colorShape);
    }
    render() {
        let result = `RESULT: ${text} in SHAPE of CIRCLE!`;
        return result;
    }
}

// Square Class (child)
class Square extends Shape {
    constructor(text,colorText,colorShape) {
      super(text,colorText,colorShape);
    }
    render() {
        let result = `RESULT: ${text} in SHAPE of SQUARE!`;
        return result;
    }
}

// Triangle Class (child)
class Triangle extends Shape {
    constructor(text,colorText,colorShape) {
      super(text,colorText,colorShape);
    }
    render() {
        let result = `RESULT: ${text} in SHAPE of TRIANGLE!`;
        return result;
    }
}

module.exports = { Shape, Circle, Square, Triangle };