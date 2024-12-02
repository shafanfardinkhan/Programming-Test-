/*Problem-4: Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]

  (examples)

  input: [1,2,8,9,12,46,76,82,15,20,30]

  Output: 

    {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}
*/


function countMultiples(inputArray) {
    // Initialize the result object with keys from 1 to 9 and values set to 0
    const result = {};
    for (let i = 1; i <= 9; i++) {
        result[i] = 0;
    }

    // Iterate through each number in the input array
    for (const number of inputArray) {
        // Check for multiples from 1 to 9
        for (let i = 1; i <= 9; i++) {
            if (number % i === 0) {
                result[i]++; // Increment the count for this multiple
            }
        }
    }

    return result;
}

// Example usage:
const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const output = countMultiples(input);
console.log(output); // Output: {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}