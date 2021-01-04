//.1 
    //.a - Constant time O(1) choosses one by random
    //.b - Linear time O(n) goes through entire array

//.2 - Constant time O(1) no loop
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

//.3 - Polynomial time O(n^k) two levels of looping --> (O(n^2))
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

//.4 - Linear time O(n) loops until end of array length
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

//.5 - Linear time O(n) loops through, ignore the impact of lower ordered operations

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) { //lower ordered operation
            return i;
        }
    }
}

//.6 - Polynomial time O(n^k), two levels of for-loops

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

//.7 
/*
- This algorithm computes the Fibionacci sequence up to 'num'
- Linear time O(n), single for-loop
*/ 

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

//.8 
/* 
    - O(log n)
    - Each time you loop through, you cut the size of the problem in half. Run time increases slowly when larger inputs are used.
*/
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

//.9 - O(1), time complexity stays the same throughout process.


function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//.10 - 

function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

//.11 - Tower of Hanoi

//.12 - Iterative version

//.13 - Recursive Big O

//.14 - Iterative Big O