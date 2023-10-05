function firstNonRepeatedChar(str) {
    // Create an object to store character frequencies
    const charCount = {};

    // Iterate through the string to count character frequencies
    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Iterate through the string again to find the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}
