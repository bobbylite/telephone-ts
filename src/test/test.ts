import { Telephonets } from "../telephonets";
import "reflect-metadata";
import { NotHelloHandler, HelloHandler } from "./testhandlers";
import { HelloEvent, NotHelloEvent } from "./testevents";
import { IHelloEvent, INotHelloEvent } from "./testinterfaces";
import { IBaseHandler } from "../types/IBaseHandler";
import { BaseHandler } from "../BaseHandler";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function Test() {
    var telephonets = new Telephonets();

    telephonets.Register<INotHelloEvent>("INotHelloEvent", NotHelloHandler);
    telephonets.Register<IHelloEvent>("IHelloEvent", HelloHandler);


    telephonets.Call<IHelloEvent>("IHelloEvent", new HelloEvent);
    await sleep(1000);
    telephonets.Call<INotHelloEvent>("INotHelloEvent", new NotHelloEvent);
}

Test();