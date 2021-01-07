import java.util.*;
import java.util.Collections;

class HeapSort {

  static void swap(int[] a, int i, int j) {
    int tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }

  static void max_heapify(int[] arr, int index, int arrLength) {
    int left = 2 * index;
    int right = 2 * index + 1;
    int maximum;

    if (right < arrLength) {
      if (arr[left] >= arr[right]) {
        maximum = left;
      } else {
        maximum = right;
      }
    } else if (left < arrLength) {
      maximum = left;
    } else return;
    if (arr[index] < arr[maximum]) {
      swap(arr, index, maximum);
      max_heapify(arr, maximum, arrLength);
    }
    return;
  }

  static void heapSort(int arr[]) {
    int arrLength = arr.length;
    for (int index = (int) (arrLength / 2) - 1; index >= 0; index--) {
      max_heapify(arr, index, arrLength);
    }
    for (int index = arrLength - 1; index >= 0; index--) {
      swap(arr, 0, index);
      max_heapify(arr, 0, index);
    }
  }

  public static void main(String[] args) {
    Scanner commandReader = new Scanner(System.in);
    System.out.println(
      "Welcome to Java Program to perform insertion sort on int array"
    );
    System.out.println("Enter total number of elements : ");
    int length = commandReader.nextInt();
    int[] arr = new int[length];
    System.out.printf("Enter %d integers %n", length);
    for (int i = 0; i < length; i++) {
      arr[i] = commandReader.nextInt();
    }
    heapSort(arr);
    System.out.println("\nSorted array");
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i] + "");
    }
    commandReader.close();
  }
}
