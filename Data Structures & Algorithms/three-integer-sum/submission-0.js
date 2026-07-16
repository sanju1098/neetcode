class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    threeSum(nums) {
        function twoSum(arr, x, ans) {
            let i = x + 1;
            let j = arr.length - 1;

            while (i < j) {
                let sum = arr[i] + arr[j] + arr[x];
                if (sum > 0) {
                    --j;
                } else if (sum < 0) {
                    i++;
                } else {
                    ans.push([arr[i], arr[j], arr[x]]);
                    i++;
                    j--;
                    while (1 < j && arr[i] === arr[i - 1]) ++i;
                }
            }
        }
        nums.sort((a, b) => a - b);
        let ans = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                twoSum(nums, i, ans);
            }
        }
        return ans;
    }
}
