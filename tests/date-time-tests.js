"use strict";

var assert = require('assert');

describe('date time tests', function () {
    let minutes = 40;
    let getMinutesFunction;

    beforeEach(function () {
        getMinutesFunction = Date.prototype.getMinutes;
        Date.prototype.getMinutes = function () {
            return minutes;
        };
    });

    var waitForMinutes = function (intervalInMinutes) {
        minutes += intervalInMinutes;
    };

    it('Wait for interval in minutes', function () {
        assert.equal('40', new Date().getMinutes());

        waitForMinutes(10);

        assert.equal('50', new Date().getMinutes());
    });

    afterEach(function () {
        console.log('teardown');

        Date.prototype.getMinutes = getMinutesFunction;
        console.log(new Date().getMinutes())
    });
});