
export function isEmpty(obj: Object): boolean {

    for(let prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

// Initialize active navbar tabs
export function initNavClass (obj: Object, query: string, exceptof: string) : void {
    
    for (var key in obj) {
        var value = obj[key];

        if (typeof obj === 'object') {
            
            if (key == query || 
                query == 'blog' && key == 'news' )  obj[key] = 'active'
            else if (exceptof) obj[key] = 'active'
            else obj[key] = ''

        }    
    }
}