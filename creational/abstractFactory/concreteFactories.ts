import { Button, Checkbox } from "./abstractProducts";
import {DarkButton, DarkCheckbox, LightButton, LightCheckbox} from "./concreteProducts"
import { GUIFactory } from "./GUIFactory";

// Concrete Factory: Light Theme
export class LightThemeFactory implements GUIFactory {
    createButton(): Button {
      return new LightButton();
    }
  
    createCheckbox(): Checkbox {
      return new LightCheckbox();
    }
  }
  
  // Concrete Factory: Dark Theme
  export class DarkThemeFactory implements GUIFactory {
    createButton(): Button {
      return new DarkButton();
    }
  
    createCheckbox(): Checkbox {
      return new DarkCheckbox();
    }
  }
  