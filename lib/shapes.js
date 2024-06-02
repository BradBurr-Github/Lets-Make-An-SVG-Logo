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
        const svgContent = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.colorShape}"/>
        <text x="150" y="117" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
        </svg>`;
        return svgContent;
    }
}

// Square Class (child)
class Square extends Shape {
    constructor(text,colorText,colorShape) {
      super(text,colorText,colorShape);
    }
    render() {
        const svgContent = `
        <svg version="1.1" width="300" height="225" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="400" fill="${this.colorShape}"/>
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
        </svg>`;
        return svgContent;
    }
}

// Triangle Class (child)
class Triangle extends Shape {
    constructor(text,colorText,colorShape) {
      super(text,colorText,colorShape);
    }
    render() {
        const svgContent = `
        <svg width="220" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="120,40 20,220 220,220" fill="${this.colorShape}"/>
            <text x="123" y="180" font-size="54" fill="${this.colorText}" text-anchor="middle">${this.text}</text>
        </svg>`;
        return svgContent;
    }
}

module.exports = { Shape, Circle, Square, Triangle };