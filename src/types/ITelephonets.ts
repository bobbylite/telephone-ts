export interface ITelephonets {
    Register<T>(InterfaceObject: any, Service: any): void;
    Call<T>(name: any, injectObject: any): void
}