class Parent {
    parentProperty;

    constructor(parentProperty) {
        this.parentProperty = parentProperty;
    }

    parentMethod() {
        return 'I am parent class method';
    }
}

class Child extends Parent {
    constructor() {
        super('parent property'); // setting parent property from child.
    }
    childMethod() {
        console.log(this.parentMethod()); // accessing parent methods.
        console.log(this.parentProperty); // accessing parent property.
    }
}

const child = new Child();
child.childMethod();
