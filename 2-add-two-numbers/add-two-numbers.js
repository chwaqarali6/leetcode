/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let ans = new ListNode()

    for (let i = l2, j = l1, k = ans, carry = 0; i !== null || j !== null || carry !== 0;) {
        const sum = (i?.val || 0) + (j?.val || 0) + carry
        carry = Math.trunc(sum / 10)
        k.next = new ListNode(sum % 10)
        k = k.next
        i = i?.next || null
        j = j?.next || null
    }

    return ans.next
};