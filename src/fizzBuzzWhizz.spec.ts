import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should works', () => {
    const result = game(1);
    expect(result).toEqual(1);
  });
  test('should works 2', () => {
    const result = game(2);
    expect(result).toEqual("Whizz");
  });
  test('should works 3', () => {
    const result = game(3);
    expect(result).toEqual("FizzWhizz");
  });
  test('should works 4', () => {
    const result = game(4);
    expect(result).toEqual(4);
  });
  test('should works 5', () => {
    const result = game(5);
    expect(result).toEqual("BuzzWhizz");
  });
  test('should works 6', () => {
    const result = game(6);
    expect(result).toEqual("Fizz");
  });
}); 