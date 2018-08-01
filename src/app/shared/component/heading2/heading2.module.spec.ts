import { Heading2Module } from './heading2.module';

describe('Heading2Module', () => {
  let heading2Module: Heading2Module;

  beforeEach(() => {
    heading2Module = new Heading2Module();
  });

  it('should create an instance', () => {
    expect(heading2Module).toBeTruthy();
  });
});
