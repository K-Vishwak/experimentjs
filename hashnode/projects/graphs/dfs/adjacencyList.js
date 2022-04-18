class Graph {

    constructor() {
        this.adjacencyList = {};
        this.time = 1;
        this.prev = {};
        this.post = {};
        this.vis = {};
        this.visited = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(source, destination) {
        [source, destination].forEach(vertex => {
            this.addVertex(vertex);
        });
        this.adjacencyList[source].push(destination);
        // comment below line for directed graph.
        // this.adjacencyList[destination].push(source);
    }

    removeEdge(source, destination) {
        this.adjacencyList[source] = this.adjacencyList[source].filter(vertex => vertex != destination);
        this.adjacencyList[destination] = this.adjacencyList[destination].filter(vertex => vertex != source);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    printGraph() {
        return this.adjacencyList;
    }

    getAdjacents(vertex) {
        return this.adjacencyList[vertex];
    }

    isAdjacent(vertex, adjVertex) {
        return this.adjacencyList[vertex].includes(adjVertex);
    }

    getAllVertices() {
        return Object.keys(this.adjacencyList);
    }

    // In case of undirected graph.
    getCountOfEdges() {
        return Object.values(this.adjacencyList).reduce((prev, current) => prev += current.length, 0) / 2;
    }

    getDegreeOfNode(vertex) {
        return this.adjacencyList[vertex].length;
    }

    getEdgesOfNode(vertex) {
        const edges = [];
        this.adjacencyList[vertex].forEach(neighbour => {
            edges.push([vertex, neighbour]);
        });
        return edges;
    }

    isEmpty() {
        return Object.keys(this.adjacencyList).length === 0;
    }

    containsNode(vertex) {
        return Array.from(Object.keys(this.adjacencyList), Number).includes(vertex);
    }

    getPreAndPostVisitedTimes(root) {
        this.prev[root] = this.time;
        this.time++;
        this.visited[root] = true;
        this.adjacencyList[root].forEach(neighbour => {
            if (!this.visited[neighbour]) {
                this.getPreAndPostVisitedTimes(neighbour);
            }
        });
        this.post[root] = this.time;
        this.time++;
    }

    getTransitiveClosure() {
        Object.keys(this.adjacencyList).forEach(vertex => {
            const innerIndex = this.updateList(0, vertex);
            if (this.adjacencyList[vertex].length > (innerIndex + 1)) {
                console.log(this.updateList(innerIndex, vertex));
            }
        });
    }

    updateList(innerIndex, vertex) {
        this.adjacencyList[vertex].slice(innerIndex).forEach((item, index) => {
            this.adjacencyList[vertex].push(...(this.adjacencyList[item].filter(subItem => !this.adjacencyList[vertex].includes(subItem))));
            innerIndex = index;
        });
        return innerIndex;
    }

    dfsIterative(start) {
        const result = [];
        const stack = [start];
        const visited = {};
        visited[start] = true;
        let currentVertex;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }
        return result;
    }

    dfsRecursive(start) {
        const result = [];
        const visited = {};
        const stack = [];
        visited[start] = true;
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if (!vertex) return null;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
            const currentVertex = stack.pop();
            return dfs(currentVertex);
        })(start);
        return result;
    }
}

const r = new Graph();

r.addVertex(0);
r.addEdge(0, 0);
r.addEdge(0, 4);
r.addEdge(1, 0);
r.addEdge(1, 1);
r.addEdge(1, 2);
r.addEdge(2, 1);
r.addEdge(2, 2);
r.addEdge(2, 4);
r.addEdge(3, 1);
r.addEdge(3, 2);
r.addEdge(3, 3);
r.addEdge(4, 4);
r.addEdge(4, 3);
console.log(JSON.stringify(r.printGraph()));
r.getTransitiveClosure();
console.log(JSON.stringify(r.printGraph()));


// testGraph.addVertex(1);
// testGraph.addEdge(1, 2);
// testGraph.addEdge(2, 3);
// testGraph.addEdge(3, 4);
// testGraph.addVertex(1);
// testGraph.addVertex(2);
// testGraph.addVertex(3);
// testGraph.addVertex(5);
// testGraph.addEdge(1, 2);
// testGraph.addEdge(1, 4);
// testGraph.addEdge(2, 3);
// testGraph.addEdge(3, 4);
// testGraph.addEdge(3, 5);
// testGraph.addEdge(5, 6);
// testGraph.addEdge(5, 7);
// console.log(testGraph.dfsRecursive(2));
// console.log(testGraph.dfsIterative(2));
// r.addVertex(1);
// r.addEdge(1, 2);
// r.addEdge(1, 3);
// r.addEdge(2, 4);
// r.addEdge(3, 4);
// r.addEdge(4, 5);
// r.addEdge(4, 6);
// r.addEdge(5, 7);
// r.addEdge(6, 11);
// r.addEdge(6, 12);
// r.addEdge(7, 8);
// r.addEdge(8, 9);
// r.addEdge(8, 10);
// console.log(r.dfsIterative(1));
// // r.removeVertex(12);
// // console.log(r.dfsIterative(1));
// // r.removeEdge(3,4);
// // console.log(r.dfsIterative(1));
// console.log(JSON.stringify(r.printGraph()));
// console.log(r.getAdjacents(2));
// console.log(r.isAdjacent(6, 11));
// console.log(r.getAllVertices());
// console.log(r.getCountOfEdges());
// console.log(r.getDegreeOfNode(6));
// console.log(JSON.stringify(r.getEdgesOfNode(4)));
// console.log(r.containsNode(5));
// console.log(r.isEmpty());
// r.getPreAndPostVisitedTimes(1);
// for (let i = 1; i < Object.keys(r.adjacencyList).length; i++) {
//     console.log("Node " + i +
//     " Pre number " + r.prev[i] +
//     " Post number " + r.post[i])
// }
