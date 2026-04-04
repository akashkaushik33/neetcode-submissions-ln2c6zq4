class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        for (let bracket of s) {
            if (stack.length && stack[stack.length-1] === map[bracket]) {
                stack.pop();
                continue;
            }
            stack.push(bracket);
        }

        return stack.length === 0;
    }
}
