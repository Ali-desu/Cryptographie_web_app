import CaesarCipher from './CaesarCipher';

function VigenereCipher(key) {
    // Convert the key to uppercase for consistency
    const uppercaseKey = key.toUpperCase();

    return {
        encrypt: function(text) {
            let result = "";
            let keyIndex = 0;

            for (let i = 0; i < text.length; i++) {
                let char = text[i];
                // Determine if the character is alphabetic
                if (/[a-zA-Z]/.test(char)) {
                    // Get the shift value from the key character
                    let shift = uppercaseKey[keyIndex % uppercaseKey.length].charCodeAt(0) - 65;
                    // Apply the Caesar cipher with the shift value
                    let caesarCipher = CaesarCipher(shift);
                    result += caesarCipher.encrypt(char);
                    // Move to the next key character
                    keyIndex++;
                } else {
                    // Non-alphabetic characters are appended directly
                    result += char;
                }
            }

            return result;
        },

        decrypt: function(text) {
            let result = "";
            let keyIndex = 0;

            for (let i = 0; i < text.length; i++) {
                let char = text[i];
                // Determine if the character is alphabetic
                if (/[a-zA-Z]/.test(char)) {
                    // Get the shift value from the key character
                    let shift = uppercaseKey[keyIndex % uppercaseKey.length].charCodeAt(0) - 65;
                    // Apply the Caesar cipher with the negative shift value for decryption
                    let caesarCipher = CaesarCipher(26 - shift);
                    result += caesarCipher.decrypt(char);
                    // Move to the next key character
                    keyIndex++;
                } else {
                    // Non-alphabetic characters are appended directly
                    result += char;
                }
            }

            return result;
        }
    };
}

export default VigenereCipher;
