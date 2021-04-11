export class App {
    opwApiKey = "ab92e02a3588f11d21f76a698c5dd3bf";
    constructor() {
        this.getCityInfo('zakopane');
    }

    async getCityInfo(city: string){
        const weather = await this.getWeather("zakopane");
        this.saveData(weather);
    }

    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=zakopane&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }

    saveData(data: any){
        localStorage.setItem("weatherData", JSON.stringify(data));
    }

    getData() {
        const data = localStorage.getItem("weatherData");
        if(data) {
            return JSON.parse(data);
        }
        else{
            return {};
        }
    }
}