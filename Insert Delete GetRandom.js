
var RandomizedSet = function () {
    this.table = new Map()
    this.arr = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (!this.table.has(val)) {
        this.table.set(val, this.arr.length)
        this.arr.push(val)
        return true
    } else {
        return false
    }

};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.table.has(val)) {
        const indexToRemove = this.table.get(val);
        this.table.set(this.arr[this.arr.length - 1], indexToRemove);
        this.table.delete(val);
        this.arr[indexToRemove] = this.arr[this.arr.length - 1];
        this.arr[this.arr.length - 1] = val;
        this.arr.pop();
        return true
    }
    return false



};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {

    return this.arr[Math.floor(Math.random() * this.arr.length)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
