/* Problem: Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.
Input: An array of integers.
Output: A single integer representing the sum of all even numbers in the input array.
Example:*/

function sumEvenNumbers(arr: number[]): number {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i]
        }
    }
    return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12
console.log(sumEvenNumbers([10, 20, 30, 40])); // Output: 100
