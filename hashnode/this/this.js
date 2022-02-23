const testObj = {
    firstName: 'John',
    lastName: 'Carter',
    name: function name() {
        return this.firstName + " " + this.lastName; // Here this refers to `testObj`
    }
}

console.log(testObj.name());
