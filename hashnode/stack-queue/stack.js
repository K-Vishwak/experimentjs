class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.next = null;
        this.size = 0;
    }

    push(value) {
        let newNOde = new Node(value);
        if (!this.first) {
            this.first = newNOde;
            this.last = newNOde;
        } else {
            let temp = this.first;
            this.first = newNOde;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        let temp = this.first;
        if (!this.first) return null;
        if (this.first = this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size++;
        return temp.value;
    }
}

let stack = new Stack();
console.log(stack.push('first'));
console.log(stack.push('second'));
console.log(stack.push('third'));
console.log(stack.push('fourth'));

console.log(stack.pop());