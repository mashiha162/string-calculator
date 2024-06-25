export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") return 0;
    const numArray = numbers.split(",").map(Number);
    return numArray.reduce((acc, num) => acc + num, 0);
  }
}
