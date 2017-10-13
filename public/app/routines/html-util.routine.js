"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calculate the top left position of the targetElement
 * @param {Document} document
 * @param {HTMLElement} targetElement
 * @returns {{top: number, left: number}}
 */
function extractElementPosition(document, targetElement) {
    var body = document.body;
    var docEl = document.documentElement;
    var windowPageYOffset = document.defaultView && document.defaultView.pageYOffset || undefined;
    var windowPageXOffset = document.defaultView && document.defaultView.pageXOffset || undefined;
    var scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
    if (!targetElement) {
        // No element found, so return the current position to not cause any change in scroll position
        return { top: scrollTop, left: scrollLeft };
    }
    var box = targetElement.getBoundingClientRect();
    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return { top: Math.round(top), left: Math.round(left) };
}
exports.extractElementPosition = extractElementPosition;
//# sourceMappingURL=html-util.routine.js.map