import { EventEmitter } from "events";
import { IMessage } from "./Events/BaseEvent";
import { TestHandler } from "./Handlers/Test/TestHandler";
import { BaseHandler } from "./Handlers/BaseHandler";

export class ListenToType extends EventEmitter {

    private typeInstance: IMessage;

    public constructor(instance: IMessage, handler: any) {
        super();
        this.typeInstance = instance;
        this.RegisterEvent(this.typeInstance.event, handler);

    }
    
    public RegisterEvent(eventName: string, handler: any) : any {
        this.on(eventName, () => {
            var th = new handler(this.typeInstance);
        })
    }
}