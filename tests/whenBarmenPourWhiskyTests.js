import assert from 'assert'
import { pour, free as freeBarmen } from '../src/barmen'
import { drink, sober, isDrunked, getTotallyDrunked } from '../src/me'


suite('when barmen pour whisky', function () {
    setup(function () {
        console.log('setup');
        freeBarmen();
        sober();
    });

    teardown(function() {
        console.log('teardown');
    });

    suite('i ask 50 grams', function () {
        test('get 50 grams of whisky', function () {
            var iAskVolume = 50;

            var volumeInGlass = pour(iAskVolume);

            assert.equal(iAskVolume, volumeInGlass);
        });

        test('I got 50 grams and 50 grams more on 2nd request', function() {
            var volumeInGlass = pour(50);
            drink(volumeInGlass);

            volumeInGlass = pour(100);

            //В чем тут сложность?
            assert.equal(50+100, volumeInGlass);
        });

        test('I am drunked because of drunked more than 150 gram', function() {
            var first = pour(50);
            drink(first);

            var second = pour(50);
            drink(second);

            var third = pour(100);
            drink(third);

            assert.equal(true, isDrunked());
        });
    });

    teardown(function() {
        console.log('teardown');
    })
});