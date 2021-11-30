
// Please don't change the lines below
let s = new Shape(5,10);
console.log(s.displayInfo());

let sq = new Square(10, 20, 30);
console.log(sq.displayInfo());

let t = new Triangle(20,30,20);
console.log(t.displayInfo());

let shapesResults = transformPlainObjectsToShapes(plainObjects);
for (let s of shapesResults)
    console.log(s.displayInfo());
