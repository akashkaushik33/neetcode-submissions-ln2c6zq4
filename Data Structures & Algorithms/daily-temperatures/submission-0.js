class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = []
        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
                const resultIndex = stack.pop();
                result[resultIndex] = i - resultIndex;
            }
            stack.push(i);
        }

        while (stack.length) {
            result[stack.pop()] = 0
        };

        return result;
    }
}
