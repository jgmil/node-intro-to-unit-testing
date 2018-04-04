const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function () {

    // test the normal case
    it('should return fizz multiples of 3, buzz for multiples of 5, and fizz-buzz for multiples of 15, otherwise return the number', function () {
        // range of normal inputs, including
        // notable cases like negative answers
        const normalCases = [
            {
                a: 10,
                expected: "buzz"
            },
            {
                a: 300,
                expected: "fizz-buzz"
            },
            {
                a: 99,
                expected: "fizz"
            },
            {
                a: -25,
                expected: "buzz"
            }
        ];
        // for each inputs (a), `fizzBuzzer` should
        // produce the expected value
        normalCases.forEach(function (input) {
            const answer = fizzBuzzer(input.a);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise error if the arg is not a number', function () {
        // range of bad inputs where not both are numbers
        const badInputs = [
            ['a'],
            ['1'],
            [false]
        ];
        // prove that an error is raised for bad inputs
        badInputs.forEach(function (input) {
            expect(function () {
                fizzBuzzer(input[0]);
            }).to.throw(Error);
        });
    });
});
