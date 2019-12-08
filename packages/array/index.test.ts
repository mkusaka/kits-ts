import { chunk } from './';
import * as _ from 'lodash';

describe('chunk', () => {
  describe('lodash compatibility test', () => {
    it('one length array equals lodash provided', () => {
      expect(chunk(['a'], 2)).toEqual(_.chunk(['a'], 2));
    });

    it('two length array equals lodash provided', () => {
      expect(chunk(['a', 'b'], 2)).toEqual(_.chunk(['a', 'b'], 2));
    });

    it('three length array equals lodash provided', () => {
      expect(chunk(['a', 'b', 'c'], 2)).toEqual(_.chunk(['a', 'b', 'c'], 2));
    });

    it('chunk with 1 array equals lodash provided', () => {
      expect(chunk(['a', 'b'], 1)).toEqual(_.chunk(['a', 'b'], 1));
    });
  });

  describe('expected result test', () => {
    it('one length array', () => {
      expect(chunk(['a'], 2)).toEqual([['a']]);
    });

    it('two length array', () => {
      expect(chunk(['a', 'b'], 2)).toEqual([['a', 'b']]);
    });

    it('three length array', () => {
      expect(chunk(['a', 'b', 'c'], 2)).toEqual([['a', 'b'], ['c']]);
    });

    it('chunk with 1 array', () => {
      expect(chunk(['a', 'b'], 1)).toEqual([['a'], ['b']]);
    });
  });
});
