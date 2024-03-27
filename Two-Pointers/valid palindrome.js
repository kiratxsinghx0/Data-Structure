
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var alphanumericRegex = /[a-zA-Z0-9]/;
    s = s.trim();
    let i = 0, j = s.length - 1;
    while (i < j) {
        while (alphanumericRegex.test(s[i]) == false && i < j) i++;
        while (alphanumericRegex.test(s[j]) == false && i < j) j--;
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};
