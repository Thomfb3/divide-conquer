function sortedFrequency(arr, val) {

    let leftIdx = 0;
    let rightIdx = arr.length-1;

    //starting index of val run
    while (leftIdx <= rightIdx) {

        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal >= val) {
            rightIdx = middleIdx - 1;  
        } else if (middleVal <= val) {
            leftIdx = middleIdx + 1;
        }
    };
    
    //Set val run start
    let valStart = rightIdx + 1;

    leftIdx = 0;
    rightIdx = arr.length-1;

    //ending index of val run
    while (leftIdx <= rightIdx) {

        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal <= val) {
            leftIdx = middleIdx + 1;
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        }
    };
    let valEnd = rightIdx + 1;

    return (valEnd - valStart === 0) ? -1 : valEnd - valStart;    
}

module.exports = sortedFrequency

//Time Complexity: O(log N)




//                  L     M     R    
//                        
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
//                  L     M     R    
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
//                  L             R M
//                      R  M
//                  L M R
//                      LR }
// sortedFrequency([1,1,2,2,2,2,3,4,4,4,4,4,4,4,4,4,5,6],2) // 4

// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1