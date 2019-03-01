import { injectable } from "inversify";
import { IBaseHandler } from "./types/IBaseHandler";
import "reflect-metadata";

@injectable()
export abstract class BaseHandler implements IBaseHandler {
    public MessageInjectionInCtor(injection: any) : any {
        try {
            this.HandleMessage(injection);
        } catch(err) {
            console.log(err);
        }
    }
    protected abstract HandleMessage(message: any): any;
}