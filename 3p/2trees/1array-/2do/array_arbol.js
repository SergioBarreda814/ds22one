/** INSTRUCTIONS
 * 
 * PROBLEM 1
 * array-based implementation of trees
 * 
 */

class Node {
  constructor(data) {
    this.data = data;
    this.hijo = [];
  }
}

class Arbol {
  constructor() {
    this.root = null;
  }

  add(data, toNodeData) {
    const node = new Node(data);
    const padre = toNodeData ? this.findBFS(toNodeData) : null;

    if (padre) {
      padre.hijo.push(node);
    } else {
      if (!this.root) {
        this.root = node;
      } else {
        return "error 1";
      }
    }
  }

  findBFS(data) {
    let node = null;

    this.traverseBFS((n) => {
      if (n.data == data) {
        node = n;
      }
    });
    return node;
  }

  traverseBFS(cb) {
    const queue = [this.root];

    if (cb) {
      while (queue.length) {
        const node = queue.shift();

        cb(node);

        for (const child of node.hijo) {
          queue.push(child);
        }
      }
    }
  }
}
  

let arbol = new Arbol();
arbol.add("1");
arbol.add("2", "1");
arbol.add("4", "2");
arbol.add("1", "2");
arbol.traverseBFS((node) => console.log(node));
