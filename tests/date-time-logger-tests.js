"use strict";

var assert = require('assert');
var SystemTime = require('../src/system-time');
var DateTimeLogger = require('../src/date-time-logger');

describe('when get date time', function () {
    let systemTime = new SystemTime();

    it('should return date and time I\'ve just set', function () {

        systemTime.set(new Date(2017, 1, 24));

        let output = new DateTimeLogger().createMessage('message');

        assert(output.includes('Jan 24 2017'));
    });

    afterEach(function () {
        systemTime.reset();
    });
});