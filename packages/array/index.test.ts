import { chunk, compact } from './';
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

describe('compact', () => {
  describe('lodash compatibility test', () => {
    it('falsy & truthy test', () => {
      expect(compact([0, 1, false, 2, true, '', 3])).toEqual(
        _.compact([0, 1, false, 2, true, '', 3])
      );
    });

    it('no value array', () => {
      expect(compact([])).toEqual(_.compact([]))
    })

    it('only one falsy value array', () => {
      expect(compact([''])).toEqual(_.compact(['']));
      expect(compact([false])).toEqual(_.compact([false]));
      expect(compact([0])).toEqual(_.compact([0]));
    });

    it('only one truthy value array', () => {
      expect(compact(['1'])).toEqual(_.compact(['1']));
      expect(compact([true])).toEqual(_.compact([true]));
      expect(compact([1])).toEqual(_.compact([1]));
    });
  })

  describe('expected result test', () => {
    it('falsy & truthy test', () => {
      expect(compact([0, 1, false, 2, true, '', 3])).toEqual([1, 2, true, 3]);
    });

    it('no value array', () => {
      expect(compact([])).toEqual([]);
    });

    it('only one falsy value array', () => {
      expect(compact([''])).toEqual([]);
      expect(compact([false])).toEqual([]);
      expect(compact([0])).toEqual([]);
    });

    it('only one truthy value array', () => {
      expect(compact(['1'])).toEqual(['1']);
      expect(compact([true])).toEqual([true]);
      expect(compact([1])).toEqual([1]);
    });
  });
});
