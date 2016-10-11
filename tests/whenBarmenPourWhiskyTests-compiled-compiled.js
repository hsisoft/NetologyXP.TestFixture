'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _barmen = require('../src/barmen');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

suite('when barmen pour whisky', function () {
    setup(function () {});

    // * <Arrange>.<Assert>
    suite('i ask 50 grams', function () {
        test('get 50 grams of whisky', function () {
            _assert2.default.equal(50, (0, _barmen.pour)(50));
        });
    });

    //<Assert>.<Arrange>
    suite('I get 50 grams of whisky', function () {
        test('if barmen is free', function () {
            _assert2.default.equal(50, (0, _barmen.pour)(50));
        });

        test('if I won a promo glass', function () {
            _assert2.default.equal(50, (0, _barmen.pour)(50));
        });

        test('My friend ordered 50 grams to me', function () {
            _assert2.default.equal(50, (0, _barmen.pour)(50));
        });
    });
});

// * When<Action>.<Arrange><Assert>
// * <Arrange>.<Assert>
// * <Assert>.<Arrange>
// * <ClassName>Should.<Act><Assert>
// * <ClassNameTests>.<Act>_<Arrange>_<Assert>

//# sourceMappingURL=whenBarmenPourWhiskyTests-compiled.js.map

//# sourceMappingURL=whenBarmenPourWhiskyTests-compiled-compiled.js.map