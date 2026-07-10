class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        
        const charCount = {};
        
        for (let ch of s) {
            charCount[ch] = (charCount[ch] || 0) + 1;
        }

        for (let ch of t) {
            charCount[ch] = (charCount[ch] || 0) - 1;
        }

        for (let key in charCount) {
            if (charCount[key] !== 0) {
                return false;
            }
        }
    
        return true;
    }
}

