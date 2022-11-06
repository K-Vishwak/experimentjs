class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
    }

    addEdge(vertex1, vertex2) {
        [vertex1, vertex2].forEach(vertex => {
            if (!this.adjacencyList[vertex]) {
                this.addVertex(vertex);
            }
        })
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(item => item !== vertex2);
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(item => item !== vertex1);
        }
    }

    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            this.adjacencyList[vertex].forEach(listItem => {
                this.adjacencyList[listItem] = this.adjacencyList[listItem].filter(item => item !== vertex);
            });
        }
        delete this.adjacencyList[vertex];
    }

    dfsIterative(start) {
        let stack = [start];
        let result = [];
        let visited = {};
        let currentIndex;
        while (stack.length) {
            currentIndex = stack.pop();
            result.push(currentIndex);
            visited[currentIndex] = true;
            this.adjacencyList[currentIndex].forEach(n => {
                if (!visited[n]) {
                    visited[n] = true;
                    stack.push(n);
                }
            });
        }
        return result;
    }
}

let g = new Graph();
g.addVertex('first');
g.addVertex('second');
g.addVertex('third');
g.addVertex('fourth');
g.addVertex('fifth');
console.log(g.adjacencyList);

g.addEdge('first', 'second');
g.addEdge('second', 'third');
g.addEdge('third', 'fourth');
g.addEdge('fourth', 'fifth');
g.addEdge('fifth', 'first');

console.log(JSON.stringify(g.adjacencyList));

g.removeEdge('first', 'second');
g.removeEdge('second', 'third');
g.removeEdge('third', 'fourth');
g.removeEdge('fourth', 'fifth');

console.log(JSON.stringify(g.adjacencyList));

g.removeVertex('fifth');

console.log(JSON.stringify(g.adjacencyList));

g.addEdge('first', 'second');
g.addEdge('second', 'third');
g.addEdge('third', 'fourth');
g.addEdge('fourth', 'fifth');
g.addEdge('fifth', 'first');

console.log(JSON.stringify(g.adjacencyList));

console.log(g.dfsIterative('first'));