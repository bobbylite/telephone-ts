import { TelephoneJS } from "../src";
import { HelloHandler, HelloHandler2 } from "../test/testhandlers";

var t = new TelephoneJS<IHello>();

t.CreateQuietListeningWire<IHello>(HelloHandler, "IHello");
t.CreateQuietListeningWire<IHello>(HelloHandler2, "IHello");

t.ShoutOnWire<IHello>();