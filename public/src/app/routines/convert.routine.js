"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Append the 'px' suffix to the input value.
 * @param {number} value
 * @returns {string}
 */
function convertNumberToPx(value) {
    return value + 'px';
}
exports.convertNumberToPx = convertNumberToPx;
/**
 * Remove the 'px' suffix from the input value.
 * @param {string} value
 * @returns {number}
 */
function convertPxToNumber(value) {
    if (!value)
        return 0;
    return Number.parseInt(value.replace('px', ''));
}
exports.convertPxToNumber = convertPxToNumber;
//# sourceMappingURL=convert.routine.js.map