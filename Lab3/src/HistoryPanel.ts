export class HistoryPanel {
    elementsHolder: HTMLDivElement;

    constructor() {
        this.elementsHolder = document.querySelector("#history > .gridHolder")

        if(!this.getLocalstorageData() || this.getLocalstorageData().historyItems === undefined) {
            this.initLocalstorageStructure();
        }

        this.loadPanel();
        this.addSaveListener();
    }

    addSaveListener(){
        document.querySelector("#saveButton").addEventListener("click", () => {
            this.addHistoryData();
        })
    }

    initLocalstorageStructure(){
        const structure = '{ "historyItems": [] }';
        localStorage.setItem("historyWeatherData", structure);
    }

    loadPanel(){
        const data = this.getLocalstorageData();

        this.elementsHolder.innerHTML = "";

        data.historyItems.forEach((panelData: Object) => {
            this.elementsHolder.appendChild(this.createPanelElement(panelData));
        })
    }

    removeHistoryData(cityName: string){
        let data = this.getLocalstorageData();

        data.historyItems.forEach((item: any, index: number) => {
            if(item.name === cityName){
                data.historyItems.splice(index, 1);
            }
        })

        localStorage.setItem("historyWeatherData", JSON.stringify(data));
        this.loadPanel();
    }

    createPanelElement(panelData: any){
        let wrapper: HTMLDivElement = document.createElement("div");
        wrapper.classList.add("gridElement");

        const cityName: string = panelData.name;
        const weatherDesc = panelData.weather[0].description;
        const temp = panelData.main.temp;
        const humidity = panelData.main.humidity;
        const pressure = panelData.main.pressure;

        wrapper.innerHTML =
            `<h2 class="city">${cityName}</h2>

            <span class="weather">${weatherDesc}</span>
            
            <span class="close-button">X</span>

            <div class="moreInfo">
              <div>
                <span class="temp">${Math.round(temp)} °C</span>
              </div>

              <div class="minorInfo">
                <div>
                  <span>Wilgotność:</span>
                  <span class="humidity">${humidity}%</span>
                </div>

                <div>
                  <span>Ciśnienie:</span>
                  <span class="pressure">${pressure} hPa</span>
                </div>
              </div>
            </div>`

        wrapper.querySelector(".close-button").addEventListener("click", () => {
            this.removeHistoryData(cityName);
        })

        return wrapper;
    }

    addHistoryData(){
        let data = this.getLocalstorageData();
        data.historyItems
            .push(JSON.parse(localStorage.getItem("mainPanelWeatherData")));

        localStorage.setItem("historyWeatherData", JSON.stringify(data));
        this.loadPanel();
    }

    getLocalstorageData(){
        const data = localStorage.getItem("historyWeatherData");

        if(this.isJSON(data)){
            return JSON.parse(data);
        }
        else {
            return false;
        }
    }

    isJSON(data: string){
        try{
            JSON.parse(data);
        }
        catch (e) {
            return false;
        }

        return true;
    }

    changeMainPanelData(){

    }
}