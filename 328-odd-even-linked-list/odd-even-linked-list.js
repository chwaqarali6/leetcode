/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (!head || !head.next) return head

    let slow = head, fast = head?.next, length = 3
    while (fast.next !== null) {
        if (length % 2 === 0) {
            fast = fast.next
        } else {
            const nextToFast = fast.next
            const nextToSlow = slow.next
            slow.next = nextToFast
            fast.next = nextToFast.next
            nextToFast.next = nextToSlow

            slow = slow.next
        }

        length++
    }

    return head
};