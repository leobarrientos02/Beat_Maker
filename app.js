class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hiharAudio = document.querySelector(".hihat-sound");
    this.bpm = 150;
    // TRACKER
    this.index = 0;
  }
  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    //console.log(activeBars);
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    setInterval(() => {
      this.repeat();
    }, 1000);
  }
}

const drumKit = new DrumKit();

drumKit.start();
