import { BaseHandler } from "../BaseHandler";
import { injectable } from "inversify";
import { TestEvent } from "../../Events/Test/TestEvent";

@injectable()
export class TestHandler extends BaseHandler<TestEvent> {

    public HandleMessage(message: TestEvent) {
        console.log(message);
    }
}