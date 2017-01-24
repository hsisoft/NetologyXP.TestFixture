'use strict';

class Barmen {
    constructor() {
        this.totalRequests = 0;
    }

    pour(volume) {
        if (volume < 0) {
            throw new Error('Invalid volume of whisky');
        }

        this.totalRequests++;

        if (this.totalRequests % 2 == 0) {
            return volume + 50;
        }

        return volume;
    }

    free() {
        this.totalRequests = 0;
    }
}

module.exports = Barmen;