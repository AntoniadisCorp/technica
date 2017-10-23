"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
}
exports.isEmpty = isEmpty;
// Initialize active navbar tabs
function initNavClass(obj, query, exceptof) {
    for (var key in obj) {
        var value = obj[key];
        if (typeof obj === 'object') {
            if (key == query ||
                query == 'blog' && key == 'news')
                obj[key] = 'active';
            else if (exceptof)
                obj[key] = 'active';
            else
                obj[key] = '';
        }
    }
}
exports.initNavClass = initNavClass;
//# sourceMappingURL=public.routine.js.map