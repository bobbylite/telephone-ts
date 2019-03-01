import { Telephonejs } from "..";
import "reflect-metadata";
import { NotHelloHandler, HelloHandler } from "./testhandlers";
import { IHello, INotHello } from "./testinterfaces";

var t = new Telephonejs<IHello>();

t.CreateQuietListeningWire<INotHello>(NotHelloHandler, "INotHello");
t.CreateQuietListeningWire<IHello>(HelloHandler, "IHello");

t.ShoutOnWire<IHello>("IHello");
t.ShoutOnWire<INotHello>("INotHello");
