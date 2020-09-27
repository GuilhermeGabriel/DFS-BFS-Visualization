class Queue extends Array {
  enqueue(val) {
    this.push(val);
  }

  dequeue() {
    return this.shift();
  }

  peek() {
    return this[0];
  }

  isEmpty() {
    return this.length === 0;
  }
}

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  printGraph() {
    var get_keys = this.AdjList.keys();

    for (var i of get_keys) {
      var get_values = this.AdjList.get(i);
      var conc = '';

      for (var j of get_values) conc += j + ' ';

      console.log(i + ' -> ' + conc);
    }
  }

  bfs(startingNode, arrayResult) {
    var visited = {};

    var q = new Queue();

    visited[startingNode] = true;
    q.enqueue(startingNode);

    while (!q.isEmpty()) {
      var getQueueElement = q.dequeue();
      arrayResult.push(getQueueElement);

      var get_List = this.AdjList.get(getQueueElement);

      for (var i in get_List) {
        var neigh = get_List[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.enqueue(neigh);
        }
      }
    }
  }

  dfs(startingNode, arrayResult) {
    var visited = {};

    this.DFSUtil(startingNode, visited, arrayResult);
  }

  DFSUtil(vert, visited, arrayResult) {
    visited[vert] = true;
    arrayResult.push(vert);

    var get_neighbours = this.AdjList.get(vert);

    for (var i in get_neighbours) {
      var get_elem = get_neighbours[i];
      if (!visited[get_elem]) this.DFSUtil(get_elem, visited, arrayResult);
    }
  }
}

export default Graph;
