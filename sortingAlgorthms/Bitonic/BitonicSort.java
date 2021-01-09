import java.util.*;
import java.util.Collections;

//this program works when size of input is power of 2.
public class BitonicSort {

  static void exchange(int arr[], int i, int j, boolean d) {
    int temp;
    if (d == (arr[i] > arr[j])) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  static void merge(int arr[], int l, int c, boolean d) {
    int k, i;
    if (c > 1) {
      k = c / 2;
      for (i = l; i < l + k; i++) exchange(arr, i, i + k, d);
      merge(arr, l, k, d);
      merge(arr, l + k, k, d);
    }
  }

  static void bitonicSort(int arr[], int l, int c, boolean d) {
    int k;
    if (c > 1) {
      k = c / 2;
      bitonicSort(arr, l, k, true);
      bitonicSort(arr, l + k, k, false);
      merge(arr, l, c, d);
    }
  }

  static void sort(int arr[], int n, boolean order) {
    bitonicSort(arr, 0, n, order);
  }

  public static void main(String[] args) {
    Scanner commandReader = new Scanner(System.in);
    System.out.println(
      "Welcome to Java Program to perform bitonic sort on int array"
    );
    System.out.println(
      "Enter total number of elements ensure the length is of power of two : "
    );
    int length = commandReader.nextInt();
    int[] arr = new int[length];
    System.out.printf("Enter %d integers %n", length);
    for (int i = 0; i < length; i++) {
      arr[i] = commandReader.nextInt();
    }
    int n = arr.length;
    boolean order = true;
    sort(arr, n, order);
    System.out.println("\nSorted array");
    for (int j = 0; j < arr.length; j++) {
      System.out.println(arr[j] + "");
    }
    commandReader.close();
  }
  // public static void main(String[] args) {
  //   int arr[] = { 1, 10, 2, 3, 1, 23, 45, 21 };
  //   int n = arr.length;
  //   int i;
  //   boolean order = true;
  //   sort(arr, n, order);

  //   System.out.println("Sorted array: \n");
  //   for (i = 0; i < n; i++) System.out.println(arr[i]);
  // }
}
