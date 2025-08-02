const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    const newNode = new Node(data);

    const insert = (node) => {
      if (data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          insert(node.left);
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = newNode;
        } else {
          insert(node.right);
        }
      }
    };

    if (!this.node) this.node = newNode;
    else insert(this.node);
  }

  has(data) {
    let currentNode = this.node;

    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      }

      currentNode = data < currentNode.data ? currentNode.left : currentNode.right;
    }

    return false;
  }

  find(data) {
    let currentNode = this.node;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      }

      currentNode = data < currentNode.data ? currentNode.left : currentNode.right;
    }

    return null;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          node = null;
          return node;
        }

        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    };

    this.node = removeNode(this.node, data);
  }

  min() {
    let currentNode = this.node;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    let currentNode = this.node;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
