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
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  toUpperCase(text, key) {
    return [text.toUpperCase(), key.toUpperCase()];
  }

  getCharIdx(textChar, keyChar) {
    const textCharIdx = this.alphabet.indexOf(textChar);
    const keyCharIdx = this.alphabet.indexOf(keyChar);

    return [textCharIdx, keyCharIdx];
  }

  getEncryptedChar(textChar, keyChar) {
    const [textCharIdx, keyCharIdx] = this.getCharIdx(textChar, keyChar);

    return (textCharIdx + keyCharIdx) % this.alphabet.length;
  }

  getDecryptedChar(textChar, keyChar) {
    const [textCharIdx, keyCharIdx] = this.getCharIdx(textChar, keyChar);

    return (textCharIdx - keyCharIdx + this.alphabet.length) % this.alphabet.length;
  }

  ciphering(method, text, key) {
    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      if (this.alphabet.includes(text[i])) {
        const decryptedChar =
          method === 'encrypt'
            ? this.getEncryptedChar(text[i], key[keyIndex % key.length])
            : this.getDecryptedChar(text[i], key[keyIndex % key.length]);

        result += this.alphabet[decryptedChar];

        keyIndex++;
      } else {
        result += text[i];
      }
    }

    return result;
  }

  getResult(result) {
    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(text, key) {
    if (!text || !key) throw Error('Incorrect arguments!');

    const [textUpperCase, keyUpperCase] = this.toUpperCase(text, key);

    let result = this.ciphering('encrypt', textUpperCase, keyUpperCase);

    return this.getResult(result);
  }

  decrypt(text, key) {
    if (!text || !key) throw Error('Incorrect arguments!');

    const [textUpperCase, keyUpperCase] = this.toUpperCase(text, key);

    let result = this.ciphering('decrypt', textUpperCase, keyUpperCase);

    return this.getResult(result);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
