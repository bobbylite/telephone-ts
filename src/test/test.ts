import { Telephonejs } from "..";
import "reflect-metadata";
import { NotHelloHandler, HelloHandler } from "./testhandlers";
import { HelloEvent, NotHelloEvent } from "./testevents";
import { IHelloEvent, INotHelloEvent } from "./testinterfaces";

var telephonejs = new Telephonejs();

telephonejs.CreateQuietListeningWire<INotHelloEvent>("INotHelloEvent", NotHelloHandler);
telephonejs.CreateQuietListeningWire<IHelloEvent>("IHelloEvent", HelloHandler);


telephonejs.ShoutOnWire<IHelloEvent>("IHelloEvent", new HelloEvent);
telephonejs.ShoutOnWire<INotHelloEvent>("INotHelloEvent", new NotHelloEvent);