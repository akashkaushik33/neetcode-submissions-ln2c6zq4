class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const finalMap = {};

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];

            const charArr = new Array(26).fill(0);
            for (let j = 0; j < str.length; j++) {
                charArr[str.charCodeAt(j) - 97]++;
            }
            let code = ''
            for (let k = 0; k < 27; k++) {
                if (charArr[k] > 0) {
                    code += charArr[k] + String.fromCharCode(97+k);

                }
            };

            if (finalMap[code]) {
                finalMap[code].push(str)
            } else finalMap[code] = [str];
        }
        const output = []
        for (let key in finalMap) {
            output.push(finalMap[key])
        }

        return output;
    }
}
