// Your tests here
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  it('should return true if the word is racecar as it is a palindrome', () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it('should return false for a word like car which is not a palindrome', () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it('should return true for palindrome with mixed case like "RaceCar"', () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it('should return false for an empty string', () => {
    expect(isPalindrome("")).toBe(false);
  });
});
