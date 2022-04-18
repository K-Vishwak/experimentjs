function toString(arr) {
    return arr.reduce((prev, current) => `${prev},${current}`);
}

function join(arr, separator = ',') {
    return arr.reduce((prev, current) => `${prev}${separator}${current}`);
}


function pop(arr) {
    let newArr = [...arr];
    newArr.length = arr.length - 1;
    return newArr;
}

function push(arr, ...item) {
    const newArr = [...arr];
    if (item.length >= 1) {
        for (let i = 0; i < item.length; i++) {
            newArr[newArr.length] = item[i];
        }
    }
    return newArr;
}

function shift(arr) {
    [a, ...b] = arr;
    return b;
}

function unshift(arr, ...item) {
    const newArr = [];
    if (item.length >= 1) {
        for (let i = 0; i < item.length; i++) {
            newArr[i] = item[i];
        }
    }
    newArr.push(...arr);
    return newArr;
}

function concat(...item) {
    return item.reduce((p, c) => {
        Array.isArray(c) ? p.push(...c) : p.push(c);
        return p;
    }, []);
}

function splice(arr, start, deleteCount, ...addItem) {
    const result = [];
    if (start > 0) {
        result.push(...arr.slice(0, start));
    }
    result.push(...addItem);
    const len = result.length - addItem.length;
    let count = deleteCount <= 0 ? len : len + deleteCount;
    if (arr[count]) {
        result.push(...arr.slice(count));
    }
    return result;
}

function slice(arr, start, end){
    const newArr = [];
    const last = end ? end : arr.length;
    for (let i=start; i<last; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(join(['angel','drum', 'first'], '-'));