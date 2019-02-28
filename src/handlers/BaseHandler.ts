import { injectable } from "inversify";
import { IBaseHandler } from "../types/IBaseHandler";

@injectable()
export abstract class BaseHandler<T> implements IBaseHandler<T>{
    public MessageInjectionInCtor(injection: any) : any {
        this.HandleMessage(injection);
    }
    protected abstract HandleMessage(message: any): any;
}