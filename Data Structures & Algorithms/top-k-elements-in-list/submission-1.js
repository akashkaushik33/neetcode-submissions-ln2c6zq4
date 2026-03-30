class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // using bucketsort
        const map = new Map();

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        };

        // freq arr will have freq as index and num as index value
        const freqArr = []
        map.keys().forEach(num => {
            if (freqArr[map.get(num)]) {
                freqArr[map.get(num)].push(num)
            } else freqArr[map.get(num)] = [num]
        })
        const output = []
        for (let i = freqArr.length-1; i > 0; i--) {
            if (freqArr[i] != null) {
                output.push(...freqArr[i]);
            }
            if (k === output.length) break;
        }

        return output;
    }
}
