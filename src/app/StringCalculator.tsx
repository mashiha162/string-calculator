export class StringCalculator {
  private callCount = 0;

  add(numbers: string): number {
    this.callCount++;
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      const delimiters = numbers
        .substring(2, delimiterEnd)
        .split("][")
        .map((d) => d.replace(/[\[\]]/g, ""));
      numbers = numbers.substring(delimiterEnd + 1);
      const regex = new RegExp(`[${delimiters.join("|")}|\n]`);
      const numbersArray = numbers
        .split(regex)
        .map(Number)
        .filter((num) => num <= 1000);
      this.checkForNegatives(numbersArray);
      return numbersArray.reduce((acc, num) => acc + num, 0);
    }
    if (numbers === "") return 0;
    const numbersArray = numbers
      .split(/[\n,]/)
      .map(Number)
      .filter((num) => num <= 1000);
    this.checkForNegatives(numbersArray);
    return numbersArray.reduce((acc, num) => acc + num, 0);
  }

  getCalledCount(): number {
    return this.callCount;
  }

  private checkForNegatives(numbers: number[]): void {
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length) {
      throw new Error(`negatives not allowed: ${negativeNumbers.join(", ")}`);
    }
  }
}
