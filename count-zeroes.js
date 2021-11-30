function countZeroes(arr) {
    //Check edges cases all 1s or all 0s
    if(arr[0] === 0) {
        return arr.length;
    } else if (arr[arr.length-1] === 1) {
        return 0;
    };

    let leftIdx = 0;
    let rightIdx = arr.length-1;

    while (leftIdx <= rightIdx) {

        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === 0) {
            rightIdx = middleIdx - 1;
        } else if (middleVal === 1) {
            leftIdx = middleIdx + 1;
        }
    };

 return arr.length - (rightIdx + 1);
}

module.exports = countZeroes

//Time Complexity: O(log N)

// countZeroes([0,0,0,0,0,0]) // 6
// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

//             L        M         R 
//             L M    R
//                L M R
//                   LR } 
//countZeroes([1,1,1,1,0,0,0,0,0,0])