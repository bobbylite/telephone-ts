import { injectable } from "inversify";
import { IBaseHandler } from "./types/IBaseHandler";
import "reflect-metadata";

@injectable()
export abstract class BaseHandler<T> implements IBaseHandler<T> {
    public ReceiveMessage(injection: T) : void {
        try {
            this.HandleMessage(injection);
        } catch(err) {
            console.log(err);
        }
    }
    protected abstract HandleMessage(message: T): T;
}