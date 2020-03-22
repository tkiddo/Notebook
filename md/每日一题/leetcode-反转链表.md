**题目**：
反转一个单链表。
示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
**思路**:
反转链表的基本思路是，遍历每一个节点，让节点的next值指向上一个节点。因此，需要一个变量`current`存储当前遍历的节点，一个变量`previous`存储上一个节点。因为反转后的链表的最后一个节点就是反转前的第一个节点(按示例中的来说，原链表中值为1的节点在链表反转后next的值`null`)，而反转后的链表每个节点的next值指向反转前链表该节点的`previous`,所以`previous`值初始化为`null`。`current`值为遍历的节点，自然从head开始。
**实现**：
````
var reverseList = function(head) {
    let current = head
    let previous = null
    while(current){
        //获取下一个节点
        let next = current.next
        //当前节点的next指向上一个节点
        current.next = previous
        //将previous更新为当前节点
        previous = current
        //将current值更新为下一个节点
        current = next
    }
    return previous
};
````
