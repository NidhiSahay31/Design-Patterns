// Implementor
export interface Renderer {
  renderCircle(radius: number): void;
}

// Concrete Implementor 1
export class VectorRenderer implements Renderer {
  renderCircle(radius: number): void {
    console.log(`Drawing a circle with radius ${radius} using Vector Renderer`);
  }
}

// Concrete Implementor 2
export class RasterRenderer implements Renderer {
  renderCircle(radius: number): void {
    console.log(`Drawing pixels for a circle with radius ${radius} using Raster Renderer`);
  }
}
