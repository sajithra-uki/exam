"use strict";

import { TV } from "./tv";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TV = void 0;
class tv {
    channel: int, 
    volumeLevel: int,
    on: boolean,
    constructor(channel, volumeLevel, on) {
        this.channel = channel;
        this.volumeLevel = volumeLevel;
        this.on = on;
    }
    setChannel(channel) {
        this.channel = channel;
    }
    setVolumeLevel(volumeLevel) {
        this.volumeLevel = volumeLevel;
    }
    setOn(on) {
        this.on = on;
    }
    getChannel() {
        return this.channel;
    }
    getVolumeLevel() {
        return this.volumeLevel;
    }
    getOn() {
        return this.on;
    }
}
exports.TV = TV;
//# sourceMappingURL=students.js.map