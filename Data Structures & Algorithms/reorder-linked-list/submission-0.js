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
     * @return {void}
     */
    reorderList(head) {
        /**
        Fast & Slow Pointer + Reverse + Merge Approach:
            * Find the middle of the linked list.
            * Reverse the second half.
            * Merge both halves alternately.
        */
        if (!head || !head.next) return;

        // Step 1: Find middle
        let slow = head;
        let fast = head;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse second half
        let prev = null;
        let curr = slow.next;
        slow.next = null;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // Step 3: Merge two halves
        let first = head;
        let second = prev;

        while (second) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}
