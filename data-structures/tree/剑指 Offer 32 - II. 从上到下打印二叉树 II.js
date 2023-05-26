/**
 * Performs a level order traversal on a binary tree, starting from the root node
 *
 * @param   {Object} root - the root node of the binary tree
 * @return  {Array} an array containing the values of the nodes in level order
 * @说明     利用 queue FIFO  push 入队   shift 出队首出
 * @link    https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
 */
const levelOrder = (root) => {
  if (!root) {
    return [];
  }
  // 利用队列记录每层节点
  const queue = [root];

  const result = [];
  let level = 0

  // 当前层级如果有节点
  while (queue.length > 0) {

    // 当前层级的节点个数
    const levelTotal = queue.length;

    // 存取当前层级的节点
    const nodes = []

    for (let i = 0; i < levelTotal; i++) {
      const node = queue.shift()
      nodes.push(node.val)
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    
    result[level] = nodes
    level++
  }

  return result
};

const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

console.log("levelOrder(tree)", levelOrder(tree));
