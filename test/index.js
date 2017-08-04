let {
    format
} = require('..');
let assert = require('assert');

let testData = {
    'f()': 'f()',

    'f(1)': `f(
    1
)`,

    'f(true, 2, null)': `f(
    true,
    2,
    null
)`,

    'f(g(3, 5), "4")': `f(
    g(
        3,
        5
    ),
    "4"
)`,

    'f(today(), task("a", use))': `f(
    today(),
    task(
        "a",
        use
    )
)`
};

let testData2 = {
    'indent2(1)': `indent2(
  1
)`,

    'f1(f2(f3(7)), 4)':
`f1(
  f2(
    f3(
      7
    )
  ),
  4
)`
};

let runTestData = (testData, opts) => {
    for (let code in testData) {
        let target = testData[code];
        it(code, () => {
            assert.equal(format(code, opts), target);
            // fixed point
            assert.equal(format(target, opts), target);
        });
    }

};

describe('index', () => {
    runTestData(testData);
    runTestData(testData2, {
        indent: 2
    });
});
