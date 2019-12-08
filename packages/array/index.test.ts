import {
  chunk,
  compact,
  concat,
  difference,
  drop,
  dropRight,
  fill,
  find,
  findIndex,
  first,
  flatten,
  flattenDeep
} from "./";
import * as _ from "lodash";

describe("chunk", () => {
  describe("lodash compatibility test", () => {
    it("one length array equals lodash provided", () => {
      expect(chunk(["a"], 2)).toEqual(_.chunk(["a"], 2));
    });

    it("two length array equals lodash provided", () => {
      expect(chunk(["a", "b"], 2)).toEqual(_.chunk(["a", "b"], 2));
    });

    it("three length array equals lodash provided", () => {
      expect(chunk(["a", "b", "c"], 2)).toEqual(_.chunk(["a", "b", "c"], 2));
    });

    it("chunk with 1 array equals lodash provided", () => {
      expect(chunk(["a", "b"], 1)).toEqual(_.chunk(["a", "b"], 1));
    });
  });

  describe("expected result test", () => {
    it("one length array", () => {
      expect(chunk(["a"], 2)).toEqual([["a"]]);
    });

    it("two length array", () => {
      expect(chunk(["a", "b"], 2)).toEqual([["a", "b"]]);
    });

    it("three length array", () => {
      expect(chunk(["a", "b", "c"], 2)).toEqual([["a", "b"], ["c"]]);
    });

    it("chunk with 1 array", () => {
      expect(chunk(["a", "b"], 1)).toEqual([["a"], ["b"]]);
    });
  });
});

describe("compact", () => {
  describe("lodash compatibility test", () => {
    it("falsy & truthy test", () => {
      expect(compact([0, 1, false, 2, true, "", 3])).toEqual(
        _.compact([0, 1, false, 2, true, "", 3])
      );
    });

    it("no value array", () => {
      expect(compact([])).toEqual(_.compact([]));
    });

    it("only one falsy value array", () => {
      expect(compact([""])).toEqual(_.compact([""]));
      expect(compact([false])).toEqual(_.compact([false]));
      expect(compact([0])).toEqual(_.compact([0]));
    });

    it("only one truthy value array", () => {
      expect(compact(["1"])).toEqual(_.compact(["1"]));
      expect(compact([true])).toEqual(_.compact([true]));
      expect(compact([1])).toEqual(_.compact([1]));
    });
  });

  describe("expected result test", () => {
    it("falsy & truthy test", () => {
      expect(compact([0, 1, false, 2, true, "", 3])).toEqual([1, 2, true, 3]);
    });

    it("no value array", () => {
      expect(compact([])).toEqual([]);
    });

    it("only one falsy value array", () => {
      expect(compact([""])).toEqual([]);
      expect(compact([false])).toEqual([]);
      expect(compact([0])).toEqual([]);
    });

    it("only one truthy value array", () => {
      expect(compact(["1"])).toEqual(["1"]);
      expect(compact([true])).toEqual([true]);
      expect(compact([1])).toEqual([1]);
    });
  });
});

describe("concat", () => {
  describe("lodash compatibility test", () => {
    it("one element array given", () => {
      expect(concat([1])).toEqual(_.concat([1]));
    });

    it("concat no value array and element", () => {
      expect(concat([], 1)).toEqual(_.concat([], 1));
    });

    it("concat array and array", () => {
      expect(concat([0], [2])).toEqual(_.concat([0], [2]));
    });
  });

  describe("expected result test", () => {
    it("one element array given", () => {
      expect(concat([1])).toEqual([1]);
    });

    it("concat no value array and element", () => {
      expect(concat([], 1)).toEqual([1]);
    });

    it("concat array and array", () => {
      expect(concat([0], [2])).toEqual([0, 2]);
    });
  });
});

describe("difference", () => {
  describe("lodash compatibility test", () => {
    it("same array", () => {
      expect(difference([1], [1])).toEqual(_.difference([1], [1]));
    });

    it("blank and non blank array", () => {
      expect(difference([], [1])).toEqual(_.difference([], [1]));
    });

    it("exactly different array", () => {
      expect(difference([0], [2])).toEqual(_.difference([0], [2]));
    });

    it("has some shared element array", () => {
      expect(difference([0, 1], [1, 2])).toEqual(_.difference([0, 1], [1, 2]));
    });
  });

  describe("expected result test", () => {
    it("same array", () => {
      expect(difference([1], [1])).toEqual([]);
    });

    it("blank and non blank array", () => {
      expect(difference([], [1])).toEqual([]);
    });

    it("exactly different array", () => {
      expect(difference([0], [2])).toEqual([0]);
    });

    it("has some shared element array", () => {
      expect(difference([0, 1], [1, 2])).toEqual([0]);
    });

    it("extended type check", () => {
      const zero = 0 as const;
      const one = 1 as const;
      expect(difference([zero, one], [1, 2])).toEqual([0]);
    });
  });
});

