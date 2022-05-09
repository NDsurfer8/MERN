/* 
Efficiently combine two already sorted multiset arrays 
into an array containing the sorted set intersection of the two.
Output: only the shared values between the two arrays (deduped).
Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
// function orderedIntersection(sortedA, sortedB) {
//     // CREATE A NEW ARRAY TO PUSH THE intersectionValues into
//     // const setA = new Set(sortedA);
//     // const setB = new Set(sortedB);
//     let outputArr;
//     if(sortedA.length < sortedB.length){
        
//         outputArr= sortedA.filter((val)=> sortedB.includes(val))
//     }
//     else{
//         outputArr= sortedB.filter((val)=> sortedA.includes(val))
//     }
//     return new Set(outputArr);
// }
// console.log(orderedIntersection(numsA2,numsB1))


function orderedIntersection(sortedA, sortedB) {
    // CREATE A NEW ARRAY TO PUSH THE intersectionValues into
    let outputArr;
    sortedA.length < sortedB.length
        ? outputArr= sortedA.filter((val)=> sortedB.includes(val))
        : outputArr= sortedB.filter((val)=> sortedA.includes(val))
    
        console.log(...outputArr)
        // convert to set for unique values
        // unpack set into unnamed array
        // unpacking into the array we created for it to live in
    return [...new Set(outputArr)];
}
console.log(orderedIntersection(numsA1,numsB1))
console.log(orderedIntersection(numsA2,numsB2))
console.log(orderedIntersection(numsA3,numsB3))
