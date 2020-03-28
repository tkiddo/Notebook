**题目：**给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。
**示例：**
输入：nums = [555,901,482,1771]
输出：1 
解释： 只有 1771 是位数为偶数的数字。
**思路：**把整数转换成字符串，字符串的`length`值对2取余，为0的即位数为偶数。
**题解：**
````
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i].toString().length%2===0){
            count++
        }
    }
    return count;
};
````
