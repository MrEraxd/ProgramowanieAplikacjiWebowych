document.addEventListener("keypress", onKeyDown);

let channels: Object = {
    channel1: [],
    channel2: [],
    channel3: [],
    channel4: []
};

let settings: Object = {
    record: false,
    recordChannelName: ""
};

function onKeyDown(ev: KeyboardEvent): void{
    switch (ev.code) {
        case "KeyQ": playSound("boom");     break;
        case "KeyW": playSound("clap");     break;
        case "KeyE": playSound("hihat");    break;
        case "KeyR": playSound("kick");     break;
        case "KeyA": playSound("openhat");  break;
        case "KeyS": playSound("ride");     break;
        case "KeyD": playSound("snare");    break;
        case "KeyF": playSound("tink");     break;
        default: `Unsupported key: ${ev.code}`;
    }
}

function playSound(nameOfSound: string): void{
    const audioObject: HTMLAudioElement = document.querySelector(`[data-name-of-sound = ${nameOfSound}]`);
    audioObject.currentTime = 0;
    audioObject.play();

    if(settings["record"]){
        recordSound(nameOfSound, settings["recordChannelName"]);
    }
}

function recordSound(nameOfSound: string, channelName: string): void{
    const timestamp: number = Date.now();
    const infoPack: Array<string | number> = [nameOfSound, timestamp];
    channels[channelName].push(infoPack);
}

function clearChannel(channelName: string){
    channels[channelName] = [];
}

function playAllChannels(){
    for (const key in channels){
        playChannel(key);
    }
}

function playChannel(channelName: string){
    // Disables recording
    settings["record"] = false;

    let timeZero;

    channels[channelName].forEach((infoPack, index) => {
        if(index === 0){
            timeZero = infoPack[1];
        }

        window.setTimeout(() => {
            playSound(infoPack[0]);
        }, infoPack[1] - timeZero);
    });
}

function toggleRecording(channelName: string): void{
    settings["record"] = !settings["record"];
    settings["recordChannelName"] = channelName;
}