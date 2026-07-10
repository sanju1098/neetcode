class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const st = new Set(); // for unique elements
        
        for (let i = 0; i < nums.length; i++) {
            if (st.has(nums[i])){
            console.log(st, "set")
            return true;}
        else
        st.add(nums[i]);
        }
        console.log(st, "set")
        return false;
    }
}
