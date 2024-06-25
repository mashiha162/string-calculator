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

  test("handles new lines between numbers", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test("supports different delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test("throws an exception for negative numbers", () => {
    expect(() => calculator.add("1,-2,3")).toThrow("negatives not allowed: -2");
  });

  test("throws an exception for multiple negative numbers", () => {
    expect(() => calculator.add("-1,-2,3")).toThrow(
      "negatives not allowed: -1, -2"
    );
  });
});
