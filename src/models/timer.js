import { observable, computed, action, decorate } from "mobx"

import timerData from './timerData';

class Timer {
  slots;
  currentSlotIndex = 0;
  elapsedSeconds = 0;
  isOn = false;
  tickInterval;

  constructor(slots = timerData.slots) {
    this.slots = slots;
  }

  start = () => {
    this.tickInterval = setInterval(this.tick, 1000);
    this.isOn = true;
  };

  stop = () => {
    clearInterval(this.tickInterval);
    this.isOn = false;
  };

  reset = () => {
    this.stop();
    this.elapsedSeconds = 0;
  };

  resetIndex = () => {
    this.currentSlotIndex = 0;
  };

  tick = () => {
    if (this.elapsedSeconds >= this.currentSlotDuration) {
      this.proceedToNextSlot();
      return;
    }

    this.elapsedSeconds += 1;
  };

  proceedToNextSlot = () => {
    this.reset();
    const nextIndex = this.currentSlotIndex + 1;

    if (!this.slots[nextIndex]) {
      this.resetIndex();
      return;
    }

    this.currentSlotIndex = nextIndex;
    this.start();
  };

  get remainingSeconds() {
    return this.currentSlotDuration - this.elapsedSeconds;
  }

  get currentSlotData() {
    return this.slots[this.currentSlotIndex];
  }

  get currentSlotDuration() {
    return this.currentSlotData.duration;
  }

  get currentSlotName() {
    return this.currentSlotData.name;
  }
}

decorate(Timer, {
  currentSlotData: computed,
  currentSlotDuration: computed,
  currentSlotIndex: observable,
  currentSlotName: computed,
  elapsedSeconds: observable,
  remainingSeconds: computed,
  start: action,
  stop: action,
});

export default Timer;
