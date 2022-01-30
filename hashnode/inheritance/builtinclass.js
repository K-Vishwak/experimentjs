class MyArray extends Array {
    find() {
        console.log('This is my array find method');
    }
}

const myArray = new MyArray();
myArray.find();