
function treeToArray(root) {
    if (!root) {
      return []
    }
  
    const queue = [root]
    const res = []
  
    while (queue.length > 0) {
      const len = queue.length // 当前层级的节点个数
  
      for (let i = 0; i < len; i++) {

        const node = queue.shift()
        
        res.push(node ? node.val : null)

        if(!node) {
            continue
        }

        if (node.left) {
          queue.push(node.left)
        } else {
          queue.push(null)
        }
  
        if (node.right) {
          queue.push(node.right)
        } else {
          queue.push(null)
        }
      }
    }
  
    // 去掉最后的 null 值
    while (res[res.length - 1] === null) {
      res.pop()
    }
  
    return res
  }

const tree = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

console.log("treeToArray(tree)", treeToArray(tree));
