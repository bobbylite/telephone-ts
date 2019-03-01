import { BaseHandler } from "../BaseHandler";

export class NotHelloHandler extends BaseHandler {

    public constructor() {
        super();
    }

    protected HandleMessage(message: any) {
        console.log(message);
    }
}

export class HelloHandler extends BaseHandler {

    public constructor() {
        super();
    }

    public HandleMessage(message: any) {
        console.log(message);
    }
}