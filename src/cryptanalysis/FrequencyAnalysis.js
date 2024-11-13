function FrequencyAnalysis(text) {
    let freq = new Map();

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (freq.has(char)) {
            freq.set(char, freq.get(char) + 1);
        } else {
            freq.set(char, 1);
        }
    }

    return freq;
};

export default FrequencyAnalysis;