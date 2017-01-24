"use strict";

class SystemTime {
    constructor() {
        this._defaultDate = new Date();
        this._date = this._defaultDate;
    }

    set(customDate) {
        this._date = customDate;
    }

    reset() {
        this._date = new Date();
    }

    now() {
        if (this._date !== this._defaultDate) {
            return this._date;
        }

        return new Date();
    }
}

module.exports = SystemTime;