
/**
 * Performs a level order traversal on a binary tree, starting from the root node
 *  
 * @param   {Object} root - the root node of the binary tree
 * @return  {Array} an array containing the values of the nodes in level order
 * @说明     利用 queue FIFO  push 入队   shift 出队首出
 * @link    https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
 */
const levelOrder = (root) => {
   if(!root) {
     return []
   }
  
   // 队列数据存储节点顺序
   const queue = [root]
   
   const result = []
   
   while(queue.length) {
     const node = queue.shift()
     result.push(node.val)
     if(node.left) {
       queue.push(node.left)
     }
     if(node.right) {
       queue.push(node.right)
     }
   }

   return result
};

const tree = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 4,
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
