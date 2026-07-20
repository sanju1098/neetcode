class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        /**
            Brute Force Approach:
            * Generate every substring.
            * Count the frequency of each character.
            * Find the maximum frequency.
            * Check if the substring can be converted using at most k replacements.
            * Update the answer.

            Algorithm:
                maxLength = 0
                for each starting index
                    frequency = {}
                    for each ending index
                        increase frequency
                        maxFreq = maximum frequency
                        window = j-i+1
                        if window-maxFreq <= k
                            update answer

            Time - O(n²); Space - O(26) ≈ O(1)
        */
        // let maxLength = 0;
        // for (let i = 0; i < s.length; i++) {
        //     const map = new Map();
        //     let maxFreq = 0;
        //     for (let j = i; j < s.length; j++) {
        //         map.set(s[j], (map.get(s[j]) || 0) + 1);
        //         maxFreq = Math.max(maxFreq, map.get(s[j]));
        //         const window = j - i + 1;
        //         if (window - maxFreq <= k) {
        //             maxLength = Math.max(maxLength, window);
        //         }
        //     }
        // }
        // return maxLength;
        /**
            Sliding Window (Optimal) Approach:
                * Maintain a sliding window.
                * Keep track of the frequency of every character.
                * Track the maximum frequency in the current window.
                * If Window Size - Maximum Frequency > k move the left pointer.
                * Otherwise,update the answer.

            Algorithm:
                Create HashMap
                left = 0
                maxFreq = 0
                for right = 0 to n-1
                    add current character
                    update maxFreq
                    while window-maxFreq > k
                        remove left character
                        left++
                    update answer
                return answer

            Time - O(n); Space - O(26) ≈ O(1)

         */

        const map = new Map();
        let left = 0;
        let maxFreq = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            map.set(s[right], (map.get(s[right]) || 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(s[right]));
            while (right - left + 1 - maxFreq > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
