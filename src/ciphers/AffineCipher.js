function AffineCipher(k1, k2) {
    return {
        encrypt: function(text) {
            let result = "";
            for (let i = 0; i < text.length; i++) {
                let c = text.charCodeAt(i);
                if (c >= 65 && c <= 90) { // Uppercase letters
                    result += String.fromCharCode((k1 * (c - 65) + k2) % 26 + 65);
                } else if (c >= 97 && c <= 122) { // Lowercase letters
                    result += String.fromCharCode((k1 * (c - 97) + k2) % 26 + 97);
                } else {
                    result += text.charAt(i); // Non-alphabetic characters remain unchanged
                }
            }
            return result;
        },

        decrypt: function(text) {
            let result = "";
            let k1_inv = modInverse(k1, 26);

            // If there's no valid inverse, return an error message
            if (k1_inv === -1) {
                console.error("No modular inverse exists for k1 with respect to 26.");
                return;
            }

            for (let i = 0; i < text.length; i++) {
                let c = text.charCodeAt(i);
                if (c >= 65 && c <= 90) { // Uppercase letters
                    result += String.fromCharCode((k1_inv * (c - 65 - k2 + 26) % 26) + 65);
                } else if (c >= 97 && c <= 122) { // Lowercase letters
                    result += String.fromCharCode((k1_inv * (c - 97 - k2 + 26) % 26) + 97);
                } else {
                    result += text.charAt(i); // Non-alphabetic characters remain unchanged
                }
            }
            return result;
        }
    };
}

// Helper function to find the modular inverse of k1 modulo m
function modInverse(k1, m) {
    if(gcd(k1,m) != 1) return -1;
    for (let i = 1; i < m; i++) {
        if ((k1 * i) % m === 1) {
            return i;
        }
    }
    return -1; // If no inverse is found, return -1
}

function gcd(a,b){
    return b ? gcd(b, a % b) : a;
}

export default AffineCipher;
