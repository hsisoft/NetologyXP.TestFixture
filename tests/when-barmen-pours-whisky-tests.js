var assert = require('assert');
var Barmen = require('../src/barmen');
var Visitor = require('../src/visitor');

suite('When barmen pours whisky', function () {
    let barmen = new Barmen();
    let me = new Visitor();

    setup(function () {
        console.log('setup');

        barmen.free();
        me.sober();
    });

    test('I got 50 grams and 50 grams more on 2nd request', function () {
        var volumeInGlass = barmen.pour(50);
        me.drink(volumeInGlass);

        volumeInGlass = barmen.pour(50);

        //В чем тут сложность?
        assert.equal(100, volumeInGlass);
    });

    test('I am drunked because I drunk more than 150 grams in total', function () {
        var first = barmen.pour(50);
        me.drink(first);

        var second = barmen.pour(50);
        me.drink(second);

        var third = barmen.pour(100);
        me.drink(third);

        assert.equal(true, me.isDrunked());
    });

    test('complex assert - should display employee name and surname', function () {
        let employee = getCurrentEmployee();

        assert.equal(employee.name, 'Dmitry');
        assert.equal(employee.middleName, 'Ivanovich');
        assert.equal(employee.passportNumber, '2409 213456');
        assert.equal(employee.surname, 'Ivanov');
        assert.equal(employee.birthDate, '24-October');
        assert.equal(employee.sex, 'Male');

    });

    function getCurrentEmployee() {
        return {
            'name': 'Dmitry',
            'middleName': 'Ivanovich',
            'passportNumber': '2409 213456',
            'surname': 'Ivanov',
            'birthDate': '24-October',
            'sex': 'Male',
        };
    }

    teardown(function () {
        console.log('teardown');
    });
});