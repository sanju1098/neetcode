class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        /**
        Brute Force Approach:
         * Generate every possible substring.
         * Check whether it contains duplicate characters.
         * Keep track of the maximum length.
         * 
        Algorithm:
        maxLength = 0
        
        for each starting index
            create empty Set
            
            for each ending index

                if character already exists
                    break

                add character to Set

                update maxLength

        return maxLength

        Time Complexity - O(n²);
        Space Complexity - O(n)
         */
        // let maxLength = 0;
        // for (let i = 0; i < s.length; i++) {
        //     const set = new Set();
        //     for (let j = i; j < s.length; j++) {
        //         if (set.has(s[j])) {
        //             break;
        //         }
        //         set.add(s[j]);
        //         maxLength = Math.max(maxLength, j - i + 1);
        //     }
        // }
        // return maxLength;
        // =====================================
        /** Sliding Window (Optimal) Approach:
         * Maintain a window using two pointers:
            * left
            * right
         * Expand the window by moving right.
         * If a duplicate is found:
            * Remove characters from the left until the duplicate is removed.
         * Update the maximum window size.
         
        
        Algorithm:
        Create Set
        left = 0

        for right = 0 to n-1

            while current character exists in Set
                remove left character
                left++
            add current character
            update maximum length
        return maximum length


        Time Complexity - O(n)
        Space Complexity - O(n)
         */

        const set = new Set();

        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
