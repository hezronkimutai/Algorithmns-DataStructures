function swap(a, i, j) {
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}


//arr = [7, 4, 3, 2, 9, 67, 85]
// index = 2
//arrLength = 7

//FIRST LOOP
// left = 4
// right = 5

//maximum = ?
// 5<7 ? yes
//arr[4(left)] = 9
//arr[5(right)] = 67
//9 >= 67 ? NO
//maximum = 5

//4<7? YES
//maximum = left = 4

//arr[2]<arr[4]
//............


function max_heapify(arr, index, arrLength) {
    let left = 2 * index;              //Left child index
    let right = 2 * index + 1;           //Right child index
    let maximum;
    if (right < arrLength) {                 //Checks if right child exist
        if (arr[left] >= arr[right]) {    //Compares children to find maximum
            maximum = left;
        }
        else {
            maximum = right;
        }
    }
    else if (left < arrLength) {                //Checks if left child exists
        maximum = left;
    }
    else return;                    //In case of no children return
    if (arr[index] < arr[maximum]) {            //Checks if the largest child is greater than parent
        swap(arr, index, maximum);          //If it is then swap both
        max_heapify(arr, maximum, arrLength);       //max-heapify again
    }
    return;
}
function heapSort(arr) {
    let arrLength = arr.length;
    //Loops stops when i is 0
    //i starts from the center of the array
    for (let index = Math.floor(arrLength / 2) - 1; index >= 0; index--) {
        max_heapify(arr, index, arrLength);
    }
    for (let index = arrLength - 1; index >= 0; index--) {
        swap(arr, 0, index);
        max_heapify(arr, 0, index);
    }
    return arr;
}

const main = () => {
    let arr = [7, 4, 3, 2, 9, 67, 85];
    console.log('Before Sort\n', arr);
    arr = heapSort(arr);
    console.log('After Sort\n', arr);
}
main();
