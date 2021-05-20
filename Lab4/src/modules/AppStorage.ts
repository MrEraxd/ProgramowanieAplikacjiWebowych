export class AppStorage {
    getData(key: string): Object | string | null {
        const data: string = localStorage.getItem(key);

        if(data){
            try {
                return (JSON.parse(data));
            }
            catch (e) {
                return data;
            }
        }

        return null;
    }

    setData(key: string, data: Object | string): void{
        if(typeof data === "object"){
            localStorage.setItem(key, JSON.stringify(data));
        }
        else {
            localStorage.setItem(key, data);
        }
    }
}