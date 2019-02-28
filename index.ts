import { Container, injectable } from "inversify";
import "reflect-metadata";

export class Telephonejs<T> {
    private Container: Container;
    private Type: symbol[] = []
    private implementationObjet: any

    public constructor() {
        this.Container = new Container();
    }

    public CreateQuietListeningWire<T>(Handler: any, symbolString: string) {
        var sym = Symbol(symbolString);
        this.Type.push(sym);
        this.implementationObjet = Handler;
        var x = this.Type.indexOf(sym);
        this.Container.bind<T>(this.Type[x]).to(this.implementationObjet);
    }

    public ShoutOnWire<T>() : any {
        this.Type.forEach((type)=> {
            this.Container.get<T>(type);
        })
    }
}
