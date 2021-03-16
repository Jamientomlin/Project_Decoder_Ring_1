// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar.js");

describe("caesar()", () => {
  it("should encode a message with the shift value", () => {
        const expected = 'bpqa qa i amkzmb umaaiom!';
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.eql(expected);
  })

  it("should return false if the shift value is not present, equal to 0, less than -25, or greater than 25", () => {
    const expected = false;
    const actual = caesar("abcdef", 0);
    const actual2 = caesar("abcdef");
    const actual3 = caesar("abcdef", -50);
    expect(actual).to.be.false;
    expect(actual2).to.be.false;
    expect(actual3).to.be.false;
  });

  it("should leave spaces alone", () => {
    const expected = 'oczmz ncjpgy wz ij ydaazmzixz di nkvxzn';
    const actual = caesar("There should be no difference in spaces", -5);
    expect(actual).to.eql(expected);
});
    it("should decode a message with the shift value", () => {
    const expected = 'this is a secret message!';
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.eql(expected);
});
it("should ignore capital letters and other special characters", () => {
  const expected = 'this is a secret message!!';
  const actual = caesar("BPQA qa I amkzmb umaaiom!!", 8, false);
  expect(actual).to.eql(expected);
});

it("should handle shifts that go past the end of the alphabet.", () => {
  const expected = 'cbc';
  const actual = caesar("zyz", 3);

  const expected1 = 'xyz';
  const actual1 = caesar("abc", -3);
  expect(actual).to.eql(expected);
  expect(actual1).to.eql(expected1);
});
});