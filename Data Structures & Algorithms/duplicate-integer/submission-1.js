class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const set = new Set(); // for unique elements
        // for (let i = 0; i < nums.length; i++) {
        //     if (set.has(nums[i])) {
        //         return true;
        //     } else set.add(nums[i]);
        // }
        // return false;

        const set = new Set();
        for (const num of nums) {
            if (set.has(num)) {
                return true;
            }
            set.add(num);
        }
        return false;
    }
}

/**
Dry Run
nums = [1, 2, 3, 3]
Initially set = {}
========================================================================
Iteration 1

i = 0
num = 1

Have I seen 1 before?
set.has(1) => No
Store it

set.add(1) => Set becomes {1}
Meaning: I have already seen the number 1.
==================================================

Iteration 2

i = 1
num = 2

Have I seen 2 before? => set.has(2) => No
Store it => Set becomes {1, 2}
==================================================

Iteration 3

i = 2
num = 3

Have I seen 3 before? => set.has(3) => No
Store it => Set becomes {1, 2, 3}
==================================================

Iteration 4

i = 3
num = 3

Have I seen 3 before?

set.has(3) => Yes

Return => true
*/
