import { Container, injectable } from "inversify";
import { ITelephonejs } from "./ITelephonejs";
import "reflect-metadata";

export class Telephonejs implements ITelephonejs {

    private container: Container;
    private implementationObjet: any;

    public constructor() {
        this.container = new Container();
    }

    public CreateQuietListeningWire<T>(Handler: any, symbolString: string) : void {
        this.implementationObjet = Handler;
        this.container.bind<T>(symbolString).to(this.implementationObjet);
    }

    public ShoutOnWire<T>(symbolString: string) : void {
        this.container.get<T>(symbolString);
    }
}
