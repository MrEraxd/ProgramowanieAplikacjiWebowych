document.addEventListener("keypress", onKeyDown);
var channels = {
    channel1: [],
    channel2: [],
    channel3: [],
    channel4: []
};
var settings = {
    record: false,
    recordChannelName: ""
};
function onKeyDown(ev) {
    switch (ev.code) {
        case "KeyQ":
            playSound("boom");
            break;
        case "KeyW":
            playSound("clap");
            break;
        case "KeyE":
            playSound("hihat");
            break;
        case "KeyR":
            playSound("kick");
            break;
        case "KeyT":
            playSound("openhat");
            break;
        case "KeyA":
            playSound("ride");
            break;
        case "KeyS":
            playSound("snare");
            break;
        case "KeyD":
            playSound("tink");
            break;
        case "KeyF":
            playSound("tom");
            break;
        default: "Unsupported key: " + ev.code;
    }
}
function playSound(nameOfSound) {
    var audioObject = document.querySelector("[data-name-of-sound = " + nameOfSound + "]");
    audioObject.currentTime = 0;
    audioObject.play();
    if (settings["record"]) {
        recordSound(nameOfSound, settings["recordChannelName"]);
    }
}
function recordSound(nameOfSound, channelName) {
    var timestamp = Date.now();
    var infoPack = [nameOfSound, timestamp];
    channels[channelName].push(infoPack);
}
function clearChannel(channelName) {
    channels[channelName] = [];
}
function playAllChannels() {
    for (var key in channels) {
        playChannel(key);
    }
}
function playChannel(channelName) {
    // Disables recording
    settings["record"] = false;
    var timeZero;
    channels[channelName].forEach(function (infoPack, index) {
        if (index === 0) {
            timeZero = infoPack[1];
        }
        window.setTimeout(function () {
            playSound(infoPack[0]);
        }, infoPack[1] - timeZero);
    });
}
function toggleRecording(channelName) {
    settings["record"] = !settings["record"];
    settings["recordChannelName"] = channelName;
}
