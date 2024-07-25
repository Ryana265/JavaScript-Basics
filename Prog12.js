
// 6 Write a function to check if two strings are anagrams of each other. Anagrams have the same characters but in a different order. For example, "listen" and "silent" are anagrams.
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");
  
    return sortedStr1 === sortedStr2;
  }
  // Example usage:
  console.log(areAnagrams("listen", "silent")); // Output: true

  console.log(areAnagrams("hello", "world")); // Output: false
