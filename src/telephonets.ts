import { Container, typeConstraint } from "inversify";
import { ITelephonets } from "./types/ITelephonets";
import "reflect-metadata";
import { IBaseHandler } from "./types/IBaseHandler";

export class Telephonets implements ITelephonets {

    private container: Container;

    public constructor() {
        this.container = new Container();
    }

    public Register<T>(symbolString: string, Handler: any) : void {
        this.container.bind<T>(symbolString).to(Handler);
    }

    public Call<T>(symbolString: string, message: any) : void {
        this.container.get<IBaseHandler<T>>(symbolString).ReceiveMessage(message);
    }
}