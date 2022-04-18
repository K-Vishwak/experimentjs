function matrix(n) {
    let arr = Array.from({
        length: n
    }, () => []);

    // which keep on increasing.
    let count = 1;

    // which decides the inner array to push items.
    for (let m = 0; m < n; m++) {

        // which checks length of array to match to given input.
        // Also, push items until it reaches length.
        while (arr[m].length < n) {
            arr[m].push(count);
            count++; // This will keep on increasing until end.
        }
    }
    console.log(JSON.stringify(arr));
}

matrix(3);
