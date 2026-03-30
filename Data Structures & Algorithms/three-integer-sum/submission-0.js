class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedArr = nums.slice().sort((a,b) => a-b);

        const output = [];
        for (let i = 0; i < sortedArr.length; i++) {
            if (i > 0 && sortedArr[i] === sortedArr[i-1]) continue;
            const target = 0 - sortedArr[i];

            let j = i+1;
            let k = sortedArr.length - 1;

            while (j < k) {
                const sum = sortedArr[j] + sortedArr[k]
                if (sum === target) {
                    output.push([sortedArr[i], sortedArr[j], sortedArr[k]]);
                    while (sortedArr[j] === sortedArr[j+1]) j++;
                    while (sortedArr[k] === sortedArr[k-1]) k--;
                }
                if (sum > target) {
                    k--
                } else j++

                
            }
            
        }
        return output;
    }
}
