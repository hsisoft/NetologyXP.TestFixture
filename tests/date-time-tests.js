"use strict";

var assert = require('assert');

describe('date time tests', function () {
    let minutes = 40;
    let getMinutes;

    beforeEach(function () {
        getMinutes = Date.prototype.getMinutes;
        Date.prototype.getMinutes = function () {
            return minutes;
        };
    });

    var waitForMinutes = function (interval) {
        minutes += interval;
    };

    it('Wait for interval in minutes', function () {
        assert.equal('40', new Date().getMinutes());

        waitForMinutes(10);

        assert.equal('50', new Date().getMinutes());
    });

    afterEach(function () {
        console.log('teardown');

        Date.prototype.getMinutes = getMinutes;
        console.log(new Date().getMinutes())
    })

});