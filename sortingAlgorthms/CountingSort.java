// import java.util.*;

// class CountingSort {

//   static void countSort(int[] arr) {
//     int max = Arrays.stream(arr).max().getAsInt();
//     int min = Arrays.stream(arr).min().getAsInt();
//     int range = max - min + 1;
//     int count[] = new int[range];
//     int output[] = new int[arr.length];
//     for (int i = 0; i < arr.length; i++) {
//       count[arr[i] - min]++;
//     }

//     for (int i = 1; i < count.length; i++) {
//       count[i] += count[i - 1];
//     }

//     for (int i = arr.length - 1; i >= 0; i--) {
//       output[count[arr[i] - min] - 1] = arr[i];
//       count[arr[i] - min]--;
//     }

//     for (int i = 0; i < arr.length; i++) {
//       arr[i] = output[i];
//     }
//   }

//   static void printArray(int[] arr) {
//     for (int i = 0; i < arr.length; i++) {
//       System.out.print(arr[i] + " ");
//     }
//     System.out.println("");
//   }

//   public static void main(String[] args) {
//     int[] arr = { -5, -10, 0, -3, 8, 5, -1, 10 };
//     System.out.println("Before Sort");
//     printArray(arr);
//     countSort(arr);
//     System.out.println("After Sort");
//     printArray(arr);
//   }
// }
// Counting sort in Java programming

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
    System.out.println();
    for (int i = 0; i < array.length; i++) {
      System.out.print(array[i] + " ");
    }

    // Initialize count array with all zeros.
    for (int i = 0; i < max; ++i) {
      count[i] = 0;
    }
    System.out.println();
    for (int i = 0; i < count.length; i++) {
      System.out.print(count[i] + " ");
    }

    // Store the count of each element
    for (int i = 0; i < size; i++) {
      count[array[i]]++;
    }
    System.out.println();
    for (int i = 0; i < count.length; i++) {
      System.out.print(count[i] + " ");
    }
    System.out.println();

    // Store the cummulative count of each array
    for (int i = 1; i <= max; i++) {
      count[i] += count[i - 1];
    }
    for (int i = 0; i < count.length; i++) {
      System.out.print(count[i] + " ");
    }
    System.out.println();
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
  public static void main(String args[]) {
    int[] data = { 4, 2, 2, 8, 3, 3, 1 };
    int size = data.length;
    CountingSort cs = new CountingSort();
    cs.countSort(data, size);
    System.out.println("Sorted Array in Ascending Order: ");
    System.out.println(Arrays.toString(data));
  }
}
