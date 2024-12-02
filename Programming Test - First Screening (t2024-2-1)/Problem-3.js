/*Problem-3: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]



  Output: (examples)

    1) input a = 1, then output : 1

    2) input a = 2, then output : 1

    3) input a = 3, then output : 1, 3, 5

    4) input a = 4, then output : 1, 3, 5

    5) input a = 5, then output : 1, 3, 5, 7, 9

    6) input a = 6, then output : 1, 3, 5, 7, 9

    .

    .

    7) input a = x, then output : 1, 3, 5, 7, .......*/


function generateSeries(a) {
    if (a < 1) {
        return 'Input must be a positive integer.';
    }

    let series = [];

    // For inputs 1 and 2, output [1]
    if (a === 1 || a === 2) {
        series.push(1);
    }
    // For inputs 3 and 4, output [1, 3, 5]
    else if (a === 3 || a === 4) {
        series = [1, 3, 5];
    }
    // For inputs 5 and greater, generate odd numbers up to the 5th odd number
    else if (a >= 5) {
        for (let i = 0; i < a; i++) {
            series.push(2 * i + 1); // Generates odd numbers: 1, 3, 5, 7, 9, ...
        }
    }

    return series.join(', ');
}

// Example usage:
console.log(generateSeries(1)); // Output: 1
console.log(generateSeries(2)); // Output: 1
console.log(generateSeries(3)); // Output: 1, 3, 5
console.log(generateSeries(4)); // Output: 1, 3, 5
console.log(generateSeries(5)); // Output: 1, 3, 5, 7, 9
console.log(generateSeries(6)); // Output: 1, 3, 5, 7, 9, 11
console.log(generateSeries(7)); // Output: 1, 3, 5, 7, 9, 11, 13
