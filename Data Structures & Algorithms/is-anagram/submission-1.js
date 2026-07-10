class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        /** if s and t length is not equal return false */
        if (s.length !== t.length) return false; //

        const charCount = {}; // create {}

        /** 
        Loop the s items 
        if s[i] is not in charCount {} then s[i]=1
        else s[i] is in charCount {} then s[i]++
        */
        for (let i = 0; i < s.length; i++) {
            if (!charCount[s[i]]) {
                charCount[s[i]] = 1;
            } else charCount[s[i]]++;
            /*
                { r: 1 }
                { r: 1, a: 1 }
                { r: 1, a: 1, c: 1 }
                { r: 1, a: 1, c: 1, e: 1 }
                { r: 1, a: 1, c: 2, e: 1 }
                { r: 1, a: 2, c: 2, e: 1 }
                { r: 2, a: 2, c: 2, e: 1 }
            */
        }

        /** 
        Loop the t items 
        if t[i] is not in charCount {} || t[i] < 0 => return faqlse
        else t[i] --
        */
        for (let i = 0; i < t.length; i++) {
            if (!charCount[t[i]] || charCount[t[i]] < 0) {
                return false;
            } else charCount[t[i]]--;
            /*
                { r: 2, a: 2, c: 1, e: 1 }
                { r: 2, a: 1, c: 1, e: 1 }
                { r: 1, a: 1, c: 1, e: 1 }
                { r: 0, a: 1, c: 1, e: 1 }
                { r: 0, a: 0, c: 1, e: 1 }
                { r: 0, a: 0, c: 0, e: 1 }
                { r: 0, a: 0, c: 0, e: 0 }
            */
        }

        return true;
    }
}
