/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let turtle = head;
  let hare = head;
  let index = 0;
  if (head === null || head.next === null || head.next.next === null) {
    return null;
  }
  while (hare !== null && hare.next !== null && hare.next.next !== null) {
    turtle = turtle.next;
    hare = hare.next.next;
    if (turtle === hare) {
      let loop = head;
      while (loop !== turtle) {
        loop = loop.next;
        turtle = turtle.next;
        index += 1;
      }
      return loop;
    }
  }
  return null;
};
