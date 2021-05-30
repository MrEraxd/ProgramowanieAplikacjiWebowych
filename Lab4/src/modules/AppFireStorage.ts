import AppStorage from "./AppStorage";

export class appFireStorage implements AppStorage{
    getData<Type>(key: string): string | Type {
        return undefined;
    }

    setData(key: string, data: object | string): void {

    }
}