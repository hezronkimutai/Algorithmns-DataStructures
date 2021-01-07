import java.util.Scanner;

public class InsertionSort {

  public static void sort(int array[]) {
    int n = array.length;
    //Outer loop
    for (int j = 1; j < n; j++) {
      int key = array[j];
      int i = j - 1;
      // when i is a positive value {array indexes can't be negative}
      // and when current element of the first loop is less than the
      // previous element of the first loop
      // then assign the previous element to the current index
      while ((i > -1) && (array[i] > key)) {
        array[i + 1] = array[i];
        i--;
      }
      // Otherwise, let the current element be the current element
      array[i + 1] = key;
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
    sort(arr);
    System.out.println("\nSorted array");
    for (int i = 0; i < arr.length; i++) {
      System.out.println(arr[i] + "");
    }
    commandReader.close();
  }
}
