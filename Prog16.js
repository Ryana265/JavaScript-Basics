//10. Find Longest Subarray: Create a function that returns the longest subarray within the nested array.
var nestedArray =[
    [5,6,7,-2],
    [-5,-6,-7],
    [8,9,10],
    [3,5,2,1,4],
    [-3,5,2,1,],
    [4,2,6,8],
]

function findLongestSubarray(arr) {
    let maxLength = 0;
    let longestSubarray = [];
  
    for (let i of arr) {
      if (i.length > maxLength) {
        maxLength = i.length;
        longestSubarray = i;
      }
    }
    return longestSubarray;
  }

  console.log(findLongestSubarray(nestedArray)); 
