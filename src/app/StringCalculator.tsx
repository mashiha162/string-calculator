export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") return 0;
    const numArray = numbers.split(/[\n,]/).map(Number);
    return numArray.reduce((acc, num) => acc + num, 0);
  }
}
