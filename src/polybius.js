// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const alphabet = {
      "a": 11,
      "b": 21,
      "c": 31,
      "d": 41,
      "e": 51,
      "f": 12,
      "g": 22,
      "h": 32,
      "(i/j)": 42,
      "k": 52,
      "l": 13, 
      "m": 23,
      "n": 33,
      "o": 43,
      "p": 53,
      "q": 14,
      "r": 24,
      "s": 34,
      "t": 44,
      "u": 54,
      "v": 15,
      "w": 25,
      "x": 35,
      "y": 45,
      "z": 55,
    }
    
    let result = "";

    if (!input) return false

    //ENCODING SECTION
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        const letter = input[i].toLowerCase();

        if (letter === "i" || letter === "j") {
          result += 42;
        } else if (letter === ' ') {
          result += ' ';
        } else {
          const pairs = Object.entries(alphabet).find(pair => letter === pair[0]);
          result += pairs[1];
        }
      }
    }
    
    //DECODING SECTION
    if (!encode) {
      const checkLength = input.split(/\s/).join('')

      if (checkLength.length % 2 !== 0) return false

        for (let i = 0; i < checkLength.length; i+= 2) {
          const firstIndex = input[i];
          const secondIndex = input[i + 1];
          const combinedIndex = firstIndex + secondIndex;

          if (firstIndex === " ") {
            result += " ";
            i-= 1
            continue;
          } else {
            result += Object.keys(alphabet).find(key => alphabet[key] == combinedIndex)
          }
        }
    }
    return result
  }

  return {
    polybius,
  };
})();


module.exports = polybiusModule.polybius;
