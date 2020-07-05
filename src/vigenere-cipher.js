const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    let result = '';

    let letterCount = 0;
    for (const character of message) {
      if (this.isLetter(character)) {
        result += this.encryptLetter(character, letterCount, key);
        letterCount++;
      } else {
        result += character;
      }
    }

    if (this.direct) {
      return result;
    }
    else {
      return this.reverseString(result);
    }
  }

  decrypt(message, key) {
    let result = '';

    let letterCount = 0;
    for (const character of message) {
      if (this.isLetter(character)) {
        result += this.decryptLetter(character, letterCount, key);
        letterCount++;
      } else {
        result += character;
      }
    }

    if (this.direct) {
      return result;
    }
    else {
      return this.reverseString(result);
    }
  }

  encryptLetter(letter, letterPosition, key) {
    let letterCode = this.getAlphabetPosition(letter);
    let keyPosition = letterPosition % key.length;
    let keyLetter = key[keyPosition];
    let keyCode = this.getAlphabetPosition(keyLetter);

    let encryptedLetterCode = (letterCode + keyCode) % 26;
    return this.getAlphabetLetter(encryptedLetterCode);
  }

  decryptLetter(letter, letterPosition, key) {
    let letterCode = this.getAlphabetPosition(letter);
    let keyPosition = letterPosition % key.length;
    let keyLetter = key[keyPosition];
    let keyCode = this.getAlphabetPosition(keyLetter);

    let encryptedLetterCode = (letterCode - keyCode + this.getAlphabetLength()) % 26;
    return this.getAlphabetLetter(encryptedLetterCode);
  }

  getAlphabetLength() {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.length;
  }

  getAlphabetLetter(code) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.charAt(code);
  }

  getAlphabetPosition(letter) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.indexOf(letter.toUpperCase());
  }

  isLetter(character) {
    return /^[a-z]$/i.test(character);
  }

  reverseString(str) {
    return str.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
