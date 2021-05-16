import { WeatherAPI } from './WeatherAPI';

export class MainPanel {
    searchBar:              HTMLInputElement;
    cityNameHolder:         HTMLSpanElement;
    dateHolder:             HTMLSpanElement;
    weatherIconHolder:      HTMLImageElement;
    weatherDescHolder:      HTMLSpanElement;
    currentTempHolder:      HTMLSpanElement;
    currentHumidityHolder:  HTMLSpanElement;
    currentPressureHolder:  HTMLSpanElement;

    weatherAPI = new WeatherAPI();

    constructor() {
        this.searchBar              = document.querySelector("#searchBar > input");
        this.cityNameHolder         = document.querySelector("#cityName > span");
        this.dateHolder             = document.querySelector("#date > span");
        this.weatherIconHolder      = document.querySelector("#weatherIcon > img");
        this.weatherDescHolder      = document.querySelector("#weatherDesc > span");
        this.currentTempHolder      = document.querySelector("#currentTemp > span");
        this.currentHumidityHolder  = document.querySelector("#currentHumidity > span");
        this.currentPressureHolder  = document.querySelector("#currentPressure > span");
        this.addInputListener();
        this.loadDataFromStorage();
    }

    addInputListener(){
        this.searchBar.addEventListener("keydown", (ev: any) => {
            if(ev.key === "Enter"){
                this.weatherAPI.getWeather(ev.target.value)
                    .then(res => {
                        this.updatePanel(res);
                    })
            }
        });
    }

    updatePanel(data: any){
        if(data === null || data === undefined){
            return;
        }

        this.updateCityName(data.name);
        this.updateDate();
        this.updateIcon(data.weather[0].icon);
        this.updateDesc(data.weather[0].description);
        this.updateTemp(data.main.temp);
        this.updateHumidity(data.main.humidity);
        this.updatePressure(data.main.pressure);
        this.updateLocalStorage(data);
    }

    loadDataFromStorage(){
        let data = localStorage.getItem("mainPanelWeatherData");
        this.updatePanel(JSON.parse(data));
    }

    updateLocalStorage(data: JSON){
        localStorage.setItem("mainPanelWeatherData", JSON.stringify(data))
    }

    updateDate(){
        const date = new Date();

        let dateString: string;

        switch (date.getDay()) {
            case 0: dateString = "Niedziela"; break;
            case 1: dateString = "Poniedziałek"; break;
            case 2: dateString = "Wtorek"; break;
            case 3: dateString = "Środa"; break;
            case 4: dateString = "Czwartek"; break;
            case 5: dateString = "Piątek"; break;
            case 6: dateString = "Sobota"; break;
        }

        dateString += ` ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

        this.dateHolder.innerText = dateString;
    }

    updateIcon(iconID: string){
        this.weatherIconHolder.src = `https://openweathermap.org/img/wn/${iconID}@4x.png`;
    }

    updateDesc(description: string){
        this.weatherDescHolder.innerText = description;
    }

    updateTemp(temp: number){
        this.currentTempHolder.innerText = Math.round(temp) + "°C";
    }

    updateHumidity(humidity: string){
        this.currentHumidityHolder.innerText = humidity + "%";
    }

    updatePressure(pressure: string){
        this.currentPressureHolder.innerText = pressure + " hPa";
    }

    updateCityName(cityName: string){
        this.cityNameHolder.innerText = cityName;
    }

}