import { Container, injectable } from "inversify";
import "reflect-metadata";

export class Telephonejs<T> {
    private Container: Container;
    private implementationObjet: any

    public constructor() {
        this.Container = new Container();
    }

    public CreateQuietListeningWire<T>(Handler: any, symbolString: string) {
        this.implementationObjet = Handler;
        this.Container.bind<T>(symbolString).to(this.implementationObjet);
    }

    public ShoutOnWire<T>(symbolString: string) : any {
        this.Container.get<T>(symbolString);
    }
}
