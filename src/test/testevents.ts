import { IHelloEvent, INotHelloEvent } from "./testinterfaces";

export class HelloEvent implements IHelloEvent {
    public msg: string = "Hello World!";
}

export class NotHelloEvent implements INotHelloEvent {
    msg: string = "Not Hello World!";

}