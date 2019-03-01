import { Telephonejs } from "..";
import "reflect-metadata";
import { NotHelloHandler, HelloHandler } from "./testhandlers";
import { HelloEvent, NotHelloEvent } from "./testevents";
import { IHelloEvent, INotHelloEvent } from "./testinterfaces";

var t = new Telephonejs();

t.CreateQuietListeningWire<INotHelloEvent>("INotHello", NotHelloHandler);
t.CreateQuietListeningWire<IHelloEvent>("IHello", HelloHandler);


t.ShoutOnWire("IHello", new HelloEvent);
t.ShoutOnWire("INotHello", new NotHelloEvent);