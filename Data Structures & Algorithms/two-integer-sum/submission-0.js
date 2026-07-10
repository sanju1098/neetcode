class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            console.log(complement, "complement")
            console.log(map, "map")
            if (map.has(complement)) {
                console.log(complement, map.get(complement), " get complement")
                return [map.get(complement), i];
            }
            map.set(nums[i], i);
        }
    }
}


/**
nums = [2, 7, 11, 15]
target = 9

Initially, map = {}

Iteration 1:
i = 0, 
nums[i] = nums[0] =2

I have 2.
What number do I need to make 9?
const complement = 9 - (nums[0] = 2) = 7;

Check map:
map.has(7) - No, because Current map : {}
So store the current number.

map.set(2, 0); => map.set(nums[i], i)
Map becomes : {2 → 0}

Meaning: "I have already seen the number 2 at index 0."

==================================================================

Iteration 2:
i = 1
nums[i] = 7

I have 7.
What number do I need to make 9?
const complement = 9 - (nums[1] = 7) = 2;
const complement = 2;

Check map: map.has(2) => YES
Map { 2 → 0 }

Current Number = 7 => nums[i]

Previously Seen Number = 2

So return

[map.get(2),i] => Answer [0,1]
 */