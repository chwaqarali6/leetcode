/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // const dictionary = new Map()

    // while (headA !== null) {
    //     dictionary.set(headA)
    //     headA = headA.next
    // }

    // while (headB !== null) {
    //     if (dictionary.has(headB)) return headB;
    //     headB = headB.next
    // }

    // return null;

    let a = headA, b = headB

    while (a !== b) {
        a = a ? a.next : headB
        b = b ? b.next : headA
    }

    return a
};