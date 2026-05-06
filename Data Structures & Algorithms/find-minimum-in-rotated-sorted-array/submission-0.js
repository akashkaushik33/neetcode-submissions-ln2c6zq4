class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

        if (!nums || !nums.length) return null;
        
        // arr is not rotated
        if (nums[0] < nums[nums.length-1]) {
            return nums[0]
        }
        let min = nums[0];
        let left = 0;
        let right = nums.length-1;
        while (left < right) {
            // upper bound mid point
            const mid = left + Math.floor((right-left+1)/2);

            // strictly increasing side
            if (nums[left] < nums[mid]) {
                min = Math.min(min, nums[left]);
                left = mid+1;
            } else {
                min = Math.min(min, nums[mid]);
                right = mid-1;
            }

        }

        if (left <= nums.length-1) min = Math.min(min, nums[left]);

        return min;



    }
}
