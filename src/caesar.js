// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {

    //returns false if any of these statements are false
    if (!shift || shift < -25 || shift > 25 || shift === 0 || !input) return false

    //gives each letter a index value in a array
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    let result = "";

    //ENCODING SECTION
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        const letter = input[i].toLowerCase();
        const alphabetIndex = alphabet.indexOf(letter);

        //skips over special characters and spaces
        if (alphabetIndex === -1) {
          result += letter;
          continue;
        }

        //if the shift is a positive number it will increase the index by the shift number and if it goes over it will be the remainder of 26
        if (shift > 0) {
          const positiveShiftIndex = (alphabetIndex + shift) % 26;
          result += alphabet[positiveShiftIndex]
        } else if (shift < 0) {
          const negativeShiftIndex = (alphabetIndex + shift);

          //If the shiftIndex is negative it will increase it by 26 to make it a positive shift value
          if (negativeShiftIndex < 0) {
            result += alphabet[negativeShiftIndex + 26]
          } else {
            result += alphabet[negativeShiftIndex]
          }
          
        }
      }
    }
    //DECODING SECTION
    if (!encode) {
      for (let i = 0; i < input.length; i++) {
        const letter = input[i].toLowerCase();
        const alphabetIndex = alphabet.indexOf(letter);

        if (alphabetIndex === -1) {
          result += letter;
          continue;
        }

        if (shift > 0) {
          const positiveShiftIndex = (alphabetIndex - shift);
          if (positiveShiftIndex < 0) {
            result += alphabet[positiveShiftIndex + 26]
          } else {
            result += alphabet[positiveShiftIndex]
          }
          
        } else if (shift < 0) {
          const negativeShiftIndex = (alphabetIndex - shift) % 26;
          result += alphabet[negativeShiftIndex]
        }
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;