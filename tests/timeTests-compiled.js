'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('time tests', function () {
    var minutes = 40;

    setup(function () {
        Date.prototype.getMinutes = function () {
            return minutes;
        };
    });

    var waitForMinutes = function waitForMinutes(interval) {
        minutes += interval;
    };

    test('For Date', function () {
        _assert2.default.equal('40', new Date().getMinutes());

        waitForMinutes(10);

        _assert2.default.equal('50', new Date().getMinutes());
    });

    teardown(function () {
        console.log('teardown');
    });
});

//# sourceMappingURL=timeTests-compiled.js.map