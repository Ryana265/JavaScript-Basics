// 9 Implement a function to perform basic string compression using the counts of repeated characters. For example, the string "aabcccccaaa" would become "a2b1c5a3.“

function compressString(inputString) {
    let compressedString = ""; // To store the compressed version of the string
    let count = 1; // To count occurrences of each character

    // Loop through the input string
    for (let i = 0; i < inputString.length; i++) {
        // If the current character is the same as the next character, increment the count
        if (inputString[i] === inputString[i + 1]) {
            count++;
        } else {
            // Append the current character and its count to the compressed string
            compressedString += inputString[i] + count;
            count = 1; // Reset the count
        }
    }
    return compressedString;
}
const input = "aabcccccaaa";
const compressed = compressString(input);
console.log(compressString(inputString)); // Output: "a2b1c5a3"
