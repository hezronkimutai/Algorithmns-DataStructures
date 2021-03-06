import java.util.Scanner;

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

  public static void main(String[] args) {
    Scanner commandReader = new Scanner(System.in);
    System.out.println(
      "Welcome to Java Program to perform merge sort on int array"
    );
    System.out.println("Enter total number of elements : ");
    int length = commandReader.nextInt();
    int[] input = new int[length];
    System.out.printf("Enter %d integers %n", length);
    for (int i = 0; i < length; i++) {
      input[i] = commandReader.nextInt();
    }
    MergeSort ob = new MergeSort();
    ob.sort(input, input.length - 1);
    System.out.println("\nSorted array");
    for (int i = 0; i < input.length; i++) {
      System.out.println(input[i] + "");
    }
    commandReader.close();
  }
}
