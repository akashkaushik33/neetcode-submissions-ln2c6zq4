class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const index = map.get(target - nums[i]);
            if (index != null) return [index, i];
            map.set(nums[i], i)
        }
    }
}
