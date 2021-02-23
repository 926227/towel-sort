module.exports = function towelSort (matrix = []) {
    if (matrix.length === 0) {
        return [];
    }
    let result = [];
    matrix.forEach(function(item, index) {
        (index%2 === 0) ? result.push(...item) : result.push(...item.reverse());
    });
    return result;
};
