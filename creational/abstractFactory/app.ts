import { Button, Checkbox } from "./abstractProducts";
import { LightThemeFactory, DarkThemeFactory } from "./concreteFactories";
import { GUIFactory } from "./GUIFactory";

// Client Code
class Application {
    private button: Button;// abstract product
    private checkbox: Checkbox;
  
    constructor(factory: GUIFactory) {
      this.button = factory.createButton();
      this.checkbox = factory.createCheckbox();
    }
  
    render(): void {
      this.button.render();
      this.checkbox.render();
    }
  }
  
  // Usage
  const theme: string = "dark"; // Can be dynamic
  let factory: GUIFactory;
  
  if (theme === "light") {
    factory = new LightThemeFactory();
  } else {
    factory = new DarkThemeFactory();
  }
  
  const app = new Application(factory);
  app.render();
  