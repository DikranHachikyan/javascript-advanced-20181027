"use strict";
class Line {
    draw() {
        console.log('draw line');
    }
}
class Rectangle {
    draw() {
        console.log('draw rectangle');
    }
}
class Circle {
    draw() {
        console.log('draw circle');
    }
}
const shapes = [new Line(),
    new Rectangle(),
    new Circle(),
    new Line()];
function shapeFactory(type) {
    if (type === 'rectangle') {
        return new Rectangle();
    }
    else if (type === 'circle') {
        return new Circle();
    }
    return new Line();
}
shapes.forEach((shape) => shape.draw());
shapeFactory('circle').draw();
