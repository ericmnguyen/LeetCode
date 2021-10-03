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
var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  const reverseListHead = reverseList(head.next);
  head.next.next = head;
  // check if there is no node after this node
  head.next = null;
  return reverseListHead;
};
