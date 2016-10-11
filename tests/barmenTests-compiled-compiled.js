'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _barmen = require('../src/barmen');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

//mocha

// <ClassNameTests>.<Act>_<Arrange>_<Assert>
// suite('BarmenTests', function() {
//     test('PourMeWhisky_IAsk50Grams_IGotGlassWith50Gram', function() {
//
//     });
//
//     test('PourMeWhisky_IAsk200Grams_BarmenRejected', function() {
//
//     });
//
//     test('PourMeWhisky_IAmDrunked_BarmenRejected', function() {
//
//     });
// });

suite('When barmen pour whisky', function () {
    suite('I ask 50 gram', function () {
        test('he gave me a glass with 50 grams', function () {});
    });

    suite('I ask 200 gram', function () {
        test('barmen rejected', function () {});
    });
});

suite('I got 50 gram whisky', function () {
    test('I asked barmen for 50 grams', function () {
        _assert2.default.equal(50, volumeInGlass);
    });

    test('Invited friend and got free whisky', function () {
        _assert2.default.equal(50, volumeInGlass);
    });

    test('Friend ordered me a 50 gram whisky', function () {
        _assert2.default.equal(50, volumeInGlass);
    });
});

// BarmenShouldGiveWiskeyFor18Age
// arrange var bool: isViskeyWasGiven; var barmen; var age = 25
// act viskey = function('barmenGiveViskey');
// assert (viskey, true);
//
//
// BarmenShouldNOTGiveWiskeyForNOT18Age
// arrange var bool: isViskeyWasGiven; var barmen; var age = 17
// act viskey = function('barmenGiveViskey');
// assert (viskey, false)

//# sourceMappingURL=barmenTests-compiled.js.map

//# sourceMappingURL=barmenTests-compiled-compiled.js.map