'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _barmen = require('../src/barmen');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

//<ClassName>Should.<Act><Assert>
suite('Barmen should', function () {
    suite('pour me 50 grams', function () {
        test('when I ask 50 grams', function () {
            _assert2.default.equal(50, (0, _barmen.pour)(50));
        });
    });
});

//# sourceMappingURL=barmenShouldTests-compiled.js.map

//# sourceMappingURL=barmenShouldTests-compiled-compiled.js.map