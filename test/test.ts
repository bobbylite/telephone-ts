import { HelloHandler, HelloHandler2 } from "../test/testhandlers";
import { Telephonejs } from "..";
import "reflect-metadata";

var t = new Telephonejs<IHello>();

t.CreateQuietListeningWire<IHello>(HelloHandler, "IHello");
t.CreateQuietListeningWire<IHello>(HelloHandler2, "IHello");

t.ShoutOnWire<IHello>();