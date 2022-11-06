class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.length) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current.value;
    }

    shift() {
        if (!this.length) return undefined;
        const temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (!this.length) {
            this.tail = null;
        }
        return temp.value;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (!this.length) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            const temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (this.length < 0 || this.length <= index) return null;
        if (index === 0) return this.head;
        let current = this.head;
        let i = 0;
        while (i !== index) {
            current = current.next;
            i++;
        }
        return current;
    }

    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);
        let foundNode = this.get(index - 1);
        let newNode = new Node(value);
        newNode.next = foundNode.next;
        foundNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();
        let foundNode = this.get(index - 1);
        let temp = foundNode.next;
        foundNode.next = temp.next;
        foundNode = null;
        this.length--;
        return true;
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}

const list = new SinglyLinkedList();
console.log(list.push('1'));
console.log(list.push('2'));
console.log(list.push('3'));
console.log(list.push('4'));

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.pop());
// console.log(JSON.stringify(list.unshift('test')));
// console.log(JSON.stringify(list.unshift('test1')));
// console.log(JSON.stringify(list.push('world1')));
// console.log(list.get(0));
// console.log(list.get(1));
// console.log(list.set(1,'test'));
// console.log(JSON.stringify(list.insert(1,'nextone')));
// console.log(list.remove(1));
// console.log(JSON.stringify(list));

console.log(list.print());
console.log(JSON.stringify(list.reverse()));
console.log(list.print());