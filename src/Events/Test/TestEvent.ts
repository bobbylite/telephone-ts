import { IMessage } from "../BaseEvent";

export class TestEvent implements IMessage {
    public event: string;
    public message: any;
    public constructor(event: string) {
        this.event = event;
    }

}