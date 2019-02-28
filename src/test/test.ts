import { HelloHandler, HelloHandler2 } from "../test/testhandlers";
import { TelephoneJS } from "..";
import "reflect-metadata";

var t = new TelephoneJS<IHello>();

t.CreateQuietListeningWire<IHello>(HelloHandler, "IHello");
t.CreateQuietListeningWire<IHello>(HelloHandler2, "IHello");

t.ShoutOnWire<IHello>();