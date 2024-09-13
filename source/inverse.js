'use strict';

const inverse = (array, shift = 0) => {
    // incorrect arguments. Should be array and shift is integer
    if (!Array.isArray(array) || !Number.isInteger(shift)) {
        throw new TypeError('Incorrect types of argument!');
    }
    if (shift >= 0) {  // The shift is positive or zero so the second part of aray should be inverted 
        return [...array.slice(0, shift), ...array.slice(shift).reverse()];
    } else {  // Other case. Inverting first part of array
        return [...array.slice(0, shift).reverse(), ...array.slice(shift)];
    }
};
