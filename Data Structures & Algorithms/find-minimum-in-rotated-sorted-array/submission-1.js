class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        /**
            Brute Force Approach:
                * Traverse the entire array.
                * Keep track of the smallest element.
            
            Algorithm:
                minimum = nums[0]
                for every element
                    minimum = min(minimum, current)
                return minimum

            Code:
                function findMin(nums) {
                    let min = nums[0];
                    for (let i = 1; i < nums.length; i++) {
                        min = Math.min(min, nums[i]);
                    }
                    return min;
                }
            
            * Time Complexity - O(n)
            * Space Complexity - O(1)
        */

        /**
            Binary Search (Optimal) Approach:
                * Use Binary Search.
                * Compare the middle element with the last element.
                * If the middle element is greater than the last element, the minimum lies on the right.
                * Otherwise, the minimum lies on the left (including the middle element). 

            Alogrithm:
                left = 0
                right = n - 1
                while left < right
                    mid = left + (right-left)/2
                    if nums[mid] > nums[right]
                        left = mid + 1
                    else
                        right = mid
                return nums[left]

            * Time Complexity - O(log n)
            * Space Complexity - O(1)
        */
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return nums[left];
    }
}
