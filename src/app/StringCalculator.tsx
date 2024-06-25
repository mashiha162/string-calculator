export class StringCalculator {
  add(numbers: string): number {
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      const delimiter = numbers.substring(2, delimiterEnd);
      numbers = numbers.substring(delimiterEnd + 1);
      const numbersArray = numbers
        .split(new RegExp(`[${delimiter}\n]`))
        .map(Number);
      this.checkForNegatives(numbersArray);
      return numbersArray.reduce((acc, num) => acc + num, 0);
    }

    if (numbers === "") return 0;
    const numbersArray = numbers.split(/[\n,]/).map(Number);
    this.checkForNegatives(numbersArray);
    return numbersArray.reduce((acc, num) => acc + num, 0);
  }

  private checkForNegatives(numbers: number[]): void {
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length) {
      throw new Error(`negatives not allowed: ${negativeNumbers.join(", ")}`);
    }
  }
}
