class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        /* strs = ["Hello", "World"] */

        /** ALGM:
         * result = ""
         * for every string
         * append
         * length + "#" + string
         * return result
         */
        let result = "";

        for (const str of strs) {
            result += str.length + "#" + str;
        }
        /* 5#Hello5#World */

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        /**
         * i = 0
         * while i < string.length
         * Find '#'
         * Length = number before '#'
         * Take next length characters
         * Move pointer
         * Repeat
         */

        /**
         * Machine sends: 5#Hello5#World
         *
         * i = 0
         * Find first #
         * 5#
         * Length5
         * Read next 5 characters => Hello
         *
         * Move Pointer
         *
         * i = 7
         * Again 5#
         * Read next 5 => World
         * Answer => ["Hello", "World"]
         */

        const result = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            const length = Number(str.substring(i, j));
            const word = str.substring(j + 1, j + 1 + length);
            result.push(word);
            i = j + 1 + length;
        }
        return result;
    }

    /* TIME: O(n) ; SPACE: O(n)  */
}
