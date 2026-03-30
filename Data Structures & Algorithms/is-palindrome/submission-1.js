class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0;
        let j = s.length-1;



        while (i < j) {
        let leftCharCode = s[i].toLowerCase().charCodeAt();
        let rightCharCode = s[j].toLowerCase().charCodeAt();
        if (!((leftCharCode >= 48 && leftCharCode <= 57) || (leftCharCode >= 97 && leftCharCode <= 122))) {
            i++;
            continue;
        }

        if (!((rightCharCode >= 48 && rightCharCode <= 57) || (rightCharCode >= 97 && rightCharCode <= 122))) {
            j--;
            continue;
        }

        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false
        };

        i++;
        j--;
        }

        return true
    }
}
