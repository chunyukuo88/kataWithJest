import { isPowerOfTwo } from './isPowerOfTwo';

describe('WHEN: Given a number that is a power of 2', ()=>{
  it('THEN: It returns `true`', ()=>{
    const result = isPowerOfTwo(256);

    expect(result).toEqual(true);
  });
});
describe('WHEN: Given an integer that is NOT a power of 2', ()=>{
  it('THEN: It returns `false`', ()=>{
    const result = isPowerOfTwo(111111111111111111111111111111111111);

    expect(result).toEqual(false);
  });
});
describe('WHEN: Given a decimal', ()=>{
  it('THEN: It returns `false`', ()=>{
    const result = isPowerOfTwo(11.1);

    expect(result).toEqual(false);
  });
});
describe('WHEN: Given a true Scotsman', ()=>{
  it('THEN: It returns `false`', ()=>{
    const result = isPowerOfTwo('Scotsman Steve');

    expect(result).toEqual(false);
  });
});
