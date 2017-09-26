const COLLATION = {
    // 正序
    ASC: function (a, b) {
        return a - b;
    },
    // 倒序
    DESC: function (a, b) {
        return b - a;
    }
}

module.exports = COLLATION;