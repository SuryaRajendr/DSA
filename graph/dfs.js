class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    // Recursive DFS
    dfsRecursive(start) {
      const result = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;
  
      (function dfs(vertex) {
        if (!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            return dfs(neighbor);
          }
        });
      })(start);
  
      return result;
    }
  
    // Iterative DFS
    dfsIterative(start) {
      const stack = [start];
      const result = [];
      const visited = {};
      let currentVertex;
  
      visited[start] = true;
      while (stack.length) {
        currentVertex = stack.pop();
        result.push(currentVertex);
  
        this.adjacencyList[currentVertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        });
      }
  
      return result;
    }
  }
  
  // Example Usage
  const g = new Graph();
  g.addVertex("A");
  g.addVertex("B");
  g.addVertex("C");
  g.addVertex("D");
  g.addVertex("E");
  g.addVertex("F");
  
  g.addEdge("A", "B");
  g.addEdge("A", "C");
  g.addEdge("B", "D");
  g.addEdge("C", "E");
  g.addEdge("D", "E");
  g.addEdge("D", "F");
  g.addEdge("E", "F");
  
  console.log(g.dfsRecursive("A")); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
  console.log(g.dfsIterative("A")); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]
  