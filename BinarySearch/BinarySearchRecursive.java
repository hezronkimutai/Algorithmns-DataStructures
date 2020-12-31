import java.util.Scanner;

/* * Java Program to implement binary search algorithm * using recursion */
public class BinarySearchRecursive {

  public static void main(String[] args) {
    Scanner commandReader = new Scanner(System.in);
    System.out.println(
      "Welcome to Java Program to perform binary search on int array"
    );
    System.out.println("Enter total number of elements : ");
    int length = commandReader.nextInt();
    int[] input = new int[length];
    System.out.printf("Enter %d integers %n", length);
    for (int i = 0; i < length; i++) {
      input[i] = commandReader.nextInt();
    }
    System.out.println(
      "Please enter number to be searched in array (sorted order)"
    );
    int key = commandReader.nextInt();
    int index = recursiveBinarySearch(input, key);
    if (index == -1) {
      System.out.printf("Sorry, %d is not found in array %n", key);
    } else {
      System.out.printf("%d is found in array at index %d %n", key, index);
    }
    commandReader.close();
  }

  /** * Java method to perform recursive binary search. It accept an integer array * and a number and return the index of number in the array. If number doesn't * exists in array then it return -1 * * @param input * @param number * @return index of given number in array or -1 if not found */
  public static int recursiveBinarySearch(int[] input, int key) {
    return binarySearch(input, 0, input.length - 1, key);
  }

  /** * internal method which implement recursive binary search algorithm * * @param array * @param start * @param end * @param target * @return index of target element or -1 if not found */
  private static int binarySearch(int[] array, int start, int end, int target) {
    int middle = (start + end) / 2;
    if (end < start) {
      return -1;
    }
    if (target == array[middle]) {
      return middle;
    } else if (target < array[middle]) {
      return binarySearch(array, start, middle - 1, target);
    } else {
      return binarySearch(array, middle + 1, end, target);
    }
  }
}
