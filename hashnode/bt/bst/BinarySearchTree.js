// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         let newNode = new Node(value);
//         if (this.root === null) {
//             this.root = newNode;
//             return this;
//         }
//         let current = this.root;
//         if (current.value === value) return undefined;
//         while (true) {
//             if (value < current.value) {
//                 if (current.left === null) {
//                     current.left = newNode;
//                     return this;
//                 }
//                 current = current.left;
//             } else {
//                 if (current.right === null) {
//                     current.right = newNode;
//                     return this;
//                 }
//                 current = current.right;
//             }
//         }
//     }

//     find(value) {
//         let current = this.root;
//         if (current === null) return false;
//         if (current.value === value) return true;
//         while (true) {
//             if (current === null) return false;
//             if (current.value > value) {
//                 current = current.left;
//             } else if (current.value < value) {
//                 current = current.right;
//             } else {
//                 return true;
//             }
//         }
//     }
// }

// const bst = new BinarySearchTree();
// bst.insert(10);
// bst.insert(2);
// bst.insert(12);

// console.log(JSON.stringify(bst));
// console.log(bst.find(12));


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (current.value > value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (current.value < value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (this.root === null) return null;
        if (this.root.value === value) return this.root;
        let current = this.root;
        while (true) {
            if (current === null) return null;
            if (current.value > value) {
                current = current.left;
            } else if (current.value < value) {
                current = current.right;
            } else {
                return current;
            }
        }
    }

    contains(value) {
        if (this.root === null) return false;
        if (this.root.value === value) return true;
        let current = this.root;
        while (true) {
            if (current === null) return false;
            if (current.value > value) {
                current = current.left;
            } else if (current.value < value) {
                current = current.right;
            } else {
                return true;
            }
        }
    }

    delete(value) {
            if(this.root === null) return this.root;
            let current = this.root;
            if(current.value === value) {
                let temp = current.right;
                current = temp.left;
                temp.left = null;
            }
            while(true){
                if(current.value === value) {
                    
                }
            }

    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(2);
bst.insert(11);
bst.insert(3);
bst.insert(5);
bst.insert(24);

console.log(JSON.stringify(bst));
// console.log(JSON.stringify(bst.find(11)));
// console.log(bst.contains(22));