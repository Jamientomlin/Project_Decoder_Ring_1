const expect = require("chai").expect;
const polybius = require("../src/polybius.js");

describe("polybius()", () => {
  it("should translate 42 to (i/j) when decoding", () => {
      const expected = 'th(i/j)nkful';
      const actual = polybius("4432423352125413", false)
      expect(actual).to.eql(expected);
  });

  it("should translate i and j to 42", () => {
      const expected = '4432423352125413';
      const actual = polybius("thinkful")
      expect(actual).to.eql(expected);
  });

  it("should ignore capital letters", () => {
      const expected = '4432423352125413';
      const actual = polybius("THINKful")
      expect(actual).to.eql(expected);
    });

    it("should maintain spaces when decoding and encoding", () => {
      const expected = '2345 33112351 4234 2124114145';
      const actual = polybius("my name is brady")
      const expected1 = 'my name is brady';
      const actual1 = polybius("2345 33112351 4234 2124114145", false)
      expect(actual).to.eql(expected);
      expect(actual).to.eql(expected);
    });

});