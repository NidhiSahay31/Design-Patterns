import { FileSystemComponent } from "./component";

// Leaf
export class File implements FileSystemComponent {
  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  display(indent: string): void {
    console.log(`${indent}- File: ${this.name}`);
  }
}