import { BaseHandler } from "../BaseHandler";
import { INotHelloHandler, IHelloHandler } from "./testinterfaces";

export class NotHelloHandler extends BaseHandler implements INotHelloHandler {

    public constructor() {
        super();
    }

    protected HandleMessage(message: any) {
        console.log(message);
    }
}

export class HelloHandler extends BaseHandler implements IHelloHandler {

    public constructor() {
        super();
    }

    public HandleMessage(message: any) {
        console.log(message);
    }
}