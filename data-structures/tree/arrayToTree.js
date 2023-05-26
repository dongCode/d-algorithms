/**
 * Convert an array to a binary tree.
 *
 * @param {array} arr - The array to be converted.
 * @return {object} The root node of the binary tree.
 */
function arrayToTree (arr) {
   if(!arr || arr.length === 0) {
    return null
   }
   // 根节点
   const root = {
      val: arr[0],
      left: null,
      right: null
   }

   // 队列保存需要插入的节点
   const queue = [root]

   // 需要插入的节点序号
   let i = 1
   while(i < arr.length) {
     const node = queue.shift()
     if(arr[i] !== null) {
        node.left = {
            val: arr[i],
            left: null,
            right: null
        }
        queue.push(node.left)
     }
     i++
     if(i < arr.length && arr[i] !== null) {
        node.right = {
            val: arr[i],
            left: null,
            right: null
        }
        queue.push(node.right)
     }
     i++
   }

   return root
}


const arr = [3, 9, 20, null, null, 15, 7]
const root = arrayToTree(arr)
console.log(root) // 输出