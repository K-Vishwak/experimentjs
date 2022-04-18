function areThereDuplicates(...list) {
    let listObj = {};
    for (let i of list) {
        if (i in listObj) return true;
        else listObj[i] -=1;
    }
    return false;
}

console.log(areThereDuplicates(1,2,4,4));