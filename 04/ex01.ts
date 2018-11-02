interface Drawable{
    draw():void
}

class Line implements Drawable{
    draw():void{
        console.log('draw line');
    }
}

class Rectangle implements Drawable{
    draw():void{
        console.log('draw rectangle');
    }
}

class Circle implements Drawable{
    draw():void{
        console.log('draw circle');
    }
}

const shapes:Drawable[] = [new Line(), 
                           new Rectangle(), 
                           new Circle(), 
                           new Line()]; 

function shapeFactory(type:string):Drawable{
    if( type === 'rectangle'){
        return new Rectangle();
    }
    else if(type === 'circle'){
        return new Circle();
    }
    return new Line();
}

shapes.forEach( (shape)=>shape.draw());

shapeFactory('circle').draw();