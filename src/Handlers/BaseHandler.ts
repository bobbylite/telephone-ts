import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export abstract class BaseHandler<T> {

    public constructor(public typeInstance: T) {
        this.HandleMessage(this.typeInstance);
    }
    
    public abstract HandleMessage(message: T) : any;
}