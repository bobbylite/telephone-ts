import { Telephonejs } from "..";
import "reflect-metadata";
import { NotHelloHandler, HelloHandler } from "./testhandlers";
import { HelloEvent, NotHelloEvent } from "./testevents";
import { IHelloEvent, INotHelloEvent } from "./testinterfaces";

var t = new Telephonejs();

t.CreateQuietListeningWire<INotHelloEvent>("INotHelloEvent", NotHelloHandler);
t.CreateQuietListeningWire<IHelloEvent>("IHelloEvent", HelloHandler);


t.ShoutOnWire("IHelloEvent", new HelloEvent);
t.ShoutOnWire("INotHelloEvent", new NotHelloEvent);