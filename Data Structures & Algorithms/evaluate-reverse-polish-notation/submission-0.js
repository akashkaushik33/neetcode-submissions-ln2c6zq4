class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let token of tokens) {
            if (Number.isInteger(parseInt(token))) {
                stack.push(parseInt(token));
            } else {
                const token1 = stack.pop();
                const token2 = stack.pop();
                let result = null;
                switch (token) {
                    case '*' :
                        result = token2 * token1;
                        break;
                    case '/' :
                        result = token2 / token1;
                        if (result > 0) result = Math.floor(result);
                        else result = Math.ceil(result);
                        break;
                    case '-' :
                        result = token2 - token1;
                        break;
                    default: 
                        result = token2 + token1;
                }

                stack.push(result);
            }
        };
        return stack.pop();
    }
}
