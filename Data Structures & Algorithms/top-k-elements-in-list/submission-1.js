class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        const bucket = Array(nums.length + 1)
            .fill(0)
            .map(() => []);
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }
        for (const [num, freq] of count) {
            bucket[freq].push(num);
        }
        const result = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const num of bucket[i]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
