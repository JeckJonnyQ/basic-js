const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
      'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const currentLetter = message[i];
      if (this.isLetter(currentLetter)) {
        const messageCharCode = this.getCharCode(currentLetter);
        const keyCharCode = this.getCharCode(key[keyIndex]);
        const encryptedCharCode = (messageCharCode + keyCharCode) % 26;
        const encryptedLetter = this.getLetter(encryptedCharCode);
        encryptedMessage += encryptedLetter;

        keyIndex++;
        if (keyIndex === key.length) {
          keyIndex = 0;
        }
      } else {
        encryptedMessage += currentLetter;
      }
    }

    if (this.reverse) {
      return encryptedMessage.split('').join('');
    } else {
      return this.reverseString(encryptedMessage).split('').join('');
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const currentLetter = encryptedMessage[i];
      if (this.isLetter(currentLetter)) {
        const encryptedCharCode = this.getCharCode(currentLetter);
        const keyCharCode = this.getCharCode(key[keyIndex]);
        const decryptedCharCode = (encryptedCharCode - keyCharCode + 26) % 26;
        const decryptedLetter = this.getLetter(decryptedCharCode);
        decryptedMessage += decryptedLetter;

        keyIndex++;
        if (keyIndex === key.length) {
          keyIndex = 0;
        }
      } else {
        decryptedMessage += currentLetter;
      }
    }

    if (this.reverse) {
      return decryptedMessage.split('').join('');
    } else {
      return this.reverseString(decryptedMessage).split('').join('');
    }
  }

  isLetter(letter) {
    return this.alphabet.includes(letter);
  }

  getCharCode(letter) {
    return letter.charCodeAt(0) - 65;
  }

  getLetter(charCode) {
    return this.alphabet[charCode];
  }

  reverseString(string) {
    return string.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
