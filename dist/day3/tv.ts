
export  class TV {
    public channel:int;
    public volumeLevel:int;
    public on: boolean;
    constructor TV(channel: int, volumeLevel: int, on: boolean);
    turnOn(on: string): void;
    turnOff(off: number): void;
    setChannel1(newChannel: int): void;
    setVolume(newVolumeLevel:int): void;
    channel1Up(): void;
    channel1Down(): void;
    volumeUp(): void;
    volumeDown():void;
}

