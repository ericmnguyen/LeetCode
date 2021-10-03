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
var middleNode = function (head) {
  let length = getCount(head);
  let halfLength = Math.floor(length / 2);
  let loop = 0;
  while (loop < halfLength) {
    head = head.next;
    loop += 1;
  }
  return head;
};

var getCount = function (head) {
  let length = 0;
  while (head) {
    length += 1;
    head = head.next;
  }
  return length;
};
