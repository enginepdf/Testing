const { appleproduct } = require("./eslint_jest");

test('what product you have',(done) => {
    expect(appleproduct('notebook', 'iphone')).toBe('notebook iphone');
    done(); // for asynchronous function done before finishing the test. or use 'return'
});


describe( 'eslint_jest.js',() => {
    it('output', () => {
        expect(appleproduct('notebook', 'iphone')).toBe('notebook iphone');
    });
  });
