
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let maxLength = 0;
    const hashMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (hashMap.has(s[i])) {
            start = Math.max(start, hashMap.get(s[i]) + 1);
        }
        hashMap.set(s[i], i);
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
};
