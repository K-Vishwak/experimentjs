function findDigit(number, place) {
    return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

function maxDigits(arr) {
    return Math.max(...arr).toString().length;
}

function radixSort(arr) {
    const high = maxDigits(arr);
    for (let i = 0; i < high; i++) {
        const buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            const digit = findDigit(arr[j], i);
            buckets[digit].push(arr[j]);
        }
        console.log(buckets);
        arr = [].concat(...buckets);
        console.log(arr);
    }
    return arr;
}

console.log(radixSort([123, 4567, 2324, 356, 359]));