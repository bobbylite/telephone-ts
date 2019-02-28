import { ListenToType } from "./EventManager";
import { Container } from "inversify";
import "reflect-metadata";
import { TestEvent } from "./Events/Test/TestEvent";
import { IMessage } from "./Events/BaseEvent";
import { TestHandler } from "./Handlers/Test/TestHandler";

export class TelephoneJS {

    public static _container: Container = new Container();
    public static TYPES: object;

    private static _listener: ListenToType;

    

    public static ListenToMessage(message: IMessage, handler: any) {
        TelephoneJS._listener = new ListenToType(message, handler);
    }

    public static SendMessage(message: string) {
        TelephoneJS._listener.emit(message);
    }
}

var Test = new TestEvent("TestEvent");
Test.message = {"1": 1, "2": 2};

TelephoneJS.ListenToMessage(Test, TestHandler);
TelephoneJS.SendMessage("TestEvent");
