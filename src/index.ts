// Exports
export * as array from './array';
export * as map from './map';
export * as math from './math';
export * as object from './object';
export * as set from './set';
export * as string from './string';


// Import array utility methods
import chunk from './array/chunk';
import flatten from './array/flatten';
import unique from './array/unique';
import intersection from './array/intersection';
import groupBy from './array/groupBy';
import difference from './array/difference';
import partition from './array/partition';
import shuffle from './array/shuffle';
import zip from './array/zip';
import unzip from './array/unzip';

// Import map utility methods
import invert from './map/invert';
import filterMap from './map/filterMap';
import mapValues from './map/mapValues';
import mergeMaps from './map/mergeMaps';
import mapKeys from './map/mapKeys';

// Import math utility methods
import lerp from './math/lerp';
import clamp from './math/clamp';
import isPrime from './math/isPrime';
import factorial from './math/factorial';
import gcd from './math/gcd';
import lcm from './math/lcm';
import mean from './math/mean';


// Import object utility methods
import deepClone from './object/deepClone';
import isEmpty from './object/isEmpty';
import get from './object/get';
import omit from './object/omit';
import pick from './object/pick';

// Import set utility methods
import union from './set/union';
import isSubset from './set/isSubset';
import filterSubset from './set/filterSubset';

// Import string utility methods
import reverse from './string/reverse';
import truncate from './string/truncate';
import isPalindrome from './string/isPalindrome';
import countChars from './string/countChars';

// Export the BetterJS class
export class BetterJS {
    static array = {
        chunk,
        flatten,
        unique,
        intersection,
        groupBy,
        difference,
        partition,
        shuffle,
        zip,
        unzip
    };

    static map = {
        invert,
        filterMap,
        mapValues,
        mergeMaps,
        mapKeys,
    };

    static math = {
        lerp,
        clamp,
        isPrime,
        factorial,
        gcd,
        lcm,
        mean,
    };

    static object = {
        deepClone,
        isEmpty,
        get,
        omit,
        pick,
    };

    static set = {
        union,
        difference,
        intersection,
        isSubset,
        filterSubset
    };

    static string = {
        reverse,
        truncate,
        isPalindrome,
        countChars,
    };

    static version = '1.0.0';
};
