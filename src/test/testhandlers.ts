import { BaseHandler } from "../BaseHandler";
import { INotHelloHandler, IHelloHandler, INotHelloEvent, IHelloEvent } from "./testinterfaces";

export class NotHelloHandler extends BaseHandler<INotHelloEvent> implements INotHelloHandler {

    public constructor() {
        super();
    }

    protected HandleMessage(message: INotHelloEvent) {
        console.log(message);
    }
}

export class HelloHandler extends BaseHandler<IHelloEvent> implements IHelloHandler {

    public constructor() {
        super();
    }

    public HandleMessage(message: IHelloEvent) {
        console.log(message);
    }
}