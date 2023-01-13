import { isPrime } from './primeNumber';

describe('isPrime()', ()=>{
  describe('GIVEN: A reasonably large non-prime number', ()=>{
    it('THEN: It returns false', ()=>{
      const result = isPrime(1_000);

      expect(result).toBe(false);
    });
  });
  describe('GIVEN: A prime number', ()=>{
    it('THEN: It returns true', ()=>{
      const result = isPrime(7);

      expect(result).toBe(true);
    });
  });
});
