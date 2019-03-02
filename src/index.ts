import { Container, injectable } from "inversify";
import { ITelephonejs } from "./ITelephonejs";
import "reflect-metadata";
import { IBaseHandler } from "./types/IBaseHandler";

export class Telephonejs implements ITelephonejs {

    private container: Container;
    private implementationObjet: any;

    public constructor() {
        this.container = new Container();
    }

    public CreateQuietListeningWire<T>(symbolString: string, Handler: any) : void {
        this.implementationObjet = Handler;
        this.container.bind<T>(symbolString).to(this.implementationObjet);
    }

    public ShoutOnWire<T>(symbolString: string, message: T) {
        this.container.get<IBaseHandler<T>>(symbolString).MessageInjectionInCtor(message);
    }
}
