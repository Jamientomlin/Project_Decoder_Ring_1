// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution.js");

describe("substitution()", () => {
  it("should return false if the given alphabet isnt 26 characters", () => {
      const actual = substitution("thinkful", "short");
      expect(actual).to.be.false
  });

  it("should correctly translate the given phrase based on the alphabet provided", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'jrufscpw'
    expect(actual).to.eql(expected)
});

it("should return false if there are any duplicate characters in the given alphabet", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false
});

it("should maintain spaces while encoding and decoding", () => {
    const actual = substitution("th ink ful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'jr ufs cpw'
    expect(actual).to.eql(expected)
});
it("should ignore capital letters", () => {
    const actual = substitution("THINKful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'jrufscpw'
    expect(actual).to.eql(expected)
});
});