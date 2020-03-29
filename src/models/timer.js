import { observable, computed, action, decorate } from "mobx"

class Timer {
    durationSeconds = 30;
    elapsedSeconds = 0;
    tickInterval;

    constructor(durationSeconds) {
        this.durationSeconds = durationSeconds;
    }

    start() {
        this.tickInterval = setInterval(this.tick, 1000);
    }

    stop() {
        clearInterval(this.tickInterval);
    }

    tick() {
        if (this.elapsedTime >= this.durationSeconds) {
           this.stop();
        }

        this.elapsedSeconds += 1;
    }

    get remainingSeconds() {
        return this.durationSeconds - this.elapsedSeconds;
    }
}

decorate(Timer, {
    elapsedSeconds: observable,
    remainingSeconds: computed,
    start: action
})
