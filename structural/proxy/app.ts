import { ProxyImage } from "./proxy";
import {Image} from "./serviceInterface";

const image1: Image = new ProxyImage("photo1.png");

console.log("Image not displayed yet...");

image1.display(); // Loads and displays
image1.display(); // Reuses existing RealImage, doesn't load again