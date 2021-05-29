export class WeatherAPI {
    opwApiKey = "2aeed0ddb6d14cdb42661fcb32e30247";

    constructor() {

    }

    async getWeather(city: string): Promise<any> {
        const openWeatherUrl =
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pl&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }
}