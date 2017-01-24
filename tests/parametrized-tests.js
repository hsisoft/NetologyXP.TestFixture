var expect = require('chai').expect;
var Barmen = require('../src/barmen');
var Visitor = require('../src/visitor');

let barmen = new Barmen();
let me = new Visitor();

beforeEach(function () {
    console.log('before each');

    barmen.free();
    me.sober();
});

afterEach(function () {
    console.log('after each');
});

describe('Given: Barmen is free and I want X grams', function () {
    var testCases = [
        {askedVolume: 50, expectedVolume: 50},
        {askedVolume: 25, expectedVolume: 25},
        {askedVolume: 100, expectedVolume: 100}
    ];

    describe('When: I ask him to pour X grams', function () {
        testCases.forEach(function (testCase) {
            it('Then: I got a glass with ' + testCase.askedVolume + ' grams of whisky', function () {
                var iAskVolume = testCase.askedVolume;

                var volumeInGlass = barmen.pour(iAskVolume);

                expect(volumeInGlass).is.equal(testCase.expectedVolume);
            });
        });
    });
});