// 7 Write a function to count the number of vowels and consonants in a given string.



    function countVowelsAndConsonants(str) {
    let vowelsCount = 0; // Start with 0 vowels
    let consonantsCount = 0; // Start with 0 consonants
    const vowels = "aeiouAEIOU"; // Our list of vowels
    
    // Look at each letter in the sentence
    for (let i = 0; i < str.length; i++) {
        let char = str[i]; // The current letter we're looking at
        if (vowels.indexOf(char) !== -1) { // Check if it's a vowel
            vowelsCount++; // Add one to our vowel count
        } else if (char.toLowerCase() != char.toUpperCase()) { // Check if it's a consonant  For example, 'a' becomes 'A', but '1' or '!' stays the same.
            consonantsCount++; // Add one to our consonant count
        }
    }
    // Tell us how many vowels and consonants we found
    return { vowels: vowelsCount, consonants: consonantsCount };
}

const inputString = "Hello World!"; // Our sentence to count letters in
const result = countVowelsAndConsonants(inputString); 
console.log(`Vowels: ${result.vowels}, Consonants: ${result.consonants}`); // Output: Vowels: 3, Consonants: 7
