'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

suite('time tests', function () {
    var minutes = 40;
    var getMinutes = void 0;

    setup(function () {
        getMinutes = Date.prototype.getMinutes;
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
        Date.prototype.getMinutes = getMinutes;
        console.log(new Date().getMinutes());
    });
});

//# sourceMappingURL=timeTests-compiled.js.map