import { FileSystemComponent } from "./component";

// Composite
export class Folder implements FileSystemComponent {
  private children: FileSystemComponent[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  add(component: FileSystemComponent): void {
    this.children.push(component);
  }

  remove(component: FileSystemComponent): void {
    this.children = this.children.filter(child => child !== component);
  }

  display(indent: string = ''): void {
    console.log(`${indent}+ Folder: ${this.name}`);
    for (const child of this.children) {
      child.display(indent + '  ');
    }
  }
}