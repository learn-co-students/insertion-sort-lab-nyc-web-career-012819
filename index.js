const unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7];
function findMinAndRemove(array){
    let smallestNum = array[0];
    let smallestIdx = 0;
    for (let i = 1; i < array.length; i++) {
        if (smallestNum > array[i]) {
            smallestNum = array[i];
            smallestIdx = i
        }
    }
    array.splice(smallestIdx, 1);
    return smallestNum;
}

function insertionSort(array){
    console.log('start', array);
    const sortedArray = [];
    while (array.length != 0) {
        sortedArray.push(findMinAndRemove(array));    
    }
    console.log('end', sortedArray);
    
    return sortedArray;
}
insertionSort(unsorted);
// findMinAndRemove(unsorted);