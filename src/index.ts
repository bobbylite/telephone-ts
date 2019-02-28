import { Container, getServiceIdentifierAsString, injectable } from "inversify";
import "reflect-metadata";

export class TelephoneJS<T> {
    private Container: Container;
    private Type: symbol[] = []
    private implementationObjet: any

    public constructor() {
        this.Container = new Container();
    }

    public ShoutOnWire<T>() : any {
        this.Type.forEach((type)=> {
            this.Container.get<T>(type);
        })
    }

    public CreateQuietListeningWire<T>(Handler: any, symbolString: string) {
        var sym = Symbol(symbolString);
        this.Type.push(sym);
        this.implementationObjet = Handler;
        var x = this.Type.indexOf(sym);
        this.Container.bind<T>(this.Type[x]).to(this.implementationObjet);
    }

    public OnWireHandler<T>() {

    }

}

export interface IBaseHandler<T> {
    HandleMessageInjection(injection: any): any;
}

@injectable()
export abstract class BaseHandler<T> implements IBaseHandler<T>{
    public HandleMessageInjection(injection: any) : any {
        this.HandleMessage(injection);
    }
    protected abstract HandleMessage(message: any): any;
}

// User creation 
interface IHello {
    msg: string;
}

class HelloHandler extends BaseHandler<IHello> {
    public msg: string;

    public constructor() {
        super();
        this.msg = "Hello World";
        this.HandleMessageInjection(this.msg);
    }

    public HandleMessage(message: any) {
        console.log(message);
    }
}

class HelloHandler2 extends BaseHandler<IHello> {
    public msg: string;

    public constructor() {
        super();
        this.msg = "Hello World2";
        this.HandleMessageInjection(this.msg);
    }

    public HandleMessage(message: any) {
        console.log(message);
    }
}

// example use

var t = new TelephoneJS<IHello>();
t.CreateQuietListeningWire<IHello>(HelloHandler, "IHello");
t.CreateQuietListeningWire<IHello>(HelloHandler2, "IHello");
t.ShoutOnWire<IHello>();
