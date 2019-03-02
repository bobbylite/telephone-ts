export interface IBaseHandler<T> {
    ReceiveMessage(injection: T): any;
}