# ts-telephone
Telephone-TS is a "Event Emitter-less" TypeScript Event Architecture.  Without the use of the 'events' library, TelephoneTS is an OOP Message Bus that allows developers to easily register their TypeScript Event Handlers to listen to when an Event message is "Shouted" on the telephone line!  

Sometimes it's just plain fun to re-invent the wheel for no reason.  I found this useful when trying to keep my code modular with InversifyJS, which is the registering engine begind TelephoneTS. 

## How to use 

### Step 1
Create your Event Interfaces.  This will explain what you want your event to send over our line! 
```javascript
export interface IHelloEvent {
    msg: string;
}
```

### Step 2
Implement your Event so you can have everything you need.  Maybe you want to setup a service for handling an event later?  
In this example we'll just use our greeting string we all love. 
```javascript 
export class HelloEvent implements IHelloEvent {
    public msg: string = "Hello World!";
}
```

### Step 3 
Next we'll create our event handler interfaces. This will explain what is needed to handle the event!
```javascript 
export interface IHelloHandler {
    Logger: ILogger;
}
```

### Step 4
This is where we will implement our event handler.  We must make sure to inherit/extend the BaseHandler class provided. 
```javascript
export class HelloHandler extends BaseHandler implements IHelloHandler {
    public Logger: ILogger = new Logger();

    public constructor() {
        super();
    }

    public HandleMessage(message: any) {
        this.Logger.log(message);
    }
}
```

### Step 5
We now have everything we need to register, and emit events... Or create our quiet listening wire and shout on that wire! 
```javascript
var telephonejs = new Telephonejs();

telephonejs.CreateQuietListeningWire<IHelloEvent>("IHelloEvent", HelloHandler);


telephonejs.ShoutOnWire("IHelloEvent", new HelloEvent); // OUTPUT-> HelloEvent { msg: 'Hello World!' }
```
