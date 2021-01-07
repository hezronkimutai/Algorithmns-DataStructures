import java.util.*;
import java.util.Arrays;

class CountingSort {

  void countSort(int array[], int size) {
    int[] output = new int[size + 1];

    // Find the largest element of the array
    int max = array[0];
    for (int i = 1; i < size; i++) {
      if (array[i] > max) max = array[i];
    }
    int[] count = new int[max + 1];

    // Initialize count array with all zeros.
    for (int i = 0; i < max; ++i) {
      count[i] = 0;
    }

    // Store the count of each element
    for (int i = 0; i < size; i++) {
      count[array[i]]++;
    }

    // Store the cummulative count of each array
    for (int i = 1; i <= max; i++) {
      count[i] += count[i - 1];
    }

    // Find the index of each element of the original array in count array, and
    // place the elements in output array
    for (int i = size - 1; i >= 0; i--) {
      int sortedIndex = count[array[i]] - 1;
      output[sortedIndex] = array[i];
      count[array[i]]--;
    }

    // Copy the sorted elements into original array
    for (int i = 0; i < size; i++) {
      array[i] = output[i];
    }
  }

  // Driver code
  // public static void main(String args[]) {
  //   int[] data = { 4, 2, 2, 8, 3, 3, 1 };
  //   int size = data.length;
  //   CountingSort cs = new CountingSort();
  //   cs.countSort(data, size);
  //   System.out.println("Sorted Array in Ascending Order: ");
  //   System.out.println(Arrays.toString(data));
  // }

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
    int size = arr.length;
    CountingSort cs = new CountingSort();
    cs.countSort(arr, size);
    System.out.println("\nSorted array");
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i] + "");
    }
    commandReader.close();
  }
}
