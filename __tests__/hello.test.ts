import { hello } from '../src';

console.log = jest.fn();

describe('hello(who: string): string', () => {

  it('throws when who unspecified', () => {
    expect(() => hello(undefined))
      .toThrow('who (string) is required');
  });

  it('succeeds when who specified', () => {
    const tester = 'tester';
    hello(tester);
    expect(console.log).toHaveBeenCalledWith(`hello ${tester}`);
  });


});
