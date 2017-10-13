
export function isEmpty(obj: Object): boolean {
    
    for(let  prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
}