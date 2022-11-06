class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) return null;
        if (this.first === this.last) {
            this.last = null;
        }
        const value = this.first.value;
        this.first = this.first.next;
        this.size--;
        return value;
    }
}

const stack = new Stack();

console.log(stack.push(2));
console.log(stack.push(1));
console.log(stack.pop());
console.log(stack.pop());
