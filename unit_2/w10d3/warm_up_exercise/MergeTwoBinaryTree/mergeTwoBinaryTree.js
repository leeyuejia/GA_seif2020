// https://leetcode.com/problems/merge-two-binary-trees/

// tree1 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

//  input is 
//  tree 1 is [1,3,2,5]
//  tree 2 is [2,1,3,null,4,null,7]


/**
 * function TreeNode(val, left, right) {
 *  this.val = (val===undefined ? 0 : val)
 *  this.left = (left===undefined ? null : left)
 *  this.right = (right===undefined ? null : right)
 * }
 */


var mergeTrees = function(t1, t2) {
  if(t1 ===null) {
      return t2
  }
  if(t2 === null) {
      return t1
  }
  const newLeftNode = (mergeTrees(t1.left,t2.left))
  const newRightNode = (mergeTrees(t1.right,t2.right))
  return new TreeNode(t1.val + t2.val, newLeftNode , newRightNode)  
}
