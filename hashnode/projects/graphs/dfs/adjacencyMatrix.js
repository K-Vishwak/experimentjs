class Graph {
    constructor(size) {
        this.matrix = [];
        this.visited = {};
        this.result = [];
        this.createMatrix(size);
    }

    createMatrix(size) {
        this.length = size;
        while (size > 0) {
            const arr = [];
            arr.length = length;
            arr.fill(0);
            this.matrix.push(arr);
            size--;
        }
    }

    addVertex(vertex) {
        if (!(source < 0 || destination >= n)) {
            this.length
        }
    }

    addEdge(source, destination) {
        if (!(source < 0 || destination >= this.length)) {
            this.matrix[source][destination] = 1;
            this.matrix[destination][source] = 1;
        } else {
            console.log('Vertex doesnt exist');
        }
    }

    dfs(start) {
        this.visited[start] = true;
        this.result.push(start);
        for (let i = 0; i < this.matrix[start].length; i++) {
            if (this.matrix[start][i] == 1 && (!this.visited[i])) {
                this.dfs(i);
            }
        }
        return this.result;
    }
}

const r = new Graph(12);
r.addEdge(0, 1);
r.addEdge(0, 2);
r.addEdge(1, 3);
r.addEdge(2, 3);
r.addEdge(3, 4);
r.addEdge(3, 5);
r.addEdge(4, 6);
r.addEdge(5, 10);
r.addEdge(5, 11);
r.addEdge(6, 7);
r.addEdge(7, 8);
r.addEdge(7, 9);
r.addVertex(12);
// r.addEdge(4, 5);

console.log(JSON.stringify(r.matrix));

console.log(r.dfs(0));