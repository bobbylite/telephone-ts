import { BaseHandler } from "../BaseHandler";
import { INotHelloHandler, IHelloHandler, INotHelloEvent, IHelloEvent } from "./testinterfaces";

export class NotHelloHandler extends BaseHandler<INotHelloEvent> implements INotHelloHandler {

    public constructor() {
        super();
    }

    protected HandleMessage(message: INotHelloEvent) : INotHelloEvent{
        console.log(message);

        return message;
    }
}

export class HelloHandler extends BaseHandler<IHelloEvent> implements IHelloHandler {

    public constructor() {
        super();
    }

    protected HandleMessage(message: IHelloEvent) : IHelloEvent{
        console.log(message);

        return message;
    }
}