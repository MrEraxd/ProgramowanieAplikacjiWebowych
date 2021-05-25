export default class AppStorage {
    /**
     *  @param key
     *  //@return JSON Object
     */
    getData<Type>(key: string): Type | string{
        const data: string = localStorage.getItem(key);

        if(data){
            try {
                return JSON.parse(data);
            }
            catch (e) {
                return data;
            }
        }

        return null;
    }

    setData(key: string, data: object | string): void{
        if(typeof data === "object"){
            localStorage.setItem(key, JSON.stringify(data));
        }
        else {
            localStorage.setItem(key, data);
        }
    }
}