import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

function main(){
    // Step 4: Client Code
    //Prevents direct instantiation of Shape.
    const circlePrototype = new Circle('Red', 10);
    const rectanglePrototype = new Rectangle('Blue', 20, 10);

    // Cloning objects
    const clonedCircle = circlePrototype.clone();
    clonedCircle.color = 'Green'; // Modify properties
    clonedCircle.draw(); // Output: Drawing Green Circle

    const clonedRectangle = rectanglePrototype.clone();
    clonedRectangle.width = 25; // Modify properties
    clonedRectangle.draw(); // Output: Drawing Blue Rectangle
}

main();