var convert = function (s, numRows) {
    if (numRows === 1) return s;

    const n = (numRows * 2) - 2;
    const result = [];
    const len = s.length;

    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < len; j += n) {
            result.push(s[j]);
            if (i !== 0 && i !== numRows - 1 && j + (n - i * 2) < len) {
                result.push(s[j + (n - i * 2)]);
            }
        }
    }

    return result.join('');
};
