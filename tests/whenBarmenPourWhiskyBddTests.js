import { expect } from 'chai'
import { pour, free as freeBarmen } from '../src/barmen'
import { drink, sober } from '../src/me'

//simple asserts
//complex asserts

describe('given: barmen is free and I want 50 grams', function() {
    describe('when: i ask him to pour 50 grams', function() {
        it('then: i got a glass with 50 grams of whisky', function() {
            console.log('test');
            var iAskVolume = 50;

            var volumeInGlass = pour(iAskVolume);

            expect(volumeInGlass).is.equal(iAskVolume);
        });
    });

    describe('when: i ask him to pour 50 grams twice', function() {
        it('I got 50 grams and 50 grams more as a present on 2nd request', function() {
            console.log('test');
            var iAskVolume = 50;

            var volumeInGlass = pour(iAskVolume);
            drink(volumeInGlass);

            volumeInGlass = pour(iAskVolume);

            expect(volumeInGlass).is.equal(100);
        })
    });

    describe('when: i ask him to pour -10 grams', function() {
        it ('throws error', function() {
            var iAskVolume = -10;

            var action = () => pour(iAskVolume);

            expect(action).to.throw(/Invalid volume of whisky/);
        })
    })
});