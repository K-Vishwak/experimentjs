class Parent {
    static property = 'I am parent class static property';

   static method() {
        return 'I am parent class static method';
    }
}

class Child extends Parent {
}

console.log(Child.property);
console.log(Child.method());
