import { ConsoleWrapper } from '../src/ConsoleWrapper';

describe("Dummy test", () => {
  it("works if true is truthy", () => {
    ConsoleWrapper.init(console);
    console.info('aaaa', 'b1', 'b3');
    console.log('bla bla bla');
    console.error('bla2');
    expect(true).toBeTruthy();
  });
});
