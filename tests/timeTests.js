import assert from 'assert'

suite('time tests', function () {
    let minutes = 40;
    let getMinutes;

    setup(function() {
        getMinutes = Date.prototype.getMinutes;
        Date.prototype.getMinutes = function() {
            return minutes;
        }
    });

    var waitForMinutes = function(interval) {
        minutes += interval;
    };

    test('For Date', function() {
        assert.equal('40', new Date().getMinutes());

        waitForMinutes(10);

        assert.equal('50', new Date().getMinutes());
    });

    teardown(function() {
        console.log('teardown');
        Date.prototype.getMinutes = getMinutes;
        console.log(new Date().getMinutes())
    })
});