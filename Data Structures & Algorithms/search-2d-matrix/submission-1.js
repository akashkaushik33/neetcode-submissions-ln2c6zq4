class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;
        let right = matrix.length-1;
        const rowLen = matrix[0].length-1;

        let rowIndex = null
        while (left < right) {
            const mid = left + Math.floor((right-left+1)/2);
            if (target >= matrix[mid][0] && target <= matrix[mid][rowLen] ) {
                rowIndex = mid;
                break;
            } else if (target > matrix[mid][rowLen]) {
                left = mid + 1;
            } else right = mid -1;
        }

        rowIndex = rowIndex != null ? rowIndex : left
        return this.binarySearch(matrix[rowIndex], target)
    }

    binarySearch (arr, target) {

        if (!arr || !arr.length) return false;

        let left = 0;
        let right = arr.length-1;


        while (left < right) {
            const mid = left + Math.floor((right-left+1)/2);
            if (arr[mid] === target) return true;
            else if (arr[mid] > target) right = mid-1;
            else left = mid+1;
        }

        return arr[left] === target;
    }
}
