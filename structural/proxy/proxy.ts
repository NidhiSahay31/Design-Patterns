import { RealImage } from "./service";
import { Image } from "./serviceInterface";

export class ProxyImage implements Image {
  private realImage: RealImage | null = null;
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  public display(): void {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename); // Load only when needed
    }
    this.realImage.display();
  }
}