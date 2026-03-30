class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let maxLen = 0;

        for (let num of set) {
            if (set.has(num-1)) continue; // this step is important
            let currentLen = 1;
            let nextNum = num+1;
            while (set.has(nextNum)) {
                currentLen++;
                nextNum++;
            }
            maxLen = Math.max(currentLen, maxLen)
        }

        return maxLen;
    }
}
