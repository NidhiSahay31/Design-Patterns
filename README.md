## Design Pattern
  - Creational
  - Behavioral
  - Structural

## Creational
  ### Singleton
  ### Factory Method
      Allows subclasses to modify the objects without affecting superclass
      Use when you don’t know beforehand the exact types and dependencies of the objects your code should work with.
    - Factory Method
        - Interface(Shape)
        - Concrete(Circle & Rectangle)
        - Creator(Factory)
          - SubCreator(CircleFactory & RectangleFactory)
  ### Abstract Factory
  ### Prototype
  ### Builder

## Behavioral

## Structural
   ### Adapter 
     - Legacy class(legacyLogger)
     - New class(newLogger)
     - Adapter class(loggerAdapter)
   ### Bridge
       Decouples implementation from abstract class and add more flexibility
       - Abstract(Shape)
       - Refined Abstract(Circle)
       - Implementation + Concrete implementation(Implementor)
   ### Composite
   ### Decorator
       It lets you attach add new behavior or responsibilities to an object dynamically.
        - Base component(coffee)
        - Concrete component(simpleCoffee)
        - Base Decorator(coffeeDecorator)
        - Concrete decorators(milkDecorator, sugarDecorator)
   ### Facade

   ### Proxy

