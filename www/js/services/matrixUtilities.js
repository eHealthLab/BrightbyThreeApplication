


cbbApp.factory('matrixUtilities',function(){
    var matrixUtilitiesInstance = {};

    /**
     * Resize the rows of a matrix
     * @param matrix
     * @param oldRows
     * @param newRows
     */
    matrixUtilitiesInstance.resizeRows = function(matrix, oldRows, newRows,
                                                  defaultOffDiagonal, defaultDiagonal) {
        matrix.rows = newRows;
        if (newRows > oldRows) {
            for(var r = oldRows; r < newRows; r++) {
                var newRow = [];
                for(var c = 0; c < matrix.columns; c++) {
                    newRow.push((r == c ? defaultDiagonal : defaultOffDiagonal));
                }
                matrix.data.data.push(newRow);
            }
        } else if (newRows < oldRows) {
            matrix.data.data.splice(newRows, oldRows - newRows);
        }
    }

    /**
     * Resize the columns of a matrix
     * @param matrix
     * @param oldColumns
     * @param newColumns
     */
    matrixUtilitiesInstance.resizeColumns = function(matrix, oldColumns, newColumns,
                                                     defaultOffDiagonal, defaultDiagonal) {
        matrix.columns = newColumns;
        if (newColumns > oldColumns) {
            for(var r = 0; r < matrix.rows; r++) {
                for(var c = oldColumns; c < newColumns; c++) {
                    matrix.data.data[r].push((r == c ? defaultDiagonal : defaultOffDiagonal));
                }
            }

        } else if (newColumns < oldColumns) {
            for(var r = 0; r < matrix.rows; r++) {
                matrix.data.data[r].splice(newColumns, oldColumns-newColumns);
            }
        }
    }

    /**
     * Create a named identity matrix of the specified size
     * @param name
     * @param size
     */
    matrixUtilitiesInstance.createNamedIdentityMatrix = function(name, size) {
        // create an empty matrix
        var matrix = {
            idx: 0,
            rows: size,
            columns: size,
            name: name,
            data: {
                data: []
            }
        }
        // fill in the data
        for(var r = 0; r < size; r++) {
            var colData = [];
            for(var c = 0; c < size; c++) {
                colData.push((r == c ? 1 : 0));
            }
            matrix.data.data.push(colData);
        }

        return matrix;
    }

    /**
     * Create a named matrix with the specified rows and columns filled
     * with the given value
     *
     * @param name
     * @param rows
     * @param columns
     * @param value
     * @returns {{idx: number, name: *, data: {data: Array}}}
     */
    matrixUtilitiesInstance.createNamedFilledMatrix = function(name, rows, columns, value) {
        // create an empty matrix
        var matrix = {
            idx: 0,
            name: name,
            rows: rows,
            columns: columns,
            data: {
                data: []
            }
        }
        // fill in the data
        for(var r = 0; r < rows; r++) {
            var colData = [];
            for(var c = 0; c < columns; c++) {
                colData.push(value);
            }
            matrix.data.data.push(colData);
        }

        return matrix;
    }

    return matrixUtilitiesInstance;
});