class PractGraph {
    constructor() {
        this.al = {};
    }

    addVertex(vertex) {
        if (!this.al[vertex]) {
            this.al[vertex] = [];
        }
    }

    addEdge(s, d) {
        [s, d].forEach(item => {
            this.addVertex(item);
        });
        this.al[s].push(d);
        this.al[d].push(s);
    }

    removeVertex(v) {
        this.al[v].forEach(vertex => {
            this.al[vertex] = this.al[vertex].filter(n => n != v);
        });
        delete this.al[v];
    }

    removeEdge(s, d) {
        this.al[s] = this.al[s].filter(n => n != d);
        this.al[d] = this.al[d].filter(n => n != s);
    }

    dfsI(start) {
        const result = [];
        const stack = [start];
        const visited = {};
        visited[start] = true;
        while (stack.length) {
            let c = stack.pop();
            result.push(c);
            this.al[c].forEach(n => {
                if (!visited[n]) {
                    stack.push(n);
                    visited[n] = true;
                }
            });
        }
        return result;
    }
}

const r = new PractGraph();
r.addVertex(1);
r.addEdge(1, 2);
r.addEdge(1, 3);
r.addEdge(2, 4);
r.addEdge(3, 4);
r.addEdge(4, 5);
r.addEdge(4, 6);
r.addEdge(5, 7);
r.addEdge(6, 11);
r.addEdge(6, 12);
r.addEdge(7, 8);
r.addEdge(8, 9);
r.addEdge(8, 10);
console.log(r.dfsI(1));
r.removeVertex(12);
console.log(r.dfsI(1));
r.removeEdge(3,4);
console.log(r.dfsI(1));