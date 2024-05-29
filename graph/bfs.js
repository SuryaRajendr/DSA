class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
  
    addEdge(vertex1, vertex2) {
      if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2);
      if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }
  
    bfs(start) {
      const queue = [start];
      const result = [];
      const visited = {};
      visited[start] = true;
  
      while (queue.length) {
        const currentVertex = queue.shift();
        result.push(currentVertex);
  
        this.adjacencyList[currentVertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
  
      return result;
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  graph.addEdge("D", "E");
  graph.addEdge("D", "F");
  graph.addEdge("E", "F");
  
  console.log(graph.bfs("A")); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
  