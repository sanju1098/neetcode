class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        /**
        Brute Force Approach:
            * Generate every substring.
            * Count the frequency of its characters.
            * Check if it contains all characters from t.
            * Keep track of the shortest valid substring.

        Algorithm:
            Create frequency map for t
            minimumWindow = ""
            for each starting index
                create frequency map
                for each ending index
                    add current character
                    if current window contains all characters of t
                        update minimum window
        */

        /**
            const target = new Map();
            for (const ch of t) {
                target.set(ch, (target.get(ch) || 0) + 1);
            }

            let result = "";
            for (let i = 0; i < s.length; i++) {
                const window = new Map();
                for (let j = i; j < s.length; j++) {
                    window.set(s[j], (window.get(s[j]) || 0) + 1);
                        let valid = true;
                        for (const [key, value] of target) {
                            if ((window.get(key) || 0) < value) {
                                valid = false;
                                break;
                            }
                        }
                    if (valid) {
                        const sub = s.substring(i, j + 1);
                        if (result === "" || sub.length < result.length) {
                            result = sub;
                        }
                    }
                }
            }
            return result;

            * Time Complexity - O(n² × m)
            * Space Complexity - O(52) ≈ O(1)
        */

        /**
            Sliding Window (Optimal) Approach:
                * Store the frequency of every character in t.
                * Expand the window using right.
                * Count how many required characters have been matched.
                * Once all characters are matched:
                    * Try shrinking the window using left.
                    * Update the minimum window.
                * Continue until the end.

            Algorithm:
                Store frequency of t
                left = 0
                matched = 0
                for right = 0 to n-1
                    add current character
                    if character count becomes valid
                        matched++
                    while matched == requiredCharacters
                        update answer
                        remove left character
                        if window becomes invalid
                            matched--
                        left++
                return answer
            
            * Time Complexity - O(n)
            * Space Complexity - O(52) ≈ O(1)
        */
        const countT = new Map();

        for (const ch of t) {
            countT.set(ch, (countT.get(ch) || 0) + 1);
        }

        const window = new Map();

        let have = 0;
        const need = countT.size;

        let left = 0;

        let minLength = Infinity;
        let start = 0;

        for (let right = 0; right < s.length; right++) {
            const ch = s[right];

            window.set(ch, (window.get(ch) || 0) + 1);

            if (countT.has(ch) && window.get(ch) === countT.get(ch)) {
                have++;
            }

            while (have === need) {
                if (right - left + 1 < minLength) {
                    minLength = right - left + 1;
                    start = left;
                }

                const leftChar = s[left];

                window.set(leftChar, window.get(leftChar) - 1);

                if (countT.has(leftChar) && window.get(leftChar) < countT.get(leftChar)) {
                    have--;
                }

                left++;
            }
        }

        return minLength === Infinity ? "" : s.substring(start, start + minLength);
    }
}
