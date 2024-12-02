/*Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.

  Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’

  Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string

*/

class Calculator {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    calculate() {
        switch (this.operation) {
            case 'addition':
                return this.add();
            case 'subtraction':
                return this.subtract();
            case 'multiplication':
                return this.multiply();
            case 'division':
                return this.divide();
            default:
                return 'Invalid operation';
        }
    }

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }

    divide() {
        if (this.b === 0) {
            return 'Division by zero is not allowed';
        }
        return this.a / this.b;
    }
}

// Example usage:
const a = 10.5;
const b = 2.5;
const operation = 'addition'; // Change this to 'subtraction', 'multiplication', or 'division'

const calculator = new Calculator(a, b, operation);
const result = calculator.calculate();
console.log(`The result of ${operation} between ${a} and ${b} is: ${result}`);