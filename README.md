# telephone-ts [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Telephone-ts%20TypeScript%20Architecture%20&url=https://github.com/bobbylite/telephone-ts&hashtags=Inversion-of-Control,Events,TypeScript,TelephoneTS)
Telephone-ts is a "Event Emitter-less" TypeScript Event Architecture.  Without the use of the 'events' module from node, Telephone-ts is an OOP message bus that allows developers to easily register their TypeScript Event Handlers to listen to when an Event message is "Shouted" on the telephone line! 

Sure, there are tons of great event modules... Sometimes it's just plain fun to re-invent the wheel.  I found this useful when trying to keep my code modular with InversifyJS, which is the IOC DI registering engine begind Telephone-ts. 

## Run example
There is a test script available to run to see how this repo works. 
Run the following in your terminal.

### Clone the code 
```bash
git clone https://github.com/bobbylite/telephone-ts.git
cd telephone-ts/
```

### Install dependencies
```bash
npm install 
npm run test
```

## How to use in project

### Step 1
Create your Event Interfaces.  This will explain what you want your event to send over our line! 
```typescript
export interface IHelloEvent {
    msg: string;
}
```

### Step 2
Implement your Event so you can have everything you need.  Maybe you want to setup a service for handling an event later?  
In this example we'll just use our greeting string we all love. 
```typescript 
export class HelloEvent implements IHelloEvent {
    public msg: string = "Hello World!";
}
```

### Step 3 
Next we'll create our event handler interfaces. This will explain what is needed to handle the event!
```typescript 
export interface IHelloHandler {
    Logger: ILogger;
}
```

### Step 4
This is where we will implement our event handler.  We must make sure to inherit/extend the BaseHandler class provided. 
```typescript
export class HelloHandler extends BaseHandler<IHelloEvent> implements IHelloHandler {

    public Logger: ILogger = new Logger();

    public constructor() {
        super();
    }

    protected HandleMessage(message: IHelloEvent) {
        this.Logger.log(message);
    }
}
```

### Step 5
We now have everything we need to register, and emit events... Or create our quiet listening wire and shout on that wire! 
Both CreateQuietListeningWire and ShoutOnWire require the following: 
TelephonetsInstance.CreateQuietListeningWire<EventInterface>("EventInterface", HandlerClassReference);
TelephonetsInstance.ShoutOnWire<EventInterface>("EventInterface", new EventClass);
```typescript
var telephonets = new Telephonets();

telephonets.CreateQuietListeningWire<IHelloEvent>("IHelloEvent", HelloHandler);


telephonets.ShoutOnWire<IHelloEvent>("IHelloEvent", new HelloEvent); // OUTPUT-> HelloEvent { msg: 'Hello World!' }
```

## Behind the scenes
Behind the scenes we have two important files that really auto-wire up the events to the handlers.  These two files are the telephonets.ts and BaseHandler.ts.  telephonets uses InversifyJs' Container to auto-wire similar to how Autofac or other IOC libraries work.  The BaseHandler is what we need our custom handlers to inherit from to ensure the project is structured properly.  Take a look below.

#### telephonets.ts
```typescript
export class Telephonets implements ITelephonets {

    private container: Container;

    public constructor() {
        this.container = new Container();
    }

    public CreateQuietListeningWire<T>(symbolString: string, Handler: any) : void {
        this.container.bind<T>(symbolString).to(Handler);
    }

    public ShoutOnWire<T>(symbolString: string, message: T) : void {
        this.container.get<IBaseHandler<T>>(symbolString).ReceiveMessage(message);
    }
}
```

#### BaseHandler.ts
```typescript
@injectable()
export abstract class BaseHandler<T> implements IBaseHandler<T> {
    public ReceiveMessage(injection: T) : any {
        try {
            this.HandleMessage(injection);
        } catch(err) {
            console.log(err);
        }
    }
    protected abstract HandleMessage(message: T): any;
}
```
