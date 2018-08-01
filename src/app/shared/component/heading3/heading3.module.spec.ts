import { Heading3Module } from './heading3.module';

describe('Heading3Module', () => {
  let heading3Module: Heading3Module;

  beforeEach(() => {
    heading3Module = new Heading3Module();
  });

  it('should create an instance', () => {
    expect(heading3Module).toBeTruthy();
  });
});
