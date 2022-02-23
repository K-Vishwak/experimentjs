class TestThis {
    a;
    b;
    
    normalFunction() {
        console.log('normal function');
        console.log(this);
    }

    static staticFunction() {
        console.log('Static function');
    }
}

const test = new TestThis();
test.normalFunction();