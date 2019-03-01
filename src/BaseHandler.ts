import { injectable } from "inversify";
import { IBaseHandler } from "./types/IBaseHandler";
import "reflect-metadata";

@injectable()
export abstract class BaseHandler implements IBaseHandler {
    public MessageInjectionInCtor(injection: any) : any {
        this.HandleMessage(injection);
    }
    protected abstract HandleMessage(message: any): any;
}