class Calculation {
  static calculate(expression: string): number | undefined {
    const tokens = expression.match(/(\d+\.\d+|\d+|[+\-*/])/g);

    if (!tokens) {
      return undefined; // Invalid expression
    }

    const stack: number[] = [];
    const operators: string[] = [];

    for (const token of tokens) {
      if (this.isNumeric(token)) {
        stack.push(parseFloat(token));
      } else if (this.isOperator(token)) {
        while (
          operators.length &&
          this.precedence(operators[operators.length - 1]) >=
            this.precedence(token)
        ) {
          const operator = operators.pop()!;
          const operand2 = stack.pop()!;
          const operand1 = stack.pop()!;
          stack.push(this.applyOperator(operator, operand1, operand2));
        }
        operators.push(token);
      } else {
        return undefined; // Invalid character in expression
      }
    }

    while (operators.length) {
      const operator = operators.pop()!;
      const operand2 = stack.pop()!;
      const operand1 = stack.pop()!;
      stack.push(this.applyOperator(operator, operand1, operand2));
    }

    if (stack.length === 1) {
      return stack[0];
    } else {
      return undefined; // Invalid expression
    }
  }

  private static isNumeric(token: string): boolean {
    return /^\d+(\.\d+)?$/.test(token);
  }

  private static isOperator(token: string): boolean {
    return /^[+\-*/]$/.test(token);
  }

  private static precedence(operator: string): number {
    if (operator === '+' || operator === '-') return 1;
    if (operator === '*' || operator === '/') return 2;
    return 0;
  }

  private static applyOperator(
    operator: string,
    operand1: number,
    operand2: number
  ): number {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        if (operand2 === 0) {
          throw new Error('Division by zero');
        }
        return operand1 / operand2;
      default:
        throw new Error('Invalid operator');
    }
  }
}

export default Calculation;
