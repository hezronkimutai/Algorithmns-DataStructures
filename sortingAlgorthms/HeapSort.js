function heapSort(a) {
    let n = a.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        max_heapify(a, i, n);
    }
    for (let i = n - 1; i >= 0; i--) {
        swap(a, 0, i);
        max_heapify(a, 0, i);
    }
    return a;
}

const main = () => {
    let arr = [7, 4, 3, 2, 9, 67, 85];
    console.log('Before Sort\n', arr);
    arr = heapSort(arr);
    console.log('After Sort\n', arr);
}
