/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let mergedList = new ListNode()

    for (let i = list1, j = list2, k = mergedList; i !== null || j !== null;) {
        if (i !== null && (j === null || i.val <= j.val)) {
            k.next = new ListNode(i.val, null)
            k = k.next
            i = i.next
        } else if (j !== null && (i === null || i.val > j.val)) {
            k.next = new ListNode(j.val, null)
            k = k.next
            j = j.next
        }
    }

    return mergedList.next
};