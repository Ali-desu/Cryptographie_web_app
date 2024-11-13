function FrequencyAnalysis(text) {
    let freq = {};
    for (let i = 0; i < text.length; i++) {
      let char = text[i].toLowerCase(); // Convert all characters to lowercase
      if (char.match(/[a-zA-Z]/)) {  // Only consider alphabetic characters
        if (char in freq) {
          freq[char]++;
        } else {
          freq[char] = 1;
        }
      }
    }
    return freq;
  }
  
  export default FrequencyAnalysis;
  