describe("drop", () => {
  describe("lodash compatibility test", () => {
    it("default drop", () => {
      expect(drop([1, 2])).toEqual(_.drop([1, 2]));
    });

    it("drop count specified", () => {
      expect(drop([1, 2, 3], 2)).toEqual(_.drop([1, 2, 3], 2));
    });

    it("empty array", () => {
      expect(drop([])).toEqual(_.drop([]));
    });
  });

  describe("expected result test", () => {
    it("default drop", () => {
      expect(drop([1, 2])).toEqual([2]);
    });

    it("drop count specified", () => {
      expect(drop([1, 2, 3], 2)).toEqual([3]);
    });

    it("empty array", () => {
      expect(drop([])).toEqual([]);
    });
  });
});

describe("dropRight", () => {
  describe("lodash compatibility test", () => {
    it("default drop", () => {
      expect(dropRight([1, 2])).toEqual(_.dropRight([1, 2]));
    });

    it("drop count specified", () => {
      expect(dropRight([1, 2, 3], 2)).toEqual(_.dropRight([1, 2, 3], 2));
    });

    it("empty array", () => {
      expect(dropRight([])).toEqual(_.dropRight([]));
    });
  });

  describe("expected result test", () => {
    it("default drop", () => {
      expect(dropRight([1, 2])).toEqual([1]);
    });

    it("drop count specified", () => {
      expect(dropRight([1, 2, 3], 2)).toEqual([1]);
    });

    it("empty array", () => {
      expect(dropRight([])).toEqual([]);
    });
  });
});

describe("fill", () => {
  describe("lodash compatibility test", () => {
    it("already filled array", () => {
      expect(fill([1, 2], 3)).toEqual(_.fill([1, 2], 3));
    });

    it("Array constructor", () => {
      expect(fill(Array(3), 2)).toEqual(_.fill(Array(3), 2));
    });

    it("partial fill", () => {
      expect(fill([1, 2, 3, 4], 5, 1, 3)).toEqual(
        _.fill([1, 2, 3, 4], 5, 1, 3)
      );
    });
  });

  describe("expected result test", () => {
    it("already filled array", () => {
      expect(fill([1, 2], 3)).toEqual([3, 3]);
    });

    it("Array constructor", () => {
      expect(fill(Array(3), 2)).toEqual([2, 2, 2]);
    });

    it("partial fill", () => {
      expect(fill([1, 2, 3, 4], 5, 1, 3)).toEqual([1, 5, 5, 4]);
    });
  });
});

describe("find", () => {
  describe("lodash compatibility test", () => {
    it("match exist pattern", () => {
      expect(
        find([1, 2, 3, 4], (e: number) => {
          return e > 3;
        })
      ).toEqual(
        _.find([1, 2, 3, 4], (e: number) => {
          return e > 3;
        })
      );
    });

    it("no match pattern", () => {
      expect(
        find([1, 2], (e: number) => {
          return e > 3;
        })
      ).toEqual(
        _.find([1, 2], (e: number) => {
          return e > 3;
        })
      );
    });

    it("empty array", () => {
      expect(
        find([], (e: number) => {
          return e > 3;
        })
      ).toEqual(
        _.find([], (e: number) => {
          return e > 3;
        })
      );
    });
  });

  describe("expected result test", () => {
    it("match exist pattern", () => {
      expect(
        find([1, 2, 3, 4], (e: number) => {
          return e > 3;
        })
      ).toEqual(4);
    });

    it("no match pattern", () => {
      expect(
        find([1, 2], (e: number) => {
          return e > 3;
        })
      ).toEqual(undefined);
    });

    it("empty array", () => {
      expect(
        find([], (e: number) => {
          return e > 3;
        })
      ).toEqual(undefined);
    });
  });
});

