// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!input || !alphabet || alphabet.length != 26) return false;
    let result = [];
    const orderedAlphabet = "abcdefghijklmnopqrstuvwxyz";
    //Checks if the new alphabet has all unique characters
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false
        }
      }
    }

    input = input.toLowerCase();
    
    //ENCODING SECTION
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        result.push(alphabet[orderedAlphabet.indexOf(input[i])]);
        if (input[i] === ' ') {
          result.push(' ')
        }
      }
    } else { //DECODING SECTION
      for (let i = 0; i < input.length; i++) {
        result.push(orderedAlphabet[alphabet.indexOf(input[i])]);
        if (input[i] === ' ') {
          result.push(' ')
        }
      }
    }
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;