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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */

    mergeKLists(lists) {
        /**
        Brute Force Approach
            * Traverse every linked list.
            * Store all node values in an array.
            * Sort the array.
            * Create a new linked list.
            
        Algorithm
            * Store all values
            * Sort the array
            * Create a new linked list
            * Return head

        Code:
        const arr = [];
        for (const list of lists) {
            let curr = list;
            while (curr) {
                arr.push(curr.val);
                curr = curr.next;
            }
        }
        arr.sort((a, b) => a - b);
        const dummy = new ListNode();
        let curr = dummy;
        for (const num of arr) {
            curr.next = new ListNode(num);
            curr = curr.next;
        }
        return dummy.next;

        Time: O(N log N)
        Space:O(N)
        N = Total number of nodes.
        
        */

        function mergeTwoLists(l1, l2) {
            const dummy = new ListNode();
            let tail = dummy;

            while (l1 && l2) {
                if (l1.val < l2.val) {
                    tail.next = l1;
                    l1 = l1.next;
                } else {
                    tail.next = l2;
                    l2 = l2.next;
                }

                tail = tail.next;
            }

            tail.next = l1 || l2;

            return dummy.next;
        }

        if (lists.length === 0) return null;

        while (lists.length > 1) {
            const merged = [];

            for (let i = 0; i < lists.length; i += 2) {
                const l1 = lists[i];
                const l2 = i + 1 < lists.length ? lists[i + 1] : null;

                merged.push(mergeTwoLists(l1, l2));
            }

            lists = merged;
        }

        return lists[0];
    }
}
