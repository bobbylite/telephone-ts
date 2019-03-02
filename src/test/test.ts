import { Telephonets } from "../telephonets";
import "reflect-metadata";
import { NotHelloHandler, HelloHandler } from "./testhandlers";
import { HelloEvent, NotHelloEvent } from "./testevents";
import { IHelloEvent, INotHelloEvent } from "./testinterfaces";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function Test() {
    var telephonets = new Telephonets();

    telephonets.CreateQuietListeningWire<INotHelloEvent>("INotHelloEvent", NotHelloHandler);
    telephonets.CreateQuietListeningWire<IHelloEvent>("IHelloEvent", HelloHandler);


    telephonets.ShoutOnWire<IHelloEvent>("IHelloEvent", new HelloEvent);
    await sleep(1000);
    telephonets.ShoutOnWire<INotHelloEvent>("INotHelloEvent", new NotHelloEvent);
}

Test();