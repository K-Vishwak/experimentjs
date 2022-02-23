const testObj = {
    firstName: 'John',
    lastName: 'Carter',
    name: function name() {
        return this.firstName + " " + this.lastName; // Here this refers to `testObj`
    }
}

const anotherObj = {
   firstName: 'new john',
   lastName: 'new Carter'
}

console.log(testObj.name.bind(anotherObj)());