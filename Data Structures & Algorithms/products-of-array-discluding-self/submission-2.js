class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // const length = nums.length-1
        // const prefixProduct = [1, nums[0]];
        // const postFixProduct = [];
        // postFixProduct[length] = 1;
        // postFixProduct[length-1] = nums[length];

        // for (let i = 2; i < nums.length; i++ ) {
        //     prefixProduct[i] = nums[i-1] * prefixProduct[i-1];
        //     postFixProduct[length - i] = nums[length-i+1] * postFixProduct[length-i+1];
        // }

        // const output = [];
        // for (let i = 0; i < nums.length; i++) {
        //     output[i] = prefixProduct[i] * postFixProduct[i]
        // }

        // return output;

        // this updated version uses O(1) space
        const length = nums.length-1
        const productArr = [1, nums[0]];
        // const postFixProduct = [];
        // postFixProduct[length] = 1;
        // postFixProduct[length-1] = nums[length];

        for (let i = 2; i < nums.length; i++ ) {
            productArr[i] = nums[i-1] * productArr[i-1];
            // postFixProduct[length - i] = nums[length-i+1] * postFixProduct[length-i+1];
        }

        // productArr[nums.length-2] = productArr[nums.length-1] * nums[nums.length-1];
        let lastProduct = 1;
        for (let i = nums.length-2; i >= 0 ; i--) {
            productArr[i] = productArr[i] * lastProduct * nums[i+1];
            lastProduct = lastProduct * nums[i+1]
        }
        return productArr
    }
}
