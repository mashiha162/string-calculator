import { StringCalculator } from "./StringCalculator";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("returns 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("returns the number if only one number is provided", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("returns the sum of two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("returns the sum of an unknown amount of numbers", () => {
    expect(calculator.add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
  });
});
