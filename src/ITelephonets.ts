export interface ITelephonets {
    CreateQuietListeningWire(Handler: any, symbolString: string): void;
    ShoutOnWire(symbolString: string, message: any): void;
}