'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _barmen = require('../src/barmen');

var _me = require('../src/me');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('when barmen pour whisky', function () {
    setup(function () {
        console.log('setup');
        (0, _barmen.free)();
        (0, _me.sober)();
    });

    suite('i ask 50 grams', function () {
        test('get 50 grams of whisky', function () {
            console.log('test');
            var iAskVolume = 50;

            var volumeInGlass = (0, _barmen.pour)(iAskVolume);

            _assert2.default.equal(iAskVolume, volumeInGlass);
        });

        test('I got 50 grams and 50 grams more as a present on 2nd request', function () {
            console.log('test');
            var iAskVolume = 50;

            var volumeInGlass = (0, _barmen.pour)(iAskVolume);
            (0, _me.drink)(volumeInGlass);

            volumeInGlass = (0, _barmen.pour)(iAskVolume);

            //В чем тут сложность?
            _assert2.default.equal(100, volumeInGlass);
        });

        test('I am drunked because of', function () {
            var first = (0, _barmen.pour)(50);
            (0, _me.drink)(first);

            var second = (0, _barmen.pour)(50);
            (0, _me.drink)(second);

            var third = (0, _barmen.pour)(100);
            (0, _me.drink)(third);

            _assert2.default.equal(true, (0, _me.getTotallyDrunked)() > 150);
        });
    });

    teardown(function () {
        console.log('teardown');
    });
});

//# sourceMappingURL=whenBarmenPourWhiskyTests-compiled.js.map