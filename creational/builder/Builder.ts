import { CarBuilder } from "./CarBuilder";

export interface Builder{
    setModel(model: string): CarBuilder;
    setEngine(engine: string): CarBuilder;
    setWheels(wheels: number): CarBuilder;
    setColor(color: string): CarBuilder;

}