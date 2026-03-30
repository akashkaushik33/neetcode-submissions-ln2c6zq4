class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
            // if (s.length !== t.length) return false
        // const stringMap = new Map();

        // for (let i = 0; i < s.length; i++) {
        //     const charFreq = stringMap.get(s[i]) | 0;
        //     stringMap.set(s[i], charFreq+1);
        // }

        // for (let i = 0; i < t.length; i++) {
        //     const charFreq = stringMap.get(t[i]) | 0;
        //     if (!charFreq) return false;
        //     stringMap.set(t[i], charFreq-1);
        // }

        // return true;

        // To count freq we make an array of size 26...
    const counter = new Array(26).fill(0);
    // Traverse all elements through a loop...
    for (let idx = 0; idx < s.length; idx++) {
        counter[s.charCodeAt(idx) - 97]++;
        
    }
    for (let idx = 0; idx < t.length; idx++) {
        counter[t.charCodeAt(idx) - 97]--;
    }
    // Above iteration provides us with count array having all values to zero then we can say we found an anagram.
    // Every element of count has to be equal to 0.
    // If it is greater than 0 it means s has a character whose occurrence is greater than its occurrence in t.
    // And if its less than 0 then, s has a character whose occurrence is smaller than its occurrence in t.
    for (let idx = 0; idx < 26; idx++) {
        if (counter[idx] != 0)
            return false;
    }
    return true;
    }
}
