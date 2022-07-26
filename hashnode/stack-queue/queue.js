class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enque(value) {
        let newNOde = new Node(value);
        if (!this.first) {
            this.first = newNOde;
            this.last = newNOde;
        } else {
            this.last.next = newNOde;
            this.last = newNOde;
        }
        return ++this.size;
    }
    deque() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let queue = new Queue();
console.log(queue.enque('first'));
console.log(queue.enque('second'));
console.log(queue.enque('third'));
console.log(queue.enque('fourth'));

console.log(queue.deque());