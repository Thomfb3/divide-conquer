function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr);
    if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
        return binarySearch(arr, num, 0, pivot - 1);
    } else {
        return binarySearch(arr, num, pivot, arr.length - 1);
    };
};

function binarySearch(arr, num, leftIdx, rightIdx) {
    if (arr.length === 0) return -1;
    if (num < arr[leftIdx] || num > arr[rightIdx]) return -1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middleIdx] === num) {
            return middleIdx;
        } else if (num < arr[middleIdx]) {
            rightIdx = middleIdx - 1;
        } else {
            leftIdx = middleIdx + 1;
        };
    };
    return -1;
};

function findPivot(arr) {
    if (arr.length === 1 || arr[0] < arr.length[arr.length - 1]) return 0;

    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middleIdx] > arr[middleIdx + 1]) return middleIdx + 1
        else if (arr[leftIdx] <= arr[middleIdx]) {
            leftIdx = middleIdx + 1
        } else {
            rightIdx = middleIdx - 1
        };
    };
};

module.exports = findRotatedIndex


// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1