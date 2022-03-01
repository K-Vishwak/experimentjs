const obj = {
    first: {
        first: '1',
        second: {
            second: true,
            third: {
                third: 'third',
                fourth: {
                    fourth: 4
                }
            }
        }
    }
}

const simpleObj = {};
function destructure(obj) {
    for (let key in obj) {
        const value = obj[key];
        const type = typeof value;
        if (['string', 'boolean'].includes(type) || (type === 'number' && !isNaN(value))) {
            simpleObj[key] = value;
        } else if (type === 'object') {
            Object.assign(simpleObj, destructure(value));
        }
    }
    return simpleObj;
}

console.log(destructure(obj));