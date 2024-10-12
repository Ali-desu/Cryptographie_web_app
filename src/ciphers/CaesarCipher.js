function caesar(shift) {
    return {
        encrypt: function(text) {
            return text.split('').map(function(char) {
                // Check if the character is a letter (ignoring other characters)
                if (char.match(/[a-zA-Z]/)) {
                    // Determine if the character is uppercase or lowercase
                    const base = char === char.toUpperCase() ? 65 : 97;
                    // Shift the character and wrap around using modulo 26
                    return String.fromCharCode(
                        ((char.charCodeAt(0) - base + shift) % 26) + base
                    );
                }
                // Return non-letter characters unchanged
                return char;
            }).join('');
        },
        decrypt: function(text) {
            return text.split('').map(function(char) {
                // Check if the character is a letter (ignoring other characters)
                if (char.match(/[a-zA-Z]/)) {
                    // Determine if the character is uppercase or lowercase
                    const base = char === char.toUpperCase() ? 65 : 97;
                    // Shift the character backwards and wrap around using modulo 26
                    return String.fromCharCode(
                        ((char.charCodeAt(0) - base - shift + 26) % 26) + base
                    );
                }
                // Return non-letter characters unchanged
                return char;
            }).join('');
        }
    }
}

export default caesar;
