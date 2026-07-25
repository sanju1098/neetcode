class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        /**
        Brute Force Approach:
            * Traverse the array.
            * Compare each element with the target.
            * Return the index if found.
        
        Algorithm:
            for each element
                if current == target
                    return index
            return -1

        Code:
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] === target) {
                    return i;
                }
            }
            return -1;
        
        * Time Complexity - O(n)
        * Space Complexity - O(1)
        */

        /**
        Binary Search (Optimal) Approach:
            * Find the middle element.
            * One half of the array is always sorted.
            * Check whether the target lies inside the sorted half.
            * Search only that half.
            * Repeat until found.

        Algorithm:
            left = 0
            right = n - 1
            while left <= right
                mid = (left + right) / 2
                if nums[mid] == target
                    return mid
                if left half is sorted
                    if target lies in left half
                        right = mid - 1
                    else
                        left = mid + 1
                else
                    if target lies in right half
                        left = mid + 1
                    else
                        right = mid - 1
            return -1

        * Time Complexity - O(log n)
        * Space Complexity - O(1)
        */
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                return mid;
            }

            // Left half is sorted
            if (nums[left] <= nums[mid]) {
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            // Right half is sorted
            else {
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return -1;
    }
}
