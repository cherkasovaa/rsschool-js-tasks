module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        const isEven = i % 2 === 0;

        for (let j = 0; j < matrix[i].length; j++) {
            const elem = isEven
                ? matrix[i][j]
                : matrix[i][matrix[i].length - 1 - j];

            result.push(elem);
        }
    }

    return result;
};
