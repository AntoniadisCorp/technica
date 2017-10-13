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
//# sourceMappingURL=public.routine.js.map