const { appleproduct } = require("./eslint_jest");

test('what product you have',() => {
    expect(appleproduct('notebook', 'iphone')).toBe('notebook iphone');
});


describe( 'eslint_jest.js',() => {
    it('output', () => {
        expect(appleproduct('notebook', 'iphone')).toBe('notebook iphone');
    });
  });
