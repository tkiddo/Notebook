**题目：**给你一棵二叉树，请你返回层数最深的叶子节点的和。
**思路：**按每层遍历树，每层节点的值组成一个数组，求最后一个数组的和即可。
**题解：**
````
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let arr = []
    getVal(root,0)
    if(!root) return 0
    let res = arr[arr.length-1]
    return res.reduce(function(prev,cur){
        return prev+cur
    },0)

    //root为当前节点，n为节点所在层数，从0开始
    function getVal(root,n){
        if(!root) return
        if(!Array.isArray(arr[n])) arr[n] = []
        arr[n].push(root.val)
        //获取左右节点的值，层数加一
        getVal(root.right,n+1)
        getVal(root.left,n+1)
    }
};
````
