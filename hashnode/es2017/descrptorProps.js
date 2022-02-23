const testObj = {
    property: 'test'
}

console.log(Object.getOwnPropertyDescriptor(testObj, 'property'));

const getObj = {
    item: 'first',
    get test() {
        return 'test';
    },
    set _test(item) {
        this.item = item;
    }
}

console.log(Object.getOwnPropertyDescriptor(getObj, 'test'));
console.log(Object.getOwnPropertyDescriptor(getObj, '_test'));