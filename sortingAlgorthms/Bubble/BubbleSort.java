import java.util.*;

public class BubbleSort {

  public static void sort(int[] a) {
    //OUTER LOOP
    int arrLen = a.length;
    for (int i = 0; i < arrLen; i++) {
      //INNER LOOP
      for (int j = 0; j < arrLen; j++) {
        //If an element of the outer loop is less than element of the inner loop
        // Swap their positions
        if (a[i] < a[j]) {
          int temp = a[i];
          a[i] = a[j];
          a[j] = temp;
        }
      }
    }
  }

  public static void main(String[] args) {
    Scanner commandReader = new Scanner(System.in);
    System.out.println(
      "Welcome to Java Program to perform bubble sort on int array"
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
    // int n = arr.length;
    // boolean order = true;
    sort(arr);
    System.out.println("\nSorted array");
    for (int j = 0; j < arr.length; j++) {
      System.out.println(arr[j] + "");
    }
    commandReader.close();
  }
}
