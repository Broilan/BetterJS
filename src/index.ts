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
import intersect from './array/intersect';
import groupBy from './array/groupBy';

// Import map utility methods
import invert from './map/invert';
import filterMap from './map/filterMap';
import mapValues from './map/mapValues';

// Import math utility methods
import lerp from './math/lerp';
import clamp from './math/clamp';
import isPrime from './math/isPrime';
import sum from './math/sum';

// Import object utility methods
import deepClone from './object/deepClone';
import merge from './object/merge';
import isEmpty from './object/isEmpty';
import get from './object/get';

// Import set utility methods
import union from './set/union';
import difference from './set/difference';
import intersection from './set/intersection';
import isSubset from './set/isSubset';

// Import string utility methods
import toTitleCase from './string/toTitleCase';
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
        intersect,
        groupBy,
    };

    static map = {
        invert,
        filter: filterMap,
        mapValues,
    };

    static math = {
        lerp,
        clamp,
        isPrime,
        sum,
    };

    static object = {
        deepClone,
        merge,
        isEmpty,
        get,
    };

    static set = {
        union,
        difference,
        intersection,
        isSubset,
    };

    static string = {
        toTitleCase,
        reverse,
        truncate,
        isPalindrome,
        countChars,
    };

    static version = '1.0.0';
};
