interface Expression {
  interpret(context: Context): number;
}

class NumberExpression implements Expression {
  private number: number;

  constructor(number: number) {
    this.number = number;
  }

  interpret(context: Context): number {
    return this.number;
  }
}

class AddExpression implements Expression {
  private leftExpression: Expression;
  private rightExpression: Expression;

  constructor(leftExpression: Expression, rightExpression: Expression) {
    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
  }

  interpret(context: Context): number {
    return (
      this.leftExpression.interpret(context) +
      this.rightExpression.interpret(context)
    );
  }
}

class Context {
  private expressions: Expression[] = [];

  pushExpression(expression: Expression): void {
    this.expressions.push(expression);
  }

  popExpression(): Expression {
    return this.expressions.pop();
  }

  evaluate(): number {
    const expression = this.popExpression();
    return expression.interpret(this);
  }
}

function clientCode(context: Context) {
  for (const symbol of ["+", "-", "+"]) {
    switch (symbol) {
      case "+":
        context.pushExpression(
          new AddExpression(context.popExpression(), context.popExpression())
        );
        break;
      case "-":
        // Do nothing.
        break;
      default:
        context.pushExpression(new NumberExpression(parseInt(symbol)));
        break;
    }
  }

  console.log(`Result: ${context.evaluate()}`);
}

const context = new Context();
clientCode(context);