describe("findIndex", () => {
  describe("lodash compatibility test", () => {
    it("match exist pattern", () => {
      expect(
        findIndex([1, 2, 3, 4], (e: number) => {
          return e > 3;
        })
      ).toEqual(
        _.findIndex([1, 2, 3, 4], (e: number) => {
          return e > 3;
        })
      );
    });

    it("no match pattern", () => {
      expect(
        findIndex([1, 2], (e: number) => {
          return e > 3;
        })
      ).toEqual(
        _.findIndex([1, 2], (e: number) => {
          return e > 3;
        })
      );
    });

    it("empty array", () => {
      expect(
        findIndex([], (e: number) => {
          return e > 3;
        })
      ).toEqual(
        _.findIndex([], (e: number) => {
          return e > 3;
        })
      );
    });
  });

  describe("expected result test", () => {
    it("match exist pattern", () => {
      expect(
        findIndex([1, 2, 3, 4], (e: number) => {
          return e > 3;
        })
      ).toEqual(3);
    });

    it("no match pattern", () => {
      expect(
        findIndex([1, 2], (e: number) => {
          return e > 3;
        })
      ).toEqual(-1);
    });

    it("empty array", () => {
      expect(
        findIndex([], (e: number) => {
          return e > 3;
        })
      ).toEqual(-1);
    });
  });
});

describe("first", () => {
  describe("lodash compatibility test", () => {
    it("default", () => {
      expect(first([1, 2])).toEqual(_.first([1, 2]));
    });

    it("no element pattern", () => {
      expect(first([])).toEqual(_.first([]));
    });
  });

  describe("expected result test", () => {
    it("default", () => {
      expect(first([1, 2])).toEqual(1);
    });

    it("no element pattern", () => {
      expect(first([])).toEqual(undefined);
    });
  });
});

describe("flatten", () => {
  describe("lodash compatibility test", () => {
    it("1 depth", () => {
      expect(flatten([1, 2])).toEqual(_.flatten([1, 2]));
    });

    it("contains 2 depth", () => {
      expect(flatten([1, [2]])).toEqual(_.flatten([1, [2]]));
    });

    it("contains 3 depth", () => {
      expect(flatten([1, [2], [3, [4]]])).toEqual(
        _.flatten([1, [2], [3, [4]]])
      );
    });

    it("contains 4 depth", () => {
      expect(flatten([1, [2], [3, [4, [5]]]])).toEqual(
        _.flatten([1, [2], [3, [4, [5]]]])
      );
    });

    it("empty array", () => {
      expect(flatten([])).toEqual(_.flatten([]));
    });
  });

  describe("expected result test", () => {
    it("1 depth", () => {
      expect(flatten([1, 2])).toEqual([1, 2]);
    });

    it("contains 2 depth", () => {
      expect(flatten([1, [2]])).toEqual([1, 2]);
    });

    it("contains 3 depth", () => {
      expect(flatten([1, [2], [3, [4]]])).toEqual([1, 2, 3, [4]]);
    });

    it("contains 4 depth", () => {
      expect(flatten([1, [2], [3, [4, [5]]]])).toEqual([1, 2, 3, [4, [5]]]);
    });

    it("empty array", () => {
      expect(flatten([])).toEqual([]);
    });
  });
});

describe("flattenDeep", () => {
  describe("lodash compatibility test", () => {
    it("1 depth", () => {
      expect(flattenDeep([1, 2])).toEqual(_.flattenDeep([1, 2]));
    });

    it("contains 2 depth", () => {
      expect(flattenDeep([1, [2]])).toEqual(_.flattenDeep([1, [2]]));
    });

    it("contains 3 depth", () => {
      expect(flattenDeep([1, [2], [3, [4]]])).toEqual(
        _.flattenDeep([1, [2], [3, [4]]])
      );
    });

    it("contains 4 depth", () => {
      expect(flattenDeep([1, [2], [3, [4, [5]]]])).toEqual(
        _.flattenDeep([1, [2], [3, [4, [5]]]])
      );
    });

    it("empty array", () => {
      expect(flattenDeep([])).toEqual(_.flattenDeep([]));
    });
  });

  describe("expected result test", () => {
    it("1 depth", () => {
      expect(flattenDeep([1, 2])).toEqual([1, 2]);
    });

    it("contains 2 depth", () => {
      expect(flattenDeep([1, [2]])).toEqual([1, 2]);
    });

    it("contains 3 depth", () => {
      expect(flattenDeep([1, [2], [3, [4]]])).toEqual([1, 2, 3, 4]);
    });

    it("contains 4 depth", () => {
      expect(flattenDeep([1, [2], [3, [4, [5]]]])).toEqual([1, 2, 3, 4, 5]);
    });

    it("empty array", () => {
      expect(flattenDeep([])).toEqual([]);
    });
  });
});
