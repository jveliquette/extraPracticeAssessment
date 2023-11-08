/* Problem: Write a function that takes an array of strings and returns the number of times the letter ‘a’ appears in all the strings combined.
Input: An array of strings.
Output: A single integer representing the number of times the letter ‘a’ appears in all the strings combined. */

function countLetterA(arr: string[]): number {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        for (let j = 0; j < word.length; j++) {
            if (word[j] === 'a') {
                count++;
            }
        }
    }
    return count;
}

console.log(countLetterA(['apple', 'banana', 'cherry'])); // Output: 3
console.log(countLetterA(['alpha', 'beta', 'gamma'])); // Output: 2
