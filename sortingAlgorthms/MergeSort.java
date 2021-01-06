public class MergeSort {

  public static void merge(
    int[] arr,
    int[] leftArr,
    int[] rightArr,
    int left,
    int right
  ) {
    int i = 0, j = 0, k = 0;
    while (i < left && j < right) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k++] = leftArr[i++];
      } else {
        arr[k++] = rightArr[j++];
      }
    }
    while (i < left) {
      arr[k++] = leftArr[i++];
    }
    while (j < right) {
      arr[k++] = rightArr[j++];
    }
  }

  public static void sort(int[] a, int n) {
    //When arr length is less than 2, return void
    if (n < 2) {
      return;
    }
    int mid = n / 2;
    int[] left = new int[mid];
    int[] right = new int[n - mid];

    // populate left array with values
    for (int i = 0; i < mid; i++) {
      left[i] = a[i];
    }

    //populate right array with values
    for (int i = mid; i < n; i++) {
      right[i - mid] = a[i];
    }
    // recursive leftArr
    sort(left, mid);

    // recursive right Arr
    sort(right, n - mid);

    // merge left & right in a sorted manner
    merge(a, left, right, mid, n - mid);
  }

  public static void main(String args[]) {
    int arr[] = { 90, 23, 101, 45, 65, 23, 67, 89, 34, 23 };
    MergeSort ob = new MergeSort();
    ob.sort(arr, arr.length - 1);
    System.out.println("\nSorted array");
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i] + "");
    }
  }
}
