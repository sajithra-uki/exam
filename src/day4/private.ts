export class private{
  private channel: number;
  private volumeLevel: number;
  private on: boolean;

  constructor() {
    this.channel = 1;
    this.volumeLevel = 10;
    this.on = false;
  }

  public turnOn(): void {
    this.on = true;
    console.log("TV is now ON.");
  }

  public turnOff(): void {
    this.on = false;
    console.log("TV is now OFF.");
  }

  public setChannel(newChannel: number): void {
    if (this.on && newChannel >= 1 && newChannel <= 999) {
      this.channel = newChannel;
    } else {
      console.log("TV is OFF or invalid channel.");
    }
  }

  public setVolume(newVolumeLevel: number): void {
    if (this.on && newVolumeLevel >= 0 && newVolumeLevel <= 100) {
      this.volumeLevel = newVolumeLevel;
    } else {
      console.log("TV is OFF or invalid volume.");
    }
  }

  public channelUp(): void {
    if (this.on) {
      this.channel++;
    }
  }

  public channelDown(): void {
    if (this.on && this.channel > 1) {
      this.channel--;
    }
  }

  public volumeDown(): void {
    if (this.on && this.volumeLevel > 0) {
      this.volumeLevel--;
    }
  }

  public volumeUp(): void {
    if (this.on && this.volumeLevel < 100) {
      this.volumeLevel++;
    }
  }

  public getStatus(): void {
    console.log(`TV is ${this.on ? "ON" : "OFF"}`);
    if (this.on) {
      console.log(`Channel: ${this.channel}, Volume: ${this.volumeLevel}`);
    }
  }
}