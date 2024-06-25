export class StringCalculator {
  private callCount = 0;

  add(numbers: string): number {
    this.callCount++;
    if (this.hasCustomDelimiter(numbers)) {
      const { delimiters, numbersWithoutDelimiter } =
        this.extractDelimiters(numbers);
      return this.calculateSum(numbersWithoutDelimiter, delimiters);
    }
    return this.calculateSum(numbers);
  }

  getCalledCount(): number {
    return this.callCount;
  }

  private hasCustomDelimiter(numbers: string): boolean {
    return numbers.startsWith("//");
  }

  private extractDelimiters(numbers: string): {
    delimiters: string[];
    numbersWithoutDelimiter: string;
  } {
    const delimiterEnd = numbers.indexOf("\n");
    const delimiters = numbers
      .substring(2, delimiterEnd)
      .split("][")
      .map((d) => d.replace(/[\[\]]/g, ""));
    const numbersWithoutDelimiter = numbers.substring(delimiterEnd + 1);
    return { delimiters, numbersWithoutDelimiter };
  }

  private calculateSum(
    numbers: string,
    delimiters: string[] = [",", "\n"]
  ): number {
    const regex = new RegExp(
      `(${delimiters.map(this.escRegExp).join("|")})|\n`
    );
    const numbersArray = numbers
      .split(regex)
      .filter(Boolean)
      .map(Number)
      .filter((num) => num <= 1000);
    this.checkForNegatives(numbersArray);
    return numbersArray.reduce((acc, num) => acc + num, 0);
  }

  private checkForNegatives(numbers: number[]): void {
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length) {
      throw new Error(`negatives not allowed: ${negativeNumbers.join(", ")}`);
    }
  }

  private escRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}
