/*Problem-2: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]



  Output: (examples)

    1) input a = 1, then output : 1

    2) input a = 2, then output : 1, 3

    3) input a = 3, then output : 1, 3, 5

    4) input a = 4, then output : 1, 3, 5, 7

    .

    .

    5) input a = x, then output : 1, 3, 5, 7, .......*/


function generateOddNumbers(a) {
    if (a < 1) {
        return 'Input must be a positive integer.';
    }

    let oddNumbers = [];
    for (let i = 0; i < a; i++) {
        oddNumbers.push(2 * i + 1); // Formula for the i-th odd number
    }

    return oddNumbers.join(', ');
}

// Example usage:
console.log(generateOddNumbers(1)); // Output: 1
console.log(generateOddNumbers(2)); // Output: 1, 3
console.log(generateOddNumbers(3)); // Output: 1, 3, 5
console.log(generateOddNumbers(4)); // Output: 1, 3, 5, 7
console.log(generateOddNumbers(5)); // Output: 1, 3, 5, 7, 9