// Component Interface
export interface FileSystemComponent {
  getName(): string;
  display(indent: string): void;
}
