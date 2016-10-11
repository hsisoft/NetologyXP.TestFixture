import assert from 'assert'
import { pour, free as freeBarmen } from '../src/barmen'
import { drink, sober, getTotallyDrunked } from '../src/me'

suite('when barmen pour whisky', function () {
    setup(function () {
        console.log('setup');
        freeBarmen();
        sober();
    });

    suite('i ask 50 grams', function () {
        test('get 50 grams of whisky', function () {
            console.log('test');
            var iAskVolume = 50;

            var volumeInGlass = pour(iAskVolume);

            assert.equal(iAskVolume, volumeInGlass);
        });

        test('I got 50 grams and 50 grams more as a present on 2nd request', function() {
            console.log('test');
            var iAskVolume = 50;

            var volumeInGlass = pour(iAskVolume);
            drink(volumeInGlass);

            volumeInGlass = pour(iAskVolume);

            //В чем тут сложность?
            assert.equal(100, volumeInGlass);
        });

        test('I am drunked because of', function() {
            var first = pour(50);
            drink(first);

            var second = pour(50);
            drink(second);

            var third = pour(100);
            drink(third);

            assert.equal(true, getTotallyDrunked() > 150);
        });
    });

    teardown(function() {
        console.log('teardown');
    })
});