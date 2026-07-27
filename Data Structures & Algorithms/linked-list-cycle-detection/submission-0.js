/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        /** Hash Table */
        // let seenNode = new Set();
        // let curr = head;
        // while (curr !== null) {
        //     if (seenNode.has(curr)) {
        //         return true;
        //     }
        //     seenNode.add(curr);
        //     curr = curr.next;
        // }
        // return false;

        /** Floyd's Algorithm */
        if (!head) return false;
        let slow = head;
        let fast = head.next;
        while (slow !== fast) {
            if (fast === null || fast.next === null) {
                return false;
            }
            slow = slow.next;
            fast = fast.next.next;
        }
        return true;
    }
}
