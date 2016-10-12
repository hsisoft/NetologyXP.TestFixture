'use strict';

var _chai = require('chai');

var _barmen = require('../src/barmen');

var _me = require('../src/me');

//simple asserts
//complex asserts


describe('given: barmen is free and I want 50 grams', function () {
    beforeEach(function () {
        console.log('before each');
    });

    afterEach(function () {
        console.log('after each');
    });

    describe('when: i ask him to pour 50 grams', function () {
        it('then: i got a glass with 50 grams of whisky', function () {
            console.log('test');
            var iAskVolume = 50;

            var volumeInGlass = (0, _barmen.pour)(iAskVolume);

            (0, _chai.expect)(volumeInGlass).is.equal(iAskVolume);
        });
    });

    describe('when: i ask him to pour 50 grams twice', function () {
        it('I got 50 grams and 50 grams more as a present on 2nd request', function () {
            console.log('test');
            var iAskVolume = 50;

            var volumeInGlass = (0, _barmen.pour)(iAskVolume);
            (0, _me.drink)(volumeInGlass);

            volumeInGlass = (0, _barmen.pour)(iAskVolume);

            (0, _chai.expect)(volumeInGlass).is.equal(100);
        });
    });

    describe('when: i ask him to pour -10 grams', function () {
        it('throws error', function () {
            var iAskVolume = -10;

            var action = function action() {
                return (0, _barmen.pour)(iAskVolume);
            };

            (0, _chai.expect)(action).to.throw(/Invalid volume of whisky/);
        });
    });
});

//# sourceMappingURL=whenBarmenPourWhiskyBddTests-compiled.js.map