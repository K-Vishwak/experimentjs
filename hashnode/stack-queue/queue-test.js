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
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    deque() {
        if (!this.first) return null;
        if (this.first === this.last) {
            this.last = null;
        }
        let temp = this.first.value;
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}