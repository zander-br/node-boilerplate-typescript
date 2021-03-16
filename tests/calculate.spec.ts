import { sum } from '@/calculate';

describe('Calculate demo', () => {
  it('should return 2 when call sum with 1 and 1', () => {
    const result = sum(1, 1);
    expect(result).toBe(2);
  });
});
