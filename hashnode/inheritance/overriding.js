class Parent {
    property = 'I am parent property';

    method() {
        return this.property;
    }
}

class Child extends Parent {

    // same parent property name.
    property = 'I am child property';

    // same parent method name.
    method() {
        console.log('I am a child method');
    }
}

const child = new Child();
child.method(); // overrides parent method and logs child details.
console.log(child.property); // overrides parent property and logs child property