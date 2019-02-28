import { BaseHandler } from "../handlers/BaseHandler";


export class HelloHandler extends BaseHandler<IHello> {
    public msg: string;

    public constructor() {
        super();
        this.msg = "Hello World";
        this.MessageInjectionInCtor(this.msg);
    }

    protected HandleMessage(message: any) {
        console.log(message);
    }
}

export class HelloHandler2 extends BaseHandler<IHello> {
    public msg: string;

    public constructor() {
        super();
        this.msg = "Hello World2";
        this.MessageInjectionInCtor(this.msg);
    }

    public HandleMessage(message: any) {
        console.log(message);
    }
}