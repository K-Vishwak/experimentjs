function capitalizeFirst(str) {
    let result = str[0].toUpperCase();
    for(let i =1; i<str.length; i++) {
        result = str[i-1] === ' ' ? result + str[i].toUpperCase(): result + str[i];
    }
    return result;
}

console.log(capitalizeFirst('short story'));