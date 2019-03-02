import { Telephonets } from "../telephonets";
import "reflect-metadata";
import { NotHelloHandler, HelloHandler } from "./testhandlers";
import { HelloEvent, NotHelloEvent } from "./testevents";
import { IHelloEvent, INotHelloEvent } from "./testinterfaces";

var telephonets = new Telephonets();

telephonets.CreateQuietListeningWire<INotHelloEvent>("INotHelloEvent", NotHelloHandler);
telephonets.CreateQuietListeningWire<IHelloEvent>("IHelloEvent", HelloHandler);


telephonets.ShoutOnWire<IHelloEvent>("IHelloEvent", new HelloEvent);
telephonets.ShoutOnWire<INotHelloEvent>("INotHelloEvent", new NotHelloEvent);