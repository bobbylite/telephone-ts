import { BaseHandler } from "../BaseHandler";
import { INotHello, IHello } from "./testinterfaces";

export class NotHelloHandler extends BaseHandler<INotHello> {
    public msg: string;

    public constructor() {
        super();
        this.msg = "Not Hello World";
        this.MessageInjectionInCtor(this.msg);
    }

    protected HandleMessage(message: any) {
        console.log(message);
    }
}

export class HelloHandler extends BaseHandler<IHello> {
    public msg: string;

    public constructor() {
        super();
        this.msg = "Hello World";
        this.MessageInjectionInCtor(this.msg);
    }

    public HandleMessage(message: any) {
        console.log(message);
    }
}