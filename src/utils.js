function isPalindrome(word) {
    if (word.length === 0) return false;
  
    const normalized = word.toLowerCase();
    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
  }
  
  module.exports = {
    isPalindrome
  };
  