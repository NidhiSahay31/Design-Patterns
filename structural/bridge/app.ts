import { Circle } from "./circle";
import { RasterRenderer, VectorRenderer } from "./implementor";

// Client Code
const vector = new VectorRenderer();
const raster = new RasterRenderer();

const circle1 = new Circle(vector, 5);
circle1.draw(); // Drawing a circle with radius 5 using Vector Renderer

const circle2 = new Circle(raster, 10);
circle2.draw(); // Drawing pixels for a circle with radius 10 us