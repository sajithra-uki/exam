"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.private = void 0;
class private {
    channel;
    volumeLevel;
    on;
    constructor() {
        this.channel = 1;
        this.volumeLevel = 10;
        this.on = false;
    }
    turnOn() {
        this.on = true;
        console.log("TV is now ON.");
    }
    turnOff() {
        this.on = false;
        console.log("TV is now OFF.");
    }
    setChannel(newChannel) {
        if (this.on && newChannel >= 1 && newChannel <= 999) {
            this.channel = newChannel;
        }
        else {
            console.log("TV is OFF or invalid channel.");
        }
    }
    setVolume(newVolumeLevel) {
        if (this.on && newVolumeLevel >= 0 && newVolumeLevel <= 100) {
            this.volumeLevel = newVolumeLevel;
        }
        else {
            console.log("TV is OFF or invalid volume.");
        }
    }
    channelUp() {
        if (this.on) {
            this.channel++;
        }
    }
    channelDown() {
        if (this.on && this.channel > 1) {
            this.channel--;
        }
    }
    volumeDown() {
        if (this.on && this.volumeLevel > 0) {
            this.volumeLevel--;
        }
    }
    volumeUp() {
        if (this.on && this.volumeLevel < 100) {
            this.volumeLevel++;
        }
    }
    getStatus() {
        console.log(`TV is ${this.on ? "ON" : "OFF"}`);
        if (this.on) {
            console.log(`Channel: ${this.channel}, Volume: ${this.volumeLevel}`);
        }
    }
}
exports.private = private;
//# sourceMappingURL=private.js.map