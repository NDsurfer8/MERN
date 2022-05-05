// Day3week1
// splittingand splitting until end up wit 1 value.
// Base Case,keeps from calling over andover recursive call.

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left, right) {
    // CREATE A NEW ARRAY TO PUSH VALUES INTO
    let newArr= [];
    // CREATE A LEFT AND RIGHT INDEX
    let leftIndex = 0;
    let rightIndex = 0;
    // START COMPARING THE VALUES FROM THE TWO ARRAYS
    while(leftIndex < left.length && rightIndex < right.length){
        if( right[rightIndex] < left[leftIndex]){
            newArr.push(right[rightIndex]);
            rightIndex++;
        }
        else{ 
             // PUSH THE LESSER VALUES FIRST INTO THE NEW ARRAY
            newArr.push(left[leftIndex]);
            leftIndex++;
        }
    }
    while(leftIndex< left.length){
        newArr.push(left[leftIndex]);
        leftIndex++;
    }
    while(rightIndex < right.length){
        newArr.push(right[rightIndex]);
        rightIndex++;
    }
    return newArr;

    // RETURN THE NEW ARRAY
}

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) {
    // BASE CASE
    if(nums.length === 1){
        return nums
    }
    // GETTING THE MIDDLE INDEX OF NUMS ARRAY
    const middleIndex = Math.floor(nums.length / 2)
    // USING SLICE TO GET A LEFT AND RIGHT VERSION OF THE ARRAY
    const leftArr = nums.slice(0, middleIndex)
    const rightArr = nums.slice(middleIndex)
    // RECURSIVELY CALL WITHT THE LEFT AND RIGHT ARRAY
    const sortedLeft = mergeSort(leftArr)
    const sortedRight = mergeSort(rightArr)
    // MERGE THE SORTED LEFT AND RIGHT ARRAYS
    return merge(sortedLeft, sortedRight)
}
console.log(mergeSort(numsRandomOrder));