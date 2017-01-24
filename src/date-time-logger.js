'use strict';

class DateTimeLogger {
    createMessage(information) {
        return new Date().toDateString() + ' | ' + information;
    }
}

module.exports = DateTimeLogger;