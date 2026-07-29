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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // // Two Pass Approach
        // let sentinalNode = new ListNode();
        // sentinalNode.next = head;

        // let length = 0;
        // while(head){
        //     head = head.next;
        //     length++;
        // }

        // let prevPos = length - n;
        // let prev = sentinalNode;

        // for(let i=0;i<prevPos;i++){
        //     prev = prev.next;
        // }
        // prev.next=prev.next.next;
        // return sentinalNode.next

        // One Pass Approach
        let sentinalNode = new ListNode();
        sentinalNode.next = head;

        let first = sentinalNode;
        let second = sentinalNode;

        for (let i = 0; i < n; i++) {
            first = first.next;
        }
        while (first.next) {
            second = second.next;
            first = first.next;
        }
        second.next = second.next.next;
        return sentinalNode.next;
    }
}